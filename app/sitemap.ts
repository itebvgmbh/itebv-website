import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

// Hartcodiertes Datum der letzten Aenderung der Seiteninhalte.
// Beim naechsten groesseren Inhaltsupdate hier aktualisieren.
const lastContentUpdate = new Date("2026-05-26");
const lastLegalUpdate = new Date("2026-03-01");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;

  return [
    {
      url: baseUrl,
      lastModified: lastContentUpdate,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/analyse`,
      lastModified: lastContentUpdate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/software`,
      lastModified: lastContentUpdate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ki-loesungen`,
      lastModified: lastContentUpdate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: lastLegalUpdate,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: lastLegalUpdate,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
