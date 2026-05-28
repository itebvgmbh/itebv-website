import { Link } from "wouter";
import { ArrowRight, ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { getServiceJsonLd, getBreadcrumbJsonLd } from "@/lib/structured-data";
import ServiceCrossLinks from "@/components/ui/ServiceCrossLinks";
import Reveal from "@/components/ui/Reveal";

const pageDescription =
  "ITEBV entwickelt individuelle Geschäftssoftware, die zu Ihrem Unternehmen passt. Keine Lizenzkosten, keine Abhängigkeit – Software, die Ihnen gehört. KI-gestützte Entwicklung, persönlicher Ansprechpartner aus Berlin.";
const slug = "/software";

const processSteps = [
  "Gemeinsame Anforderungsanalyse: Was muss die Software können?",
  "Konzept und Architektur: Wie wird es umgesetzt?",
  "Iterative Entwicklung: Sie sehen früh Ergebnisse und können Feedback geben",
  "Test und Go-Live: Sauber eingeführt, nicht über Nacht drübergestülpt",
  "Betrieb und Weiterentwicklung: Die Software wächst mit Ihrem Unternehmen",
];

export default function SoftwarePage() {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative overflow-hidden bg-bg-alt">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(11,91,211,0.08),transparent_50%)]"
        />
        <div className="relative container-wide pt-12 md:pt-16 pb-16 md:pb-24">
          <nav aria-label="Breadcrumb" className="text-sm text-text-light mb-8 flex items-center gap-1.5">
            <Link href="/" className="hover:text-primary transition-colors">Start</Link>
            <ChevronRight size={14} className="text-text-muted" />
            <span className="text-text-strong">Individuelle Software</span>
          </nav>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
            <Reveal>
              <p className="eyebrow mb-4">Individuelle Software</p>
              <h1 className="heading-h1 mb-6">
                Wenn Standardsoftware nicht reicht
              </h1>
              <div className="lead space-y-4">
                <p>
                  Sie haben ein CRM, das Ihre Vertriebsprozesse nicht
                  abbildet. Ein ERP, an das Sie sich anpassen statt umgekehrt.
                  Oder gar kein System, und alles läuft über Excel und
                  Workarounds.
                </p>
                <p>
                  Individuelle Software klingt nach Großprojekt, nach Risiko,
                  nach sechs Monaten Wartezeit und sechsstelligen Budgets. Das
                  muss nicht so sein.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-lift)]">
                <img
                  src="/images/service-software.png"
                  alt="Individuelle Geschäftssoftware – moderner Entwickler-Arbeitsplatz"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="container-narrow">
          <Reveal>
            <p className="eyebrow mb-3">Wie ich arbeite</p>
            <h2 className="heading-h2 mb-5">Iterativ, transparent, planbar</h2>
            <p className="lead mb-3">
              Ich konzipiere die Software, die zu Ihrem Unternehmen passt –
              basierend auf Ihren tatsächlichen Abläufen, nicht auf einem
              Standard-Template.
            </p>
            <p className="lead mb-10">
              Durch den Einsatz von KI-gestützten Entwicklungsmethoden ist
              individuelle Software heute schneller und günstiger realisierbar,
              als Sie vielleicht erwarten.
            </p>
          </Reveal>
          <ol className="space-y-4">
            {processSteps.map((step, index) => (
              <Reveal key={index} delay={index * 60} as="li" className="flex items-start gap-4 p-5 rounded-xl bg-bg-alt border border-border">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold text-base shadow-[var(--shadow-soft)]">
                  {index + 1}
                </span>
                <span className="text-text pt-1.5">{step}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding bg-bg-alt">
        <div className="container-narrow grid md:grid-cols-2 gap-10">
          <Reveal>
            <p className="eyebrow mb-3">Was Sie bekommen</p>
            <h2 className="heading-h2 mb-5">Software, die Ihnen gehört</h2>
            <p className="text-text-light leading-relaxed">
              Keine Lizenzkosten, keine Abhängigkeit von einem Anbieter. Eine
              Lösung, die genau das tut, was Sie brauchen, und die sich
              weiterentwickeln lässt, wenn sich Ihre Anforderungen ändern.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow mb-3">Für wen das passt</p>
            <h2 className="heading-h2 mb-5">Wenn Standardlösungen nicht reichen</h2>
            <p className="text-text-light leading-relaxed">
              Für Unternehmen mit speziellen Anforderungen, die kein Tool von
              der Stange abdeckt – und die einen erfahrenen Ansprechpartner
              suchen, der die Lösung nicht nur umsetzt, sondern auch versteht,
              warum sie so umgesetzt werden muss.
            </p>
          </Reveal>
        </div>
      </section>

      <ServiceCrossLinks currentHref={slug} />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-dark text-white">
        <div className="container-narrow section-padding text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Bereit für individuelle Software?
            </h2>
            <p className="text-white/85 mb-8 max-w-xl mx-auto text-lg">
              Schreiben Sie mir – ich melde mich, und wir besprechen Ihr Projekt.
            </p>
            <a
              href="/#kontakt"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary font-semibold rounded-xl shadow-lg hover:bg-bg-alt transition-colors"
            >
              {siteConfig.primaryCtaLabel}
              <ArrowRight className="size-5" />
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
