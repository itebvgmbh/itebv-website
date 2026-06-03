# ITEBV – Content-Änderungslog

Chronologie der Textänderungen an der Website. Grundlage: `.cursor/memory/positioning.md` (Mover-Positionierung).

## Phase 1 – Hero (`components/sections/Hero.tsx`)
- Stat „Ehemalige Mandate" → „Vertrauen von" (Linde · PSI · KROENERT).
- Stat „Erfahrung 10+ Jahre" → „10+ Jahre IT, Prozesse & KI".
- Eyebrow „Mittelstand" → „Mittelstand & KMU".
- Headline → „KI und Software, mit denen Ihr Unternehmen wirklich vorankommt." (grammatisch eindeutig).
- Subline auf Mover + Wedge (ehrliche Priorisierung) + KMU.

## Phase 2 – Referenz-Logos (`components/sections/References.tsx`)
- Logo-Styling vergrößert/lesbar: `h-11 w-32 md:h-12 md:w-40 opacity-90`, Graustufe entfernt.

## Phase 3 – Tonalität seitenweit (Mover, Wedge=Urteilskraft, KMU, Trust)
- **WhyMe**: Prinzip „Ehrlich statt oversold / Nicht jedes Problem braucht KI" → „Ehrlich, wo es zählt." (Priorisierung statt Bauchgefühl).
- **Services**: Intro auf Mover + „Für Mittelstand und KMU".
- **AboutMe**: 2. Absatz auf Mover (schneller/wettbewerbsfähiger), Solo+KI **dezent** als Glaubwürdigkeit; „und die Ihnen gehört" (unabhängig).
- **Process**: Intro betont Tempo/Wirkung statt nur „transparent".
- **References**: Intro „aktuellen und vergangenen Mandaten" → „aktuellen Projekten".
- **FAQ**: neue Frage „Was passiert, wenn Sie als Einzelperson ausfallen?" (Code-Eigentum, kein Lock-in, Partnernetz) – speist auch FAQPage-JSON-LD.
- **Analyse** (`pages/Analyse.tsx`): H1 → „Sie wollen vorankommen. Die Frage ist nur: wo zuerst?"; Meta-Description + KMU.
- **Software** (`pages/Software.tsx`): „Für wen das passt" → „Für Mittelstand und KMU …".
- **KiLoesungen** (`pages/KiLoesungen.tsx`): Lead auf Mover + KMU (defensive „verliert seinen Job"-Formulierung entfernt); Meta-Title/Description auf „Mittelstand & KMU" + Wirkung.

## Phase 4 – SEO/GEO-Feinschliff (technisch)
- **sitemap.xml:** Namespace-Tippfehler behoben (`sitemap.org` → `sitemaps.org`); war potenziell ungültig.
- **config.ts:** `siteTitle` (~73 → 56 Zeichen) und `siteDescription` (~205 → ~155 Zeichen) gekürzt und auf „Mittelstand & KMU" + Mover gebracht (wirkt auf Home-Meta via `useSeo` und auf LocalBusiness-Schema).
- **structured-data.ts:** neues **Person-Schema** (`getPersonJsonLd`) für Stefan Tittmann (jobTitle, worksFor, knowsAbout, address) → E-E-A-T/Entity für KI-Suche; `serviceType` um „Prozessautomatisierung" ergänzt; Service-`audienceType` „Mittelstand" → „Mittelstand und KMU".
- **AboutMe.tsx:** Person-JSON-LD wird gerendert.
- **index.html:** statische Title/Description/Keywords/OG/Twitter auf KMU + neue Formulierung angeglichen.
- **Bestätigt:** LocalBusiness/ProfessionalService-JSON-LD ist global in `App.tsx` aktiv; eine `<h1>` je Seite; ServiceCrossLinks vernetzt die Leistungsseiten.

## Offen / nächste Phasen
- **Phase 4 Rest (optional):** Answer-first-Definitionen pro Kernbegriff für GEO (eher Phase 5 / Content).
- **Phase 5 (Content/Artikel):** braucht Inhaber-Input – 3 reale Kundenfragen (Annahmen-Entwurf in `seo-keywords.md`).
- **Annahmen zur Bestätigung:** 3 Kundenfragen (Content-Themen); Erfolgsbeteiligung bewusst dezent gehalten (keine Zahl nötig).
