import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/chat/ChatWidget";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";
import { siteConfig } from "@/lib/config";
import { getLocalBusinessJsonLd } from "@/lib/structured-data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: "#0056A4",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.siteTitle,
    template: `%s | ${siteConfig.companyName}`,
  },
  description: siteConfig.siteDescription,
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "KI-Beratung",
    "IT-Beratung",
    "Digitalisierung Mittelstand",
    "Individuelle Software",
    "KI-Lösungen",
    "Voice Agent",
    "Chatbot Unternehmen",
    "ERP-Beratung",
    "Prozessdigitalisierung",
    "Berlin",
  ],
  authors: [{ name: siteConfig.owner }],
  creator: siteConfig.owner,
  publisher: siteConfig.companyName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteConfig.siteUrl,
    siteName: siteConfig.companyName,
    title: siteConfig.siteTitle,
    description: siteConfig.siteDescription,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.companyName} – KI- und IT-Beratung für den Mittelstand`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteTitle,
    description: siteConfig.siteDescription,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getLocalBusinessJsonLd()),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <a
          href="#hauptinhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="hauptinhalt" className="pt-16 md:pt-20 pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <ChatWidget />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
