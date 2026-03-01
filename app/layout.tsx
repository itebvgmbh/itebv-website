import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/chat/ChatWidget";
import { siteConfig } from "@/lib/config";
import { getLocalBusinessJsonLd } from "@/lib/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.siteTitle,
    template: `%s | ${siteConfig.companyName}`,
  },
  description: siteConfig.siteDescription,
  metadataBase: new URL(siteConfig.siteUrl),
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: siteConfig.companyName,
    title: siteConfig.siteTitle,
    description: siteConfig.siteDescription,
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
        <Header />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
