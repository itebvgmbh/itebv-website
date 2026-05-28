import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";
import {
  getServiceJsonLd,
  getBreadcrumbJsonLd,
} from "@/lib/structured-data";
import ServiceCrossLinks from "@/components/ui/ServiceCrossLinks";

const pageTitle = "Individuelle Geschäftssoftware für den Mittelstand";
const pageDescription =
  "ITEBV entwickelt individuelle Geschäftssoftware, die zu Ihrem Unternehmen passt. Keine Lizenzkosten, keine Abhängigkeit – Software, die Ihnen gehört. KI-gestützte Entwicklung, persönlicher Ansprechpartner aus Berlin.";
const slug = "/software";

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

export default function SoftwarePage() {
  const processSteps = [
    "Gemeinsame Anforderungsanalyse: Was muss die Software können?",
    "Konzept und Architektur: Wie wird es umgesetzt?",
    "Iterative Entwicklung: Sie sehen früh Ergebnisse und können Feedback geben",
    "Test und Go-Live: Sauber eingeführt, nicht über Nacht drübergestülpt",
    "Betrieb und Weiterentwicklung: Die Software wächst mit Ihrem Unternehmen",
  ];

  const serviceSchema = getServiceJsonLd({
    name: "Individuelle Geschäftssoftware",
    description: pageDescription,
    slug,
    serviceType: "Custom Software Development",
  });
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Start", url: siteConfig.siteUrl },
    { name: "Individuelle Software", url: `${siteConfig.siteUrl}${slug}` },
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
            <span className="text-text">Individuelle Software</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-text leading-tight mb-6">
            Wenn Standardsoftware nicht reicht
          </h1>
          <div className="prose prose-lg text-text-light max-w-none space-y-4">
            <p>
              Sie haben ein CRM, das Ihre Vertriebsprozesse nicht abbildet.
              Ein ERP, an das Sie sich anpassen statt umgekehrt. Oder gar kein
              System, und alles läuft über Excel und Workarounds.
            </p>
            <p>
              Individuelle Software klingt nach Großprojekt, nach Risiko, nach
              sechs Monaten Wartezeit und sechsstelligen Budgets. Das muss
              nicht so sein.
            </p>
          </div>
        </div>
      </section>

      {/* Wie ich arbeite */}
      <section className="section-padding bg-bg">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">
            Wie ich arbeite
          </h2>
          <p className="text-lg text-text-light mb-8">
            Ich konzipiere die Software, die zu Ihrem Unternehmen passt –
            basierend auf Ihren tatsächlichen Abläufen, nicht auf einem
            Standard-Template.
          </p>
          <p className="text-lg text-text-light mb-10">
            Durch den Einsatz von KI-gestützten Entwicklungsmethoden ist
            individuelle Software heute schneller und günstiger realisierbar
            als Sie vielleicht erwarten.
          </p>
          <ol className="space-y-6">
            {processSteps.map((step, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
                  {index + 1}
                </span>
                <span className="text-text text-lg pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Was Sie bekommen */}
      <section className="section-padding bg-bg-alt">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">
            Was Sie bekommen
          </h2>
          <p className="text-lg text-text-light">
            Software, die Ihnen gehört. Keine Lizenzkosten, keine Abhängigkeit
            von einem Anbieter. Eine Lösung, die genau das tut, was Sie
            brauchen, und die sich weiterentwickeln lässt, wenn sich Ihre
            Anforderungen ändern.
          </p>
        </div>
      </section>

      {/* Für wen das passt */}
      <section className="section-padding bg-bg">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">
            Für wen das passt
          </h2>
          <p className="text-lg text-text-light">
            Für Unternehmen, die mit Standardlösungen an Grenzen stoßen. Die
            spezielle Anforderungen haben, die kein Tool von der Stange
            abdeckt. Die einen erfahrenen Ansprechpartner suchen, der die
            Lösung nicht nur umsetzt, sondern auch versteht, warum sie so
            umgesetzt werden muss.
          </p>
        </div>
      </section>

      <ServiceCrossLinks currentHref={slug} />

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-narrow text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Bereit für individuelle Software?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Schreiben Sie mir – ich melde mich, und wir besprechen Ihr
            Projekt.
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
