import { siteConfig } from "@/lib/config";
import { ExternalLink } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

interface Reference {
  title: string;
  subtitle: string | null;
  description: string;
  tag: string;
  href: string | null;
  external: boolean;
  logo?: { src: string; alt: string };
}

const references: Reference[] = [
  {
    title: "Speinshart Scientific Center for AI and SuperTech",
    subtitle: "Chatbot mit KI-Wissensdatenbank für ein Wissenschaftszentrum",
    description:
      'Das Speinshart Scientific Center im historischen Kloster Speinshart brauchte eine Möglichkeit, Besuchern rund um die Uhr Informationen zu Veranstaltungen, Forschungsprojekten und Kooperationsmöglichkeiten zugänglich zu machen. Ich habe den Chatbot "N3X-B" mit einem RAG-System als Wissensdatenbank entwickelt, der genau das leistet.',
    tag: "KI-Chatbot",
    href: siteConfig.speinshartLink,
    external: true,
    logo: { src: "/images/speinshart.svg", alt: "Speinshart Scientific Center" },
  },
  {
    title: "Zahnarztpraxis in Berlin",
    subtitle: "Digitales Terminbuch mit Voice Agent",
    description:
      "Eine Berliner Zahnarztpraxis (Name auf Anfrage) wollte die telefonische Terminvergabe automatisieren. Die Lösung: Ein Voice Agent, der Anrufe entgegennimmt, verfügbare Termine prüft und direkt einträgt. Keine Warteschleife, keine verpassten Anrufe.",
    tag: "Voice Agent",
    href: null,
    external: false,
  },
  {
    title: "Rolf Rissel GmbH",
    subtitle: "Digitalisierungskonzept für einen Apotheken- und Praxiseinrichter",
    description:
      "Die Rolf Rissel GmbH, Handwerksbetrieb und Fachhandel für Apotheken- und Praxiseinrichtung, stand vor der Frage, wie die gesamte Wertschöpfungskette digitalisiert werden kann: von der Lead-Erfassung über die Planung bis zur Fertigung. Ich habe die bestehenden Prozesse analysiert und eine Roadmap für eine maßgeschneiderte Unternehmenssoftware mit KI-Readiness erstellt.",
    tag: "Digitalisierung",
    href: null,
    external: false,
    logo: { src: "/images/rissel.png", alt: "Rolf Rissel Objekteinrichtungen" },
  },
  {
    title: "Das Fundament: Über ein Jahrzehnt Industrie-IT",
    subtitle: null,
    description:
      "Bevor ich mich auf KI-Lösungen und individuelle Software fokussiert habe, habe ich über zehn Jahre lang Unternehmen verschiedener Größen beraten – von ERP-Optimierung über Prozessdigitalisierung bis zur Systemintegration. Diese Erfahrung prägt jeden Auftrag: Ich weiß, was in der Praxis funktioniert und was nicht.",
    tag: "IT-Beratung",
    href: null,
    external: false,
  },
];

export default function References() {
  return (
    <section id="referenzen" className="section-padding bg-bg">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Referenzen"
          title="Ausgewählte Projekte"
          lead="Konkrete Beispiele, was im Mittelstand mit pragmatischer IT, Software und KI möglich ist."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-7">
          {references.map((ref, index) => (
            <Reveal key={index} delay={index * 70}>
              <article className="card-base card-hover group h-full flex flex-col p-7 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-primary bg-accent rounded-full ring-1 ring-inset ring-primary/15">
                    {ref.tag}
                  </span>
                  {ref.logo && (
                    <div className="relative h-7 w-24 flex-shrink-0 grayscale opacity-60">
                      <img
                        src={ref.logo.src}
                        alt={ref.logo.alt}
                        className="h-full w-full object-contain object-right"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-text-strong mb-2 leading-snug">
                  {ref.title}
                </h3>
                {ref.subtitle && (
                  <p className="text-primary font-medium text-sm mb-3">{ref.subtitle}</p>
                )}
                <p className="text-text-light text-sm leading-relaxed flex-1">
                  {ref.description}
                </p>
                {ref.href && ref.external && (
                  <a
                    href={ref.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-5 text-primary text-sm font-semibold hover:gap-2.5 transition-all"
                  >
                    Projekt ansehen
                    <ExternalLink size={14} />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
