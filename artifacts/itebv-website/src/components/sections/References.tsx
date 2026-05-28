import { siteConfig } from "@/lib/config";
import { ExternalLink } from "lucide-react";

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
    title: "10+ Jahre IT-Beratung für die Industrie",
    subtitle: null,
    description:
      "Bevor ich mich auf KI-Lösungen und individuelle Software fokussiert habe, habe ich über zehn Jahre lang Industrieunternehmen in der IT beraten, unter anderem Linde im Bereich ERP und Prozessoptimierung. Diese Erfahrung ist das Fundament, auf dem alles andere aufbaut: Ich verstehe, wie Unternehmen arbeiten, wo die typischen Probleme liegen und was eine Lösung in der Praxis aushalten muss.",
    tag: "IT-Beratung",
    href: null,
    external: false,
  },
];

export default function References() {
  return (
    <section id="referenzen" className="section-padding bg-bg">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-16 text-center">
          Referenzen
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {references.map((ref, index) => (
            <article
              key={index}
              className="group border border-border rounded-xl overflow-hidden bg-white hover:border-primary/30 transition-colors"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-accent rounded-full">
                    {ref.tag}
                  </span>
                  {ref.logo && (
                    <div className="relative h-8 w-24 flex-shrink-0 grayscale opacity-60">
                      <img
                        src={ref.logo.src}
                        alt={ref.logo.alt}
                        className="h-full w-full object-contain object-right"
                      />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">{ref.title}</h3>
                {ref.subtitle && (
                  <p className="text-primary font-medium text-sm mb-3">{ref.subtitle}</p>
                )}
                <p className="text-text-light text-sm leading-relaxed">{ref.description}</p>
                {ref.href && ref.external && (
                  <a
                    href={ref.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-primary text-sm font-medium hover:text-primary-light transition-colors"
                  >
                    Projekt ansehen
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
