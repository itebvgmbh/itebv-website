import { siteConfig } from "@/lib/config";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

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
      'Das Speinshart Scientific Center im historischen Kloster Speinshart brauchte eine Möglichkeit, Besuchern rund um die Uhr Informationen zugänglich zu machen. Ich habe den Chatbot "N3X-B" mit einem RAG-System als Wissensdatenbank entwickelt, der genau das leistet.',
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
      "Die Rolf Rissel GmbH, Fachhandel für Apotheken- und Praxiseinrichtung, stand vor der Frage, wie die gesamte Wertschöpfungskette digitalisiert werden kann: von der Lead-Erfassung über die Planung bis zur Fertigung. Ich habe die Prozesse analysiert und eine Roadmap für eine maßgeschneiderte Software mit KI-Readiness erstellt.",
    tag: "Digitalisierung",
    href: null,
    external: false,
    logo: { src: "/images/rissel.png", alt: "Rolf Rissel Objekteinrichtungen" },
  },
  {
    title: "10+ Jahre IT-Beratung für die Industrie",
    subtitle: null,
    description:
      "Bevor ich mich auf KI-Lösungen und individuelle Software fokussiert habe, habe ich über zehn Jahre lang Industrieunternehmen in der IT beraten, u. a. Linde im Bereich ERP und Prozessoptimierung. Diese Erfahrung ist das Fundament, auf dem alles andere aufbaut.",
    tag: "IT-Beratung",
    href: null,
    external: false,
  },
];

export default function References() {
  return (
    <section id="referenzen" className="section-padding bg-bg border-t border-line">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Referenzen"
          title="Ausgewählte Projekte"
          intro="Ein Ausschnitt aus aktuellen und vergangenen Mandaten – von der KI-Lösung bis zur Digitalisierungsstrategie."
        />

        <div className="mt-14 md:mt-20 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
          {references.map((ref, index) => {
            const isLink = Boolean(ref.href && ref.external);
            const cardClass =
              "group flex h-full flex-col bg-bg p-8 md:p-10 transition-colors duration-300 hover:bg-bg-alt";
            const inner = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary">
                    {ref.tag}
                  </span>
                  {ref.logo && (
                    <img
                      src={ref.logo.src}
                      alt={ref.logo.alt}
                      className="h-7 w-24 shrink-0 object-contain object-right grayscale opacity-55"
                      loading="lazy"
                    />
                  )}
                </div>

                <h3 className="mt-6 font-display text-xl md:text-2xl font-semibold leading-snug text-ink transition-colors duration-300 group-hover:text-primary">
                  {ref.title}
                </h3>
                {ref.subtitle && (
                  <p className="mt-2 text-sm font-medium text-primary">
                    {ref.subtitle}
                  </p>
                )}
                <p className="mt-4 text-sm leading-relaxed text-text-light">
                  {ref.description}
                </p>

                {isLink && (
                  <span className="link-arrow mt-6 text-primary">
                    Projekt ansehen
                    <ArrowUpRight size={16} />
                  </span>
                )}
              </>
            );

            return (
              <Reveal as="div" key={index} delay={(index % 2) * 90}>
                {isLink ? (
                  <a
                    href={ref.href as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClass}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={cardClass}>{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
