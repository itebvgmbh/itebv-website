// Build-Time-Prerendering: rendert jede Route mit react-dom/server zu statischem
// HTML (echter <title>/Meta/Canonical/OG + gerenderter Body inkl. JSON-LD) und
// schreibt eine Datei pro Route nach dist/public. Generiert außerdem sitemap.xml
// mit <lastmod>. ZERO neue npm-Abhängigkeiten (nutzt das vorhandene vite + react-dom).
//
// FAIL-SAFE: Das Skript beendet sich IMMER mit Exit-Code 0. Schlägt irgendetwas
// fehl, bleibt der bereits gebaute SPA in dist/public unangetastet (Client-Routing
// + useSeo greifen wie bisher). Ein kaputtes Prerendering kann den Deploy nie brechen.

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

function setTitle(html, title) {
  return html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escText(title)}</title>`);
}
function replaceOrAppend(html, re, tag) {
  return re.test(html) ? html.replace(re, tag) : html.replace(/<\/head>/, `  ${tag}\n</head>`);
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

function injectHead(template, route, canonical) {
  let html = template;
  html = setTitle(html, route.title);
  html = setMetaName(html, "description", route.description);
  html = setCanonical(html, canonical);
  html = setMetaProp(html, "og:title", route.title);
  html = setMetaProp(html, "og:description", route.description);
  html = setMetaProp(html, "og:url", canonical);
  html = setMetaName(html, "twitter:title", route.title);
  html = setMetaName(html, "twitter:description", route.description);
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

  // 2) Alle Routen ZUERST komplett rendern (im Speicher) – erst danach schreiben.
  //    So hinterlässt ein Fehler mittendrin keinen halb-prerenderten Stand.
  const outputs = [];
  for (const route of manifest.routes) {
    const bodyHtml = mod.render(route.path);
    const canonical = route.path === "/" ? `${siteUrl}/` : `${siteUrl}${route.path}`;
    let page = injectHead(template, route, canonical);
    page = page.replace(
      /<div id="root">\s*<\/div>/,
      `<div id="root">${bodyHtml}</div>`,
    );
    const filePath =
      route.path === "/"
        ? join(publicDir, "index.html")
        : join(publicDir, route.path, "index.html");
    outputs.push({ filePath, page });
  }

  const sitemap = buildSitemap(manifest.routes, siteUrl);

  // 3) Schreiben.
  for (const out of outputs) {
    mkdirSync(dirname(out.filePath), { recursive: true });
    writeFileSync(out.filePath, out.page, "utf8");
  }
  writeFileSync(join(publicDir, "sitemap.xml"), sitemap, "utf8");

  console.log(
    `[prerender] OK – ${outputs.length} Routen + sitemap.xml geschrieben.`,
  );
}

main().catch((err) => {
  console.error(
    `[prerender] übersprungen (SPA-Fallback bleibt intakt): ${err?.stack || err?.message || err}`,
  );
  process.exit(0);
});
