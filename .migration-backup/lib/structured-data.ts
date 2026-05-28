import { siteConfig } from "./config";

function getSameAs(): string[] {
  return [
    siteConfig.linkedInUrl,
    siteConfig.xingUrl,
    siteConfig.googleBusinessUrl,
  ].filter((url): url is string => Boolean(url && url.trim() !== ""));
}

export function getLocalBusinessJsonLd() {
  const sameAs = getSameAs();
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${siteConfig.siteUrl}/#business`,
    name: siteConfig.companyName,
    legalName: siteConfig.companyName,
    description: siteConfig.siteDescription,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
    logo: `${siteConfig.siteUrl}/images/itebv-logo.png`,
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
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    serviceType: [
      "KI-Beratung",
      "IT-Beratung",
      "Digitalisierung",
      "Individuelle Software",
      "Voice Agents",
      "Chatbots",
    ],
    priceRange: "$$",
  };
  if (sameAs.length > 0) {
    data.sameAs = sameAs;
  }
  return data;
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

export function getServiceJsonLd(args: {
  name: string;
  description: string;
  slug: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    description: args.description,
    serviceType: args.serviceType ?? args.name,
    url: `${siteConfig.siteUrl}${args.slug}`,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.siteUrl}/#business`,
      name: siteConfig.companyName,
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Mittelstand",
    },
  };
}

export function getBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getFaqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getOrganizationJsonLd() {
  const sameAs = getSameAs();
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.siteUrl}/#organization`,
    name: siteConfig.companyName,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/images/itebv-logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      areaServed: "DE",
      availableLanguage: ["German", "English"],
    },
  };
  if (sameAs.length > 0) {
    data.sameAs = sameAs;
  }
  return data;
}
