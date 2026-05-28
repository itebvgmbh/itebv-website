import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";
import {
  getServiceJsonLd,
  getBreadcrumbJsonLd,
} from "@/lib/structured-data";
import ServiceCrossLinks from "@/components/ui/ServiceCrossLinks";

const pageTitle = "Analyse & Digitalisierungsstrategie für den Mittelstand";
const pageDescription =
  "ITEBV analysiert Ihre Geschäftsprozesse und erstellt eine realistische Digitalisierungsstrategie. Konkrete Roadmap statt PowerPoint für die Schublade. Beratung aus Berlin, deutschlandweit.";
const slug = "/analyse";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: slug },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: slug,
  },
};

export default function AnalysePage() {
  const serviceSchema = getServiceJsonLd({
    name: "Prozessanalyse & Digitalisierungsstrategie",
    description: pageDescription,
    slug,
    serviceType: "IT-Beratung",
  });
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Start", url: siteConfig.siteUrl },
    { name: "Analyse & Strategie", url: `${siteConfig.siteUrl}${slug}` },
  ]);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="section-padding bg-bg-alt">
        <div className="container-narrow">
          <nav aria-label="Breadcrumb" className="text-sm text-text-light mb-6">
            <Link href="/" className="hover:text-primary">
              Start
            </Link>
            <span className="mx-2">/</span>
            <span className="text-text">Analyse &amp; Strategie</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-text leading-tight mb-6">
            Sie wissen, dass sich etwas ändern muss. Aber nicht genau was.
          </h1>
          <div className="prose prose-lg text-text-light max-w-none space-y-4">
            <p>
              Vielleicht läuft vieles in Ihrem Unternehmen über Excel, E-Mails
              und Bauchgefühl. Vielleicht haben Sie Software im Einsatz, die
              nicht das tut, was Sie brauchen. Vielleicht haben Sie das
              Gefühl, dass Ihre Mitarbeiter zu viel Zeit mit Dingen
              verbringen, die eigentlich automatisch laufen sollten.
            </p>
            <p>
              Das Problem: Ohne eine klare Analyse investieren Sie entweder in
              die falsche Lösung oder in gar keine.
            </p>
          </div>
        </div>
      </section>

      {/* Was ich mache */}
      <section className="section-padding bg-bg">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">
            Was ich mache
          </h2>
          <p className="text-lg text-text-light mb-8">
            Ich schaue mir Ihr Unternehmen von innen an. Nicht als
            Außenstehender mit einer Checkliste, sondern als jemand, der
            versteht, wie Geschäftsprozesse in der Praxis wirklich
            funktionieren.
          </p>
          <ul className="space-y-4">
            {[
              "Ich spreche mit den Menschen, die die Arbeit machen, nicht nur mit der Geschäftsführung",
              "Ich dokumentiere Ihre tatsächlichen Abläufe, nicht die, die im Organigramm stehen",
              "Ich identifiziere, wo Zeit und Geld verloren gehen",
              "Ich bewerte, welche Probleme sich mit Software, KI oder Prozessänderungen lösen lassen",
              "Ich erstelle eine realistische Roadmap mit konkreten Maßnahmen, Prioritäten und Kosten",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="size-6 text-primary shrink-0 mt-0.5" />
                <span className="text-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Was Sie bekommen */}
      <section className="section-padding bg-bg-alt">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">
            Was Sie bekommen
          </h2>
          <p className="text-lg text-text-light">
            Einen klaren Plan. Keine 80-seitige Analyse, die niemand liest,
            sondern ein verständliches Dokument, das Ihnen sagt: Das sind Ihre
            Baustellen, das sind die Lösungen, das kostet es, so lange dauert
            es. Danach können Sie entscheiden, ob Sie mit mir weiterarbeiten
            oder die Empfehlungen intern umsetzen.
          </p>
        </div>
      </section>

      {/* Was das kostet */}
      <section className="section-padding bg-bg">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">
            Was das kostet
          </h2>
          <p className="text-lg text-text-light">
            Das hängt von der Größe Ihres Unternehmens und der Komplexität
            Ihrer Prozesse ab. Eine erste Einschätzung bekommen Sie im
            kostenlosen Erstgespräch.
          </p>
        </div>
      </section>

      <ServiceCrossLinks currentHref={slug} />

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-narrow text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Schreiben Sie mir – ich melde mich, und wir besprechen, wie wir
            gemeinsam Ihre Digitalisierungsstrategie entwickeln.
          </p>
          <Link
            href="/#kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-medium rounded-lg hover:bg-bg-alt transition-colors"
          >
            {siteConfig.primaryCtaLabel}
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
