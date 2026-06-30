import { siteConfig } from "./config";

// Single source of truth für die Per-Route-Head-Daten (Title + Description).
// Wird sowohl von den Seiten (Client, useSeo) als auch vom Prerender-Skript
// (scripts/prerender.mjs via entry-server) genutzt – so kann nichts auseinanderlaufen.

export type PageSeo = { title: string; description: string };

export const pageSeo = {
  "/": {
    title: siteConfig.siteTitle,
    description: siteConfig.siteDescription,
  },
  "/analyse": {
    title: "Analyse & Digitalisierungsstrategie | ITEBV – IT-Beratung Berlin",
    description:
      "ITEBV analysiert Ihre Prozesse und liefert eine realistische Digitalisierungsstrategie für Mittelstand und KMU – konkrete Roadmap statt PowerPoint für die Schublade. Beratung aus Berlin.",
  },
  "/software": {
    title:
      "Individuelle Geschäftssoftware | ITEBV – Softwareentwicklung Berlin",
    description:
      "ITEBV entwickelt individuelle Geschäftssoftware, die zu Ihrem Unternehmen passt. Keine Lizenzkosten, keine Abhängigkeit – Software, die Ihnen gehört. KI-gestützte Entwicklung, persönlicher Ansprechpartner aus Berlin.",
  },
  "/ki-loesungen": {
    title: "KI-Lösungen für Mittelstand & KMU | ITEBV – KI-Beratung Berlin",
    description:
      "ITEBV bringt KI in Mittelstand und KMU: Chatbots, Voice Agents, Prozessautomatisierung und RAG-Wissensdatenbanken – KI, die Zeit und Geld bringt. KI-Beratung aus Berlin, deutschlandweit.",
  },
  "/blog": {
    title: "KI-Kompass für den Mittelstand – Blog | ITEBV",
    description:
      "Monatlich: die relevanten KI-Entwicklungen für Mittelstand und KMU – nüchtern eingeordnet, ohne Hype. Was sich für Ihr Unternehmen wirklich lohnt.",
  },
  "/impressum": {
    title: "Impressum | ITEBV GmbH",
    description:
      "Impressum der ITEBV GmbH – IT-Beratung in Berlin. Angaben gemäß § 5 TMG.",
  },
  "/datenschutz": {
    title: "Datenschutz & Disclaimer | ITEBV GmbH",
    description:
      "Datenschutzerklärung und Disclaimer der ITEBV GmbH. Informationen zur Verarbeitung personenbezogener Daten auf itebv.de.",
  },
} satisfies Record<string, PageSeo>;
