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
      "Prozessautomatisierung",
      "Voice Agents",
      "Chatbots",
    ],
    priceRange: "$$",
  };
  if (sameAs.length > 0) data.sameAs = sameAs;
  return data;
}

export function getPersonJsonLd() {
  const sameAs = getSameAs();
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.siteUrl}/#stefan`,
    name: siteConfig.owner,
    jobTitle: siteConfig.ownerTitle,
    image: `${siteConfig.siteUrl}${siteConfig.stefanFoto}`,
    worksFor: {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.siteUrl}/#business`,
      name: siteConfig.companyName,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressCountry: "DE",
    },
    knowsAbout: [
      "KI-Beratung",
      "IT-Beratung",
      "Digitalisierung",
      "Individuelle Softwareentwicklung",
      "Prozessautomatisierung",
      "Voice Agents",
      "Chatbots",
      "RAG-Systeme",
    ],
  };
  if (sameAs.length > 0) data.sameAs = sameAs;
  return data;
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
      audienceType: "Mittelstand und KMU",
    },
  };
}

export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
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

export function getBlogPostingJsonLd(args: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  image?: string;
}) {
  const url = `${siteConfig.siteUrl}/blog/${args.slug}`;
  const image = args.image
    ? args.image.startsWith("http")
      ? args.image
      : `${siteConfig.siteUrl}${args.image}`
    : `${siteConfig.siteUrl}${siteConfig.ogImage}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: args.title,
    description: args.description,
    datePublished: args.datePublished,
    dateModified: args.datePublished,
    inLanguage: "de-DE",
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image,
    author: {
      "@type": "Person",
      name: siteConfig.owner,
      url: siteConfig.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.siteUrl}/#business`,
      name: siteConfig.companyName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.siteUrl}/images/itebv-logo.png`,
      },
    },
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.siteUrl}/#website`,
    name: siteConfig.companyName,
    url: `${siteConfig.siteUrl}/`,
    inLanguage: "de-DE",
    publisher: { "@id": `${siteConfig.siteUrl}/#business` },
  };
}
