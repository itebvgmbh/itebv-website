import { siteConfig } from "./config";

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.companyName,
    description: siteConfig.siteDescription,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.street,
      postalCode: siteConfig.zip,
      addressLocality: siteConfig.city,
      addressCountry: "DE",
    },
    founder: {
      "@type": "Person",
      name: siteConfig.owner,
      jobTitle: "Geschäftsführer",
    },
    areaServed: {
      "@type": "Country",
      name: "Deutschland",
    },
    serviceType: [
      "IT-Beratung",
      "Digitalisierung",
      "KI-Lösungen",
      "Individuelle Software",
    ],
    priceRange: "$$",
  };
}

export function getWebPageJsonLd(
  title: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.companyName,
      url: siteConfig.siteUrl,
    },
  };
}
