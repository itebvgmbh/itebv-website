import { Link } from "wouter";
import { Check, ArrowRight, ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { getServiceJsonLd, getBreadcrumbJsonLd } from "@/lib/structured-data";
import ServiceCrossLinks from "@/components/ui/ServiceCrossLinks";
import Reveal from "@/components/ui/Reveal";
import { useSeo } from "@/hooks/useSeo";

const pageDescription =
  "ITEBV analysiert Ihre Geschäftsprozesse und erstellt eine realistische Digitalisierungsstrategie. Konkrete Roadmap statt PowerPoint für die Schublade. Beratung aus Berlin, deutschlandweit.";
const pageTitle =
  "Analyse & Digitalisierungsstrategie | ITEBV – IT-Beratung Berlin";
const slug = "/analyse";

const whatIDo = [
  "Ich spreche mit den Menschen, die die Arbeit machen, nicht nur mit der Geschäftsführung",
  "Ich dokumentiere Ihre tatsächlichen Abläufe, nicht die, die im Organigramm stehen",
  "Ich identifiziere, wo Zeit und Geld verloren gehen",
  "Ich bewerte, welche Probleme sich mit Software, KI oder Prozessänderungen lösen lassen",
  "Ich erstelle eine realistische Roadmap mit konkreten Maßnahmen, Prioritäten und Kosten",
];

export default function AnalysePage() {
  useSeo({ title: pageTitle, description: pageDescription, path: slug });
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
            <span className="text-text-strong">Analyse &amp; Strategie</span>
          </nav>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
            <Reveal>
              <p className="eyebrow mb-4">Analyse &amp; Strategie</p>
              <h1 className="heading-h1 mb-6">
                Sie wissen, dass sich etwas ändern muss. Aber nicht genau was.
              </h1>
              <div className="lead space-y-4">
                <p>
                  Vielleicht läuft vieles in Ihrem Unternehmen über Excel,
                  E-Mails und Bauchgefühl. Vielleicht haben Sie Software im
                  Einsatz, die nicht das tut, was Sie brauchen. Vielleicht
                  haben Sie das Gefühl, dass Ihre Mitarbeiter zu viel Zeit
                  mit Dingen verbringen, die eigentlich automatisch laufen
                  sollten.
                </p>
                <p>
                  Das Problem: Ohne eine klare Analyse investieren Sie
                  entweder in die falsche Lösung oder in gar keine.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-lift)]">
                <img
                  src="/images/service-analyse.png"
                  alt="Analyse von Geschäftsprozessen – ruhiger Arbeitsplatz mit Tablet und Notizen"
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
            <p className="eyebrow mb-3">Was ich mache</p>
            <h2 className="heading-h2 mb-5">Verstehen, bevor empfohlen wird</h2>
            <p className="lead mb-10">
              Ich schaue mir Ihr Unternehmen von innen an. Nicht als
              Außenstehender mit einer Checkliste, sondern als jemand, der
              versteht, wie Geschäftsprozesse in der Praxis wirklich funktionieren.
            </p>
          </Reveal>
          <ul className="space-y-3.5">
            {whatIDo.map((item, i) => (
              <Reveal key={item} delay={i * 50} as="li" className="flex items-start gap-3 p-4 rounded-xl bg-bg-alt border border-border">
                <Check className="size-5 text-primary shrink-0 mt-0.5" />
                <span className="text-text">{item}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-bg-alt">
        <div className="container-narrow grid md:grid-cols-2 gap-10">
          <Reveal>
            <p className="eyebrow mb-3">Was Sie bekommen</p>
            <h2 className="heading-h2 mb-5">Ein klarer Plan – kein 80-Seiten-PDF</h2>
            <p className="text-text-light leading-relaxed">
              Ein verständliches Dokument, das Ihnen sagt: Das sind Ihre
              Baustellen, das sind die Lösungen, das kostet es, so lange dauert es.
              Danach können Sie entscheiden, ob Sie mit mir weiterarbeiten oder
              die Empfehlungen intern umsetzen.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow mb-3">Was das kostet</p>
            <h2 className="heading-h2 mb-5">Transparent, passend zur Größe</h2>
            <p className="text-text-light leading-relaxed">
              Das hängt von der Größe Ihres Unternehmens und der Komplexität
              Ihrer Prozesse ab. Eine erste Einschätzung bekommen Sie im
              kostenlosen Erstgespräch.
            </p>
          </Reveal>
        </div>
      </section>

      <ServiceCrossLinks currentHref={slug} />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-dark text-white">
        <div className="container-narrow section-padding text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-white/85 mb-8 max-w-xl mx-auto text-lg">
              Schreiben Sie mir – ich melde mich, und wir besprechen, wie wir
              gemeinsam Ihre Digitalisierungsstrategie entwickeln.
            </p>
            <a
              href="/#kontakt-formular"
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
