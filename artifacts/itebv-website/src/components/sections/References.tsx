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
  logos?: { src: string; alt: string }[];
  dark?: boolean;
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
    dark: true,
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
    dark: true,
  },
  {
    title: "10+ Jahre IT-Beratung für die Industrie",
    subtitle: null,
    description:
      "Bevor ich mich auf KI-Lösungen und individuelle Software fokussiert habe, habe ich über zehn Jahre lang Industrieunternehmen in der IT beraten, u. a. Linde im Bereich ERP und Prozessoptimierung. Diese Erfahrung ist das Fundament, auf dem alles andere aufbaut.",
    tag: "IT-Beratung",
    href: null,
    external: false,
    logos: [
      { src: "/images/Linde_plc_logo.png", alt: "Linde" },
      { src: "/images/psi.png", alt: "PSI Software AG" },
      { src: "/images/kroenert.png", alt: "KROENERT" },
    ],
  },
];

export default function References() {
  return (
    <section id="referenzen" className="section-padding bg-bg border-t border-line">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Referenzen"
          title="Ausgewählte Projekte"
          intro="Ein Ausschnitt aus aktuellen Projekten – von der KI-Lösung bis zur Digitalisierungsstrategie."
        />

        <div className="mt-14 md:mt-20 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
          {references.map((ref, index) => {
            const isLink = Boolean(ref.href && ref.external);
            const dark = Boolean(ref.dark);
            const cardClass = dark
              ? "group flex h-full flex-col bg-[#0c1422] p-8 md:p-10 transition-colors duration-300 hover:bg-[#0f1a2c]"
              : "group flex h-full flex-col bg-bg p-8 md:p-10 transition-colors duration-300 hover:bg-bg-alt";
            const inner = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`text-[0.7rem] font-semibold uppercase tracking-[0.18em] ${
                      dark ? "text-primary-light" : "text-primary"
                    }`}
                  >
                    {ref.tag}
                  </span>
                  {ref.logo && (
                    <img
                      src={ref.logo.src}
                      alt={ref.logo.alt}
                      className="h-14 w-36 md:h-20 md:w-48 shrink-0 object-contain object-right opacity-90"
                      loading="lazy"
                    />
                  )}
                </div>

                <h3
                  className={`mt-6 font-display text-xl md:text-2xl font-semibold leading-snug transition-colors duration-300 ${
                    dark
                      ? "text-white group-hover:text-primary-light"
                      : "text-ink group-hover:text-primary"
                  }`}
                >
                  {ref.title}
                </h3>
                {ref.subtitle && (
                  <p
                    className={`mt-2 text-sm font-medium ${
                      dark ? "text-primary-light" : "text-primary"
                    }`}
                  >
                    {ref.subtitle}
                  </p>
                )}
                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    dark ? "text-white/65" : "text-text-light"
                  }`}
                >
                  {ref.description}
                </p>

                {ref.logos && (
                  <ul className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-4">
                    {ref.logos.map((logo) => (
                      <li key={logo.src}>
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="h-8 w-24 object-contain object-left opacity-80"
                          loading="lazy"
                        />
                      </li>
                    ))}
                  </ul>
                )}

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
