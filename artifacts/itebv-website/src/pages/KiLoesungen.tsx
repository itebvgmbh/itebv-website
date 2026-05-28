import { Link } from "wouter";
import { MessageSquare, Phone, Cog, BookOpen, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { getServiceJsonLd, getBreadcrumbJsonLd } from "@/lib/structured-data";
import ServiceCrossLinks from "@/components/ui/ServiceCrossLinks";

const pageDescription =
  "ITEBV setzt KI pragmatisch ein: Chatbots, Voice Agents, Prozessautomatisierung und RAG-Wissensdatenbanken. KI als Werkzeug, nicht als Spielerei. KI-Beratung aus Berlin, deutschlandweit.";
const slug = "/ki-loesungen";

const offerings = [
  { icon: MessageSquare, title: "Chatbots und digitale Assistenten", description: "Ein KI-gestützter Chatbot, der Kunden berät, Fragen beantwortet und Informationen bereitstellt. Basierend auf Ihren eigenen Daten und Dokumenten. Rund um die Uhr, ohne Wartezeit." },
  { icon: Phone, title: "Voice Agents", description: "Ihr Telefon klingelt, aber niemand hat Zeit abzunehmen? Ein Voice Agent nimmt Anrufe entgegen, versteht das Anliegen, prüft Verfügbarkeiten und vereinbart Termine. Automatisch und natürlich." },
  { icon: Cog, title: "Prozessautomatisierung mit KI", description: "Wiederkehrende Aufgaben, die Ihre Mitarbeiter Zeit kosten: Daten erfassen, Dokumente sortieren, Informationen zusammenführen. KI kann das übernehmen, damit Ihre Leute sich auf das konzentrieren, was nur Menschen können." },
  { icon: BookOpen, title: "RAG-Systeme (Wissensdatenbanken)", description: "Ihre gesamte Dokumentation, Ihre Handbücher, Ihre internen Richtlinien: durchsuchbar und abrufbar über eine intelligente KI, die versteht, was gefragt wird, und die passende Antwort findet." },
];

export default function KiLoesungenPage() {
  const serviceSchema = getServiceJsonLd({
    name: "KI-Lösungen für den Geschäftsalltag",
    description: pageDescription,
    slug,
    serviceType: "AI Consulting",
  });
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Start", url: siteConfig.siteUrl },
    { name: "KI-Lösungen", url: `${siteConfig.siteUrl}${slug}` },
  ]);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="section-padding bg-bg-alt">
        <div className="container-narrow">
          <nav aria-label="Breadcrumb" className="text-sm text-text-light mb-6">
            <Link href="/" className="hover:text-primary">Start</Link>
            <span className="mx-2">/</span>
            <span className="text-text">KI-Lösungen</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-text leading-tight mb-6">
            KI ist kein Zukunftsprojekt. Es ist ein Werkzeug, das heute funktioniert.
          </h1>
          <p className="text-lg text-text-light">
            Sie müssen kein Technologiekonzern sein, um von KI zu profitieren.
            Auch in einem mittelständischen Unternehmen gibt es Aufgaben, die
            eine KI schneller, zuverlässiger und günstiger erledigen kann als
            ein Mensch. Ohne dass jemand seinen Job verliert.
          </p>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-12">Was ich anbiete</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="p-6 rounded-xl border border-border bg-bg-alt hover:border-primary/30 transition-colors"
                >
                  <div className="mb-4">
                    <Icon className="size-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-text mb-3">{item.title}</h3>
                  <p className="text-text-light">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-alt">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">Wie ein Projekt abläuft</h2>
          <p className="text-lg text-text-light">
            Wir starten klein. Kein Riesenprojekt, sondern ein konkreter
            Anwendungsfall, der schnell Ergebnisse zeigt. Wenn das
            funktioniert, erweitern wir. So minimieren wir Risiko und Sie
            sehen früh, was KI in Ihrem Unternehmen leisten kann.
          </p>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">Was das kostet</h2>
          <p className="text-lg text-text-light">
            KI-Projekte starten typischerweise ab 5.000 €. Die genauen Kosten
            hängen vom Umfang ab. Im Erstgespräch klären wir, was für Ihren
            Fall sinnvoll und realistisch ist.
          </p>
        </div>
      </section>

      <ServiceCrossLinks currentHref={slug} />

      <section className="section-padding bg-primary text-white">
        <div className="container-narrow text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Bereit für KI in Ihrem Unternehmen?</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Schreiben Sie mir – ich melde mich, und wir klären, welche
            KI-Lösung zu Ihren Anforderungen passt.
          </p>
          <a
            href="/#kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-medium rounded-lg hover:bg-bg-alt transition-colors"
          >
            {siteConfig.primaryCtaLabel}
            <ArrowRight className="size-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
