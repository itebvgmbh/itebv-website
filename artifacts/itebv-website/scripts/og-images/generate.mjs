// Erzeugt die Open-Graph-Bilder (1200x630 PNG) fuer die KI-Kompass-Beitraege.
// Laeuft ISOLIERT im Scratchpad (kein Repo-Dependency); Ergebnis sind statische
// PNG-Dateien, die ins Repo committet werden.
import { Resvg } from "@resvg/resvg-js";
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const fontDir = join(here, "fonts"); // von make-fonts.py erzeugt
const outDir = join(here, "..", "..", "public", "images", "blog");

const fontFiles = readdirSync(fontDir).map((f) => join(fontDir, f));

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function svg({ eyebrow, title, subtitle }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#062F70"/>
      <stop offset="48%" stop-color="#00408A"/>
      <stop offset="100%" stop-color="#0057B7"/>
    </linearGradient>
    <radialGradient id="glow" cx="78%" cy="4%" r="62%">
      <stop offset="0%" stop-color="#DCEBFF" stop-opacity="0.55"/>
      <stop offset="55%" stop-color="#2F76D6" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#2F76D6" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="needle" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#EAF1FB"/>
      <stop offset="100%" stop-color="#2F76D6"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <g stroke="#FFFFFF" stroke-opacity="0.06" stroke-width="2">
    <line x1="-100" y1="170" x2="1300" y2="-80"/>
    <line x1="-100" y1="330" x2="1300" y2="80"/>
    <line x1="-100" y1="490" x2="1300" y2="240"/>
  </g>

  <g transform="translate(925 300)" fill="none" stroke="#DCEBFF">
    <circle r="196" stroke-opacity="0.10" stroke-width="1.6"/>
    <circle r="137" stroke-opacity="0.16" stroke-width="1.6"/>
    <circle r="80" stroke-opacity="0.22" stroke-width="1.6"/>
    <g stroke-opacity="0.45" stroke-width="2.8">
      <line x1="0" y1="-208" x2="0" y2="-174"/>
      <line x1="0" y1="174" x2="0" y2="208"/>
      <line x1="-208" y1="0" x2="-174" y2="0"/>
      <line x1="174" y1="0" x2="208" y2="0"/>
    </g>
    <g transform="rotate(38)">
      <polygon points="0,-146 25,0 0,18 -25,0" fill="url(#needle)" stroke="none"/>
      <polygon points="0,146 25,0 0,-18 -25,0" fill="#0B1016" fill-opacity="0.28" stroke="none"/>
    </g>
    <circle r="8" fill="#FBFCFE" stroke="none"/>
  </g>

  <line x1="80" y1="150" x2="118" y2="150" stroke="#9FC2F5" stroke-width="2"/>
  <text x="132" y="158" fill="#CFE0FA" font-family="Geist Mono" font-weight="500" font-size="24" letter-spacing="5.5">${esc(eyebrow)}</text>

  <text x="78" y="330" fill="#FFFFFF" font-family="Geist" font-weight="600" font-size="112" letter-spacing="-3.2">${esc(title)}</text>

  <text x="82" y="396" fill="#FFFFFF" fill-opacity="0.74" font-family="Geist" font-weight="400" font-size="40">${esc(subtitle)}</text>

  <line x1="80" y1="500" x2="1120" y2="500" stroke="#FFFFFF" stroke-opacity="0.14" stroke-width="1.5"/>
  <text x="78" y="556" fill="#FFFFFF" fill-opacity="0.95" font-family="Geist" font-weight="600" font-size="34" letter-spacing="-0.5">ITEBV</text>
  <text x="182" y="555" fill="#CFE0FA" fill-opacity="0.75" font-family="Geist Mono" font-weight="400" font-size="22">itebv.de</text>
</svg>`;
}

const targets = [
  { file: "og-ki-kompass-august-2026.png", eyebrow: "KI-KOMPASS", title: "August 2026", subtitle: "für den Mittelstand" },
  { file: "og-ki-kompass-juli-2026.png", eyebrow: "KI-KOMPASS", title: "Juli 2026", subtitle: "für den Mittelstand" },
  { file: "og-ki-kompass-juni-2026.png", eyebrow: "KI-KOMPASS", title: "Juni 2026", subtitle: "für den Mittelstand" },
  { file: "og-ki-kompass-mai-2026.png", eyebrow: "KI-KOMPASS", title: "Mai 2026", subtitle: "für den Mittelstand" },
  { file: "og-ki-kompass-april-2026.png", eyebrow: "KI-KOMPASS", title: "April 2026", subtitle: "für den Mittelstand" },
  { file: "og-blog.png", eyebrow: "BLOG", title: "KI-Kompass", subtitle: "für den Mittelstand" },
];

mkdirSync(outDir, { recursive: true });

for (const t of targets) {
  const resvg = new Resvg(svg(t), {
    fitTo: { mode: "width", value: 1200 },
    font: {
      fontFiles,
      loadSystemFonts: false,
      defaultFontFamily: "Geist",
    },
  });
  const png = resvg.render().asPng();
  writeFileSync(join(outDir, t.file), png);
  console.log(`${t.file}  ${(png.length / 1024).toFixed(0)} KB`);
}

console.log(
  "fonts used:",
  fontFiles.map((f) => f.split(/[\\/]/).pop()).join(", "),
);
