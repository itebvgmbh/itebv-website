# OG-Bilder für Blog-Beiträge

Erzeugt die Open-Graph-Vorschaubilder (1200×630 PNG) im ITEBV-Markenlook, die
beim Teilen eines Beitrags auf LinkedIn, WhatsApp, X & Co. angezeigt werden.

**Wichtig:** Diese Werkzeuge laufen **eigenständig und außerhalb des Builds**.
Sie fügen dem Projekt bewusst *keine* Abhängigkeit hinzu — Ergebnis sind fertige
PNG-Dateien unter `public/images/blog/`, die eingecheckt werden.

## Neues Bild für einen Beitrag erzeugen

1. Eintrag in `targets` in `generate.mjs` ergänzen (Dateiname, Titel, Untertitel).
2. Einmalig ein Arbeitsverzeichnis außerhalb des Repos vorbereiten:

   ```
   mkdir og-tmp && cd og-tmp
   npm init -y && npm install @resvg/resvg-js
   pip install fonttools brotli
   ```

3. Schriften vorbereiten: `python make-fonts.py` — wandelt die Web-Schriften aus
   `public/fonts/*.woff2` in statische TTFs um (Family-Name und Gewichtsklasse
   werden explizit gesetzt). Ohne diesen Schritt rendert der Rasterizer **keinen
   Text**; die von Google Fonts direkt geladenen `/l/font?kit=`-Dateien sind
   dafür unbrauchbar.
4. `node generate.mjs` — schreibt die PNGs nach `public/images/blog/`.
5. Im Beitrag `ogImage: "/images/blog/og-<slug>.png"` ins Frontmatter eintragen.

Beide Skripte erwarten das Repo unter dem in ihnen gesetzten Pfad; bei einem
anderen Ablageort die Konstanten `outDir` bzw. `WEB` oben in den Dateien anpassen.
