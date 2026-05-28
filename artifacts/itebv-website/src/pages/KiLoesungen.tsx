import { Link } from "wouter";
import { MessageSquare, Phone, Cog, BookOpen, ArrowRight, ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { getServiceJsonLd, getBreadcrumbJsonLd } from "@/lib/structured-data";
import ServiceCrossLinks from "@/components/ui/ServiceCrossLinks";
import Reveal from "@/components/ui/Reveal";
import { useSeo } from "@/hooks/useSeo";

const pageDescription =
  "ITEBV setzt KI pragmatisch ein: Chatbots, Voice Agents, Prozessautomatisierung und RAG-Wissensdatenbanken. KI als Werkzeug, nicht als Spielerei. KI-Beratung aus Berlin, deutschlandweit.";
const pageTitle =
  "KI-Lösungen für den Mittelstand | ITEBV – KI-Beratung Berlin";
const slug = "/ki-loesungen";

const offerings = [
  { icon: MessageSquare, title: "Chatbots und digitale Assistenten", description: "Ein KI-gestützter Chatbot, der Kunden berät, Fragen beantwortet und Informationen bereitstellt. Basierend auf Ihren eigenen Daten und Dokumenten. Rund um die Uhr, ohne Wartezeit." },
  { icon: Phone, title: "Voice Agents", description: "Ihr Telefon klingelt, aber niemand hat Zeit abzunehmen? Ein Voice Agent nimmt Anrufe entgegen, versteht das Anliegen, prüft Verfügbarkeiten und vereinbart Termine. Automatisch und natürlich." },
  { icon: Cog, title: "Prozessautomatisierung mit KI", description: "Wiederkehrende Aufgaben, die Ihre Mitarbeiter Zeit kosten: Daten erfassen, Dokumente sortieren, Informationen zusammenführen. KI kann das übernehmen, damit Ihre Leute sich auf das konzentrieren, was nur Menschen können." },
  { icon: BookOpen, title: "RAG-Systeme (Wissensdatenbanken)", description: "Ihre gesamte Dokumentation, Ihre Handbücher, Ihre internen Richtlinien: durchsuchbar und abrufbar über eine intelligente KI, die versteht, was gefragt wird, und die passende Antwort findet." },
];

export default function KiLoesungenPage() {
  useSeo({ title: pageTitle, description: pageDescription, path: slug });
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

      <section className="relative overflow-hidden bg-bg-alt">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(11,91,211,0.08),transparent_50%)]"
        />
        <div className="relative container-wide pt-12 md:pt-16 pb-16 md:pb-24">
          <nav aria-label="Breadcrumb" className="text-sm text-text-light mb-8 flex items-center gap-1.5">
            <Link href="/" className="hover:text-primary transition-colors">Start</Link>
            <ChevronRight size={14} className="text-text-muted" />
            <span className="text-text-strong">KI-Lösungen</span>
          </nav>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
            <Reveal>
              <p className="eyebrow mb-4">KI-Lösungen</p>
              <h1 className="heading-h1 mb-6">
                KI ist kein Zukunftsprojekt. Sondern ein Werkzeug, das heute funktioniert.
              </h1>
              <p className="lead">
                Sie müssen kein Technologiekonzern sein, um von KI zu
                profitieren. Auch in einem mittelständischen Unternehmen gibt
                es Aufgaben, die eine KI schneller, zuverlässiger und
                günstiger erledigen kann als ein Mensch. Ohne dass jemand
                seinen Job verliert.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-lift)]">
                <img
                  src="/images/service-ki.png"
                  alt="KI-Lösungen für den Mittelstand – moderner sprachgesteuerter Assistent"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="container-wide">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow mb-3">Was ich anbiete</p>
            <h2 className="heading-h2">Vier Anwendungsfelder, die heute Wert schaffen</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 md:gap-7">
            {offerings.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 80}>
                  <article className="card-base card-hover h-full p-7">
                    <div className="icon-badge mb-5">
                      <Icon size={22} />
                    </div>
                    <h3 className="heading-h3 mb-3">{item.title}</h3>
                    <p className="text-text-light leading-relaxed">{item.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-alt">
        <div className="container-narrow grid md:grid-cols-2 gap-10">
          <Reveal>
            <p className="eyebrow mb-3">Wie ein Projekt abläuft</p>
            <h2 className="heading-h2 mb-5">Klein starten, schnell Wert sehen</h2>
            <p className="text-text-light leading-relaxed">
              Kein Riesenprojekt, sondern ein konkreter Anwendungsfall, der
              schnell Ergebnisse zeigt. Wenn das funktioniert, erweitern wir.
              So minimieren wir Risiko und Sie sehen früh, was KI in Ihrem
              Unternehmen leisten kann.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow mb-3">Was das kostet</p>
            <h2 className="heading-h2 mb-5">Ab 5.000 € – passend zum Umfang</h2>
            <p className="text-text-light leading-relaxed">
              KI-Projekte starten typischerweise ab 5.000 €. Die genauen
              Kosten hängen vom Umfang ab. Im Erstgespräch klären wir, was
              für Ihren Fall sinnvoll und realistisch ist.
            </p>
          </Reveal>
        </div>
      </section>

      <ServiceCrossLinks currentHref={slug} />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-dark text-white">
        <div className="container-narrow section-padding text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Bereit für KI in Ihrem Unternehmen?
            </h2>
            <p className="text-white/85 mb-8 max-w-xl mx-auto text-lg">
              Schreiben Sie mir – ich melde mich, und wir klären, welche
              KI-Lösung zu Ihren Anforderungen passt.
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
