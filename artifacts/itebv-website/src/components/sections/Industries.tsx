import {
  Factory,
  Stethoscope,
  Hammer,
  Briefcase,
  ShoppingBag,
  GraduationCap,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const industries = [
  { icon: Factory, name: "Industrie & Produktion", examples: "ERP-Optimierung, MES-Anbindung, Produktionsdaten-Auswertung" },
  { icon: Stethoscope, name: "Gesundheit & Praxen", examples: "Voice Agent für Terminvergabe, Patientenkommunikation, Workflows" },
  { icon: Hammer, name: "Handwerk & Mittelstand", examples: "Angebots-Tools, mobile Erfassung, Lead-to-Cash-Digitalisierung" },
  { icon: Briefcase, name: "Dienstleister & B2B", examples: "CRM-Anbindung, Kunden-Self-Service, KI-gestütztes Reporting" },
  { icon: ShoppingBag, name: "Handel & E-Commerce", examples: "Produkt-Daten-Pflege, Chatbot-Beratung, Prozessautomatisierung" },
  { icon: GraduationCap, name: "Wissensorganisationen", examples: "RAG-Wissensdatenbanken, interne KI-Assistenten, Dokumentationssuche" },
];

export default function Industries() {
  return (
    <section id="branchen" className="section-padding bg-bg-alt">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Branchen"
          title="Für wen ich arbeite"
          lead="Typische Branchen und Anwendungsfälle. Wenn Sie sich nicht wiederfinden: Fragen Sie trotzdem – meist passt die Methode auch zu Ihrem Fall."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <Reveal key={industry.name} delay={i * 60}>
                <div className="card-base card-hover h-full p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="icon-badge size-10">
                      <Icon size={18} />
                    </span>
                    <h3 className="font-semibold text-text-strong">{industry.name}</h3>
                  </div>
                  <p className="text-sm text-text-light leading-relaxed">{industry.examples}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
