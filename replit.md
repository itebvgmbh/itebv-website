# ITEBV – Website

Marketing-Website der ITEBV GmbH (KI- und IT-Beratung für den Mittelstand, Berlin). React/Vite-App unter `artifacts/itebv-website/`. Aktueller Schwerpunkt: Überarbeitung von Texten, Aussagen und Content – inhaltlich, sprachlich und für klassische **und** KI-gestützte Suche (SEO + GEO).

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- **Website-Quellcode:** `artifacts/itebv-website/`
- **Texte/Inhalte:** `src/components/sections/*.tsx` (Home-Abschnitte) und `src/pages/*.tsx` (Unterseiten)
- **Stammdaten (Name, Adresse, CTA, Kennzahlen):** `src/lib/config.ts` (`siteConfig`) – Source of Truth, nicht hartkodieren
- **Strukturierte Daten / JSON-LD:** `src/lib/structured-data.ts` (FAQ, Service, Breadcrumb)
- **Meta-Tags pro Seite:** `src/hooks/useSeo.ts` + global in `artifacts/itebv-website/index.html`
- **SEO-Dateien:** `artifacts/itebv-website/public/{sitemap.xml,robots.txt}`

## Content- & SEO-Setup (für Textüberarbeitung)

- **Markenstimme:** `.cursor/memory/brand-voice.md` – Tonalität, Botschaften, Do's/Don'ts
- **Keywords/Themen:** `.cursor/memory/seo-keywords.md` – Keyword-Map je Seite, GEO-Hebel
- **Regeln:** `.cursor/rules/copywriting.mdc` und `.cursor/rules/seo-geo.mdc` (greifen bei Website-Dateien)
- **Eigene Skills:** `.cursor/skills/itebv-website-copy/`, `.cursor/skills/itebv-seo-geo/`
- **Methodik-Skills (extern, 20 Stück):** `.agents/skills/` (Paket `aaron-he-zhu/seo-geo-claude-skills`, Apache-2.0)

## Product

Persönliche KI-/IT-Beratung, Digitalisierung und individuelle Software für den Mittelstand. USP: ein Ansprechpartner von der Analyse bis zum laufenden System, ehrlich statt oversold, Software gehört dem Kunden.

## User preferences

- Kommunikation auf Deutsch.
- Vor größeren Änderungen erst Vorgehen abstimmen.
- Markenstimme & Keywords sind Erstentwürfe – mit dem Inhaber validieren, bevor sie als gesetzt gelten.

## Gotchas

- Stammdaten kommen aus `siteConfig` – Änderungen dort, nicht in einzelnen Komponenten duplizieren.
- FAQ-Texte (`FAQ.tsx`) speisen das FAQPage-JSON-LD – bei Textänderung bleibt das Schema automatisch konsistent.
- Meta-Title/Description je Unterseite leben oben in der jeweiligen `pages/*.tsx` (Konstanten `pageTitle`/`pageDescription`).

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
