import {
  Factory,
  Stethoscope,
  Hammer,
  Briefcase,
  ShoppingBag,
  GraduationCap,
} from "lucide-react";

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
    examples: "Produkt-Daten-Pflege, Chatbot-Beratung, Prozessautomatisierung",
  },
  {
    icon: GraduationCap,
    name: "Wissensorganisationen",
    examples: "RAG-Wissensdatenbanken, interne KI-Assistenten, Dokumentationssuche",
  },
];

export default function Industries() {
  return (
    <section id="branchen" className="section-padding bg-bg">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 text-center">
          Für wen ich arbeite
        </h2>
        <p className="text-text-light text-center max-w-2xl mx-auto mb-12">
          Typische Branchen und Anwendungsfälle. Wenn Sie sich nicht
          wiederfinden: Fragen Sie trotzdem – meist passt die Methode auch zu
          Ihrem Fall.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.name}
                className="p-5 rounded-xl border border-border bg-bg-alt"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="size-7 text-primary shrink-0" />
                  <h3 className="font-bold text-text">{industry.name}</h3>
                </div>
                <p className="text-sm text-text-light">{industry.examples}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
