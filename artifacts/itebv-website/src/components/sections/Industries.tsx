import {
  Factory,
  Stethoscope,
  Hammer,
  Briefcase,
  ShoppingBag,
  GraduationCap,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const industries = [
  {
    icon: Factory,
    name: "Industrie & Produktion",
    examples: "ERP-Optimierung, MES-Anbindung, Produktionsdaten-Auswertung",
  },
  {
    icon: Stethoscope,
    name: "Gesundheit & Praxen",
    examples: "Voice Agent für Terminvergabe, Patientenkommunikation, Workflows",
  },
  {
    icon: Hammer,
    name: "Handwerk & Mittelstand",
    examples: "Angebots-Tools, mobile Erfassung, Lead-to-Cash-Digitalisierung",
  },
  {
    icon: Briefcase,
    name: "Dienstleister & B2B",
    examples: "CRM-Anbindung, Kunden-Self-Service, KI-gestütztes Reporting",
  },
  {
    icon: ShoppingBag,
    name: "Handel & E-Commerce",
    examples: "Produktdaten-Pflege, Chatbot-Beratung, Prozessautomatisierung",
  },
  {
    icon: GraduationCap,
    name: "Wissensorganisationen",
    examples: "RAG-Wissensdatenbanken, interne KI-Assistenten, Dokumentationssuche",
  },
];

export default function Industries() {
  return (
    <section id="branchen" className="section-padding bg-bg border-t border-line">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Branchen"
          title="Für wen ich arbeite"
          intro="Typische Branchen und Anwendungsfälle. Wenn Sie sich nicht wiederfinden: Fragen Sie trotzdem – meist passt die Methode auch zu Ihrem Fall."
        />

        <div className="mt-14 md:mt-20 grid grid-cols-1 border-t border-l border-line sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <Reveal
                as="div"
                key={industry.name}
                delay={(i % 3) * 80}
                className="group border-b border-r border-line p-7 md:p-9 transition-colors duration-300 hover:bg-bg-alt"
              >
                <Icon className="size-6 text-primary" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {industry.name}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-text-light">
                  {industry.examples}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
