// Build-Time-Prerendering: rendert jede Route mit react-dom/server zu statischem
// HTML (echter <title>/Meta/Canonical/OG + gerenderter Body inkl. JSON-LD) und
// schreibt eine Datei pro Route nach dist/public/seiten/<pfad>.html. Generiert außerdem
// sitemap.xml mit <lastmod> und 404.html. ZERO neue npm-Abhängigkeiten.
//
// WARUM /seiten/*.html statt /<pfad>/index.html: Liegt unter dist/public ein Ordner
// mit dem Namen der Route, leitet der Replit-Static-Server /analyse per 301 auf
// /analyse/ um – Canonical und Sitemap nennen aber /analyse. Google meldete dann
// "Seite mit Weiterleitung" bzw. "Umleitungsfehler". Ohne gleichnamigen Ordner greift
// die Rewrite-Regel in .replit-artifact/artifact.toml direkt und liefert 200.
//
// 404: Es gibt KEINEN Catch-all-Rewrite mehr. Unbekannte Adressen bekommen 404.html
// mit Status 404 (vorher: Startseite mit 200 = Soft 404 für alte WordPress-URLs).
//
// FEHLER => Exit-Code 1, der Build schlägt fehl und die laufende Version bleibt live.
// (Ein Teil-Erfolg wäre schlimmer: die Rewrites zeigen auf /seiten/*.html, ohne diese
// Dateien wären alle Unterseiten 404.) Ebenso, wenn eine Route keine passende
// Rewrite-Regel in artifact.toml hat.

import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from "node:fs";

const here = dirname(fileURLToPath(import.meta.url));
const siteRoot = join(here, "..");
const publicDir = join(siteRoot, "dist", "public");
const serverDir = join(siteRoot, "dist", "server");
const viteConfig = join(siteRoot, "vite.config.ts");
const artifactToml = join(siteRoot, ".replit-artifact", "artifact.toml");

// Ziel-Datei (relativ zu dist/public, mit führendem "/") einer Route.
// "/" bleibt index.html (wird über Shadowing direkt ausgeliefert).
function seitenDatei(path) {
  return path === "/" ? "/index.html" : `/seiten${path}.html`;
}

// Prüft, dass jede Route genau die Rewrite-Regel hat, die auf ihre Datei zeigt,
// und dass kein Catch-all "/*" mehr existiert (der würde den 404 wieder schlucken).
function pruefeRewrites(routes) {
  const toml = readFileSync(artifactToml, "utf8");
  const regeln = [...toml.matchAll(/from\s*=\s*"([^"]+)"\s*\n\s*to\s*=\s*"([^"]+)"/g)].map(
    (m) => ({ from: m[1], to: m[2] }),
  );
  const fehler = [];
  if (regeln.some((r) => r.from === "/*")) {
    fehler.push('Catch-all-Rewrite "/*" gefunden – er verhindert echte 404.');
  }
  for (const route of routes) {
    if (route.path === "/") continue;
    const ziel = seitenDatei(route.path);
    const treffer = regeln.find((r) => r.from === `${route.path}/*`);
    if (!treffer) fehler.push(`Rewrite fehlt: from = "${route.path}/*" to = "${ziel}"`);
    else if (treffer.to !== ziel) fehler.push(`Rewrite ${route.path}/* zeigt auf ${treffer.to}, erwartet ${ziel}`);
  }
  if (fehler.length) {
    throw new Error(`artifact.toml passt nicht zu den Routen:\n  - ${fehler.join("\n  - ")}`);
  }
}

function seite404(template, bodyHtml) {
  let html = setTitle(template, "Seite nicht gefunden | ITEBV GmbH");
  html = setMetaName(html, "description", "Die angeforderte Seite konnte nicht gefunden werden.");
  html = setMetaName(html, "robots", "noindex, follow");
  html = html.replace(/\s*<link[^>]*\brel="canonical"[^>]*>/, "");
  html = html.replace(/\s*<meta[^>]*\bproperty="og:url"[^>]*>/, "");
  return html.replace(/<div id="root">\s*<\/div>/, () => `<div id="root">${bodyHtml}</div>`);
}

// vite.config.ts wirft ohne diese Env-Variablen; in der Replit-Build-Phase sind
// sie gesetzt, hier setzen wir robuste Defaults (Prod-Basepfad "/").
process.env.BASE_PATH = process.env.BASE_PATH || "/";
process.env.PORT = process.env.PORT || "5000";
process.env.NODE_ENV = process.env.NODE_ENV || "production";

const escAttr = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
const escText = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Ersetzungen IMMER ueber eine Funktion: als String wuerde "$$", "$&" usw. im
// Ersatztext von String.replace als Sondersequenz interpretiert (z. B. macht
// priceRange "$$" aus der JSON-LD sonst ein "$").
function setTitle(html, title) {
  return html.replace(
    /<title>[\s\S]*?<\/title>/,
    () => `<title>${escText(title)}</title>`,
  );
}
function replaceOrAppend(html, re, tag) {
  return re.test(html)
    ? html.replace(re, () => tag)
    : html.replace(/<\/head>/, () => `  ${tag}\n</head>`);
}
// Reihenfolge-unabhängig (matcht das ganze Tag anhand des Schlüssel-Attributs),
// damit ein künftiges Umsortieren der Attribute in index.html kein Duplikat erzeugt.
function setMetaName(html, name, content) {
  const re = new RegExp(`<meta[^>]*\\bname="${name}"[^>]*>`);
  return replaceOrAppend(html, re, `<meta name="${name}" content="${escAttr(content)}" />`);
}
function setMetaProp(html, prop, content) {
  const re = new RegExp(`<meta[^>]*\\bproperty="${prop}"[^>]*>`);
  return replaceOrAppend(html, re, `<meta property="${prop}" content="${escAttr(content)}" />`);
}
function setCanonical(html, href) {
  const re = /<link[^>]*\brel="canonical"[^>]*>/;
  return replaceOrAppend(html, re, `<link rel="canonical" href="${escAttr(href)}" />`);
}

function injectHead(template, route, canonical, siteUrl) {
  let html = template;
  html = setTitle(html, route.title);
  html = setMetaName(html, "description", route.description);
  html = setCanonical(html, canonical);
  html = setMetaProp(html, "og:title", route.title);
  html = setMetaProp(html, "og:description", route.description);
  html = setMetaProp(html, "og:url", canonical);
  html = setMetaName(html, "twitter:title", route.title);
  html = setMetaName(html, "twitter:description", route.description);

  if (route.image) {
    const abs = route.image.startsWith("http")
      ? route.image
      : `${siteUrl}${route.image}`;
    html = setMetaProp(html, "og:image", abs);
    html = setMetaProp(html, "og:image:alt", route.imageAlt || route.title);
    html = setMetaName(html, "twitter:image", abs);
  }

  if (route.isArticle) {
    html = setMetaProp(html, "og:type", "article");
    if (route.lastmod) {
      // Volles ISO-8601-Datum; 12:00 UTC vermeidet Datumssprünge je Zeitzone.
      html = setMetaProp(
        html,
        "article:published_time",
        `${route.lastmod}T12:00:00Z`,
      );
    }
  }

  return html;
}

function buildSitemap(routes, siteUrl) {
  const priority = {
    "/": "1.0",
    "/analyse": "0.9",
    "/software": "0.9",
    "/ki-loesungen": "0.9",
    "/blog": "0.8",
    "/impressum": "0.2",
    "/datenschutz": "0.2",
  };
  const changefreq = {
    "/": "weekly",
    "/blog": "weekly",
    "/analyse": "monthly",
    "/software": "monthly",
    "/ki-loesungen": "monthly",
    "/impressum": "yearly",
    "/datenschutz": "yearly",
  };
  const dates = routes.map((r) => r.lastmod).filter(Boolean).sort();
  const newest = dates.length ? dates[dates.length - 1] : null;

  const entries = routes.map((r) => {
    const loc = r.path === "/" ? `${siteUrl}/` : `${siteUrl}${r.path}`;
    let lastmod = r.lastmod || null;
    if (r.path === "/" || r.path === "/blog") lastmod = newest;
    const p = priority[r.path] ?? "0.6";
    const cf = changefreq[r.path] ?? "monthly";
    return (
      `  <url>\n` +
      `    <loc>${loc}</loc>\n` +
      (lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : "") +
      `    <changefreq>${cf}</changefreq>\n` +
      `    <priority>${p}</priority>\n` +
      `  </url>`
    );
  });

  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    entries.join("\n") +
    `\n</urlset>\n`
  );
}

function findServerEntry() {
  if (!existsSync(serverDir)) return null;
  const files = readdirSync(serverDir);
  const exact = files.find((f) => /^entry-server\.(m?js)$/.test(f));
  const fallback = files.find((f) => f.endsWith(".js") || f.endsWith(".mjs"));
  const name = exact || fallback;
  return name ? join(serverDir, name) : null;
}

async function main() {
  const templatePath = join(publicDir, "index.html");
  if (!existsSync(templatePath)) {
    throw new Error(`Kein dist/public/index.html – wurde 'vite build' ausgeführt?`);
  }

  // 1) SSR-Build des Server-Entry (separater outDir, dist/public bleibt unberührt).
  const { build } = await import("vite");
  await build({
    configFile: viteConfig,
    logLevel: "warn",
    build: {
      ssr: "src/entry-server.tsx",
      outDir: "dist/server",
      emptyOutDir: true,
      reportCompressedSize: false,
    },
  });

  const entryFile = findServerEntry();
  if (!entryFile) throw new Error("SSR-Build-Ausgabe nicht gefunden (dist/server).");

  const mod = await import(pathToFileURL(entryFile).href);
  if (typeof mod.render !== "function" || typeof mod.getPrerenderManifest !== "function") {
    throw new Error("entry-server exportiert render/getPrerenderManifest nicht.");
  }

  const manifest = mod.getPrerenderManifest();
  const siteUrl = String(manifest.siteUrl).replace(/\/$/, "");
  const template = readFileSync(templatePath, "utf8");
  pruefeRewrites(manifest.routes);

  // 2) Alle Routen ZUERST komplett rendern (im Speicher) – erst danach schreiben.
  //    So hinterlässt ein Fehler mittendrin keinen halb-prerenderten Stand.
  const outputs = [];
  for (const route of manifest.routes) {
    const bodyHtml = mod.render(route.path);
    const canonical = route.path === "/" ? `${siteUrl}/` : `${siteUrl}${route.path}`;
    let page = injectHead(template, route, canonical, siteUrl);
    page = page.replace(
      /<div id="root">\s*<\/div>/,
      () => `<div id="root">${bodyHtml}</div>`,
    );
    const filePath = join(publicDir, seitenDatei(route.path));
    // Ein gleichnamiger Ordner würde wieder den 301 auf "/pfad/" auslösen.
    if (route.path !== "/" && existsSync(join(publicDir, route.path))) {
      throw new Error(`dist/public${route.path} existiert als Datei/Ordner und überschattet die Route.`);
    }
    outputs.push({ filePath, page });
  }

  // 404-Seite: rendert die NotFound-Route des Routers (unbekannter Pfad).
  outputs.push({
    filePath: join(publicDir, "404.html"),
    page: seite404(template, mod.render("/__seite-nicht-gefunden")),
  });

  const sitemap = buildSitemap(manifest.routes, siteUrl);

  // 3) Schreiben.
  for (const out of outputs) {
    mkdirSync(dirname(out.filePath), { recursive: true });
    writeFileSync(out.filePath, out.page, "utf8");
  }
  writeFileSync(join(publicDir, "sitemap.xml"), sitemap, "utf8");

  console.log(
    `[prerender] OK – ${outputs.length - 1} Routen + 404.html + sitemap.xml geschrieben.`,
  );
}

main().catch((err) => {
  console.error(
    `[prerender] FEHLGESCHLAGEN – Build abgebrochen, die laufende Version bleibt live: ${err?.stack || err?.message || err}`,
  );
  process.exit(1);
});
