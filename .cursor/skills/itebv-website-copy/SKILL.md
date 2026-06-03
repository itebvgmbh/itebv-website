---
name: itebv-website-copy
description: Überarbeitet Texte und Aussagen der ITEBV-Website in der richtigen Markenstimme. Verwenden, wenn Inhalte unter artifacts/itebv-website/ geschrieben, umformuliert, verbessert oder neu erstellt werden (Hero, Sections, Unterseiten, Meta-Texte).
---

# ITEBV Website Copy

Orchestriert die Textüberarbeitung der ITEBV-Website: Markenstimme + Keywords + bewährte SEO/GEO-Methodik.

## Vor dem Schreiben lesen

1. `.cursor/memory/brand-voice.md` – Tonalität, Botschaften, Do's/Don'ts.
2. `.cursor/memory/seo-keywords.md` – Primär-Keyword & GEO-Hebel der betroffenen Seite.
3. Den bestehenden Abschnitt/die Seite, um Stil und Struktur zu treffen.

## Workflow

```
- [ ] 1. Kontext: Welche Seite/Abschnitt? Primär-Keyword & Ziel (Info/Conversion)?
- [ ] 2. Kernbotschaft in einem Satz festlegen (answer-first).
- [ ] 3. Entwurf in ITEBV-Stimme: Sie-Anrede, Ich-Form für Stefan, konkret, ehrlich.
- [ ] 4. SEO-Check: Primär-Keyword natürlich platziert, eine h1, saubere h2/h3.
- [ ] 5. GEO-Check: Definition (25–50 Wörter), zitierfähige Zahlen, ggf. Q&A.
- [ ] 6. Stammdaten aus siteConfig, nicht hartkodieren.
- [ ] 7. Tonalitäts-Gegenlesen gegen die Don'ts.
```

## Tiefe Methodik (bei Bedarf)

- Längere Texte/Briefings: Skill `seo-content-writer` (in `.agents/skills/`).
- KI-Zitierbarkeit schärfen: Skill `geo-content-optimizer`.
- Qualitäts-Gate vor Veröffentlichung: Skill `content-quality-auditor` (CORE-EEAT).

## Wichtig

- Niemals Fakten/Kennzahlen erfinden. Unsichere Aussagen (Preise, Referenzen, Zeiträume) markieren und mit dem Inhaber abklären.
- Änderungen an Title/Description: in `pages/*.tsx` (`pageTitle`/`pageDescription`) bzw. `index.html`.
