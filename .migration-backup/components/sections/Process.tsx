import { Clock, FileOutput, Users } from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
  duration: string;
  output: string;
  effort: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Kennenlernen",
    description:
      "Ein kurzes Gespräch, kostenlos und unverbindlich. Sie erzählen mir, wo es hakt. Ich sage Ihnen ehrlich, ob und wie ich helfen kann.",
    duration: "20 Min",
    output: "Erste Einschätzung & Nächste Schritte",
    effort: "Ein kurzes Telefonat",
  },
  {
    number: 2,
    title: "Analyse",
    description:
      "Ich schaue mir Ihre Prozesse, Systeme und Abläufe an. Im Detail – was funktioniert, was kostet Zeit und Geld, wo liegen die Hebel.",
    duration: "1–4 Wochen",
    output: "Dokumentierte Ist-Aufnahme & Hebel",
    effort: "ca. 2–4 h Interviews",
  },
  {
    number: 3,
    title: "Konzept & Angebot",
    description:
      "Sie bekommen einen konkreten Plan: Was wird gemacht, wie wird es umgesetzt, was kostet es, wie lange dauert es. Keine versteckten Kosten, keine vagen Versprechen.",
    duration: "1–2 Wochen",
    output: "Roadmap, Architektur, Festpreis-Angebot",
    effort: "1 Review-Termin",
  },
  {
    number: 4,
    title: "Umsetzung",
    description:
      "Ich steuere die Umsetzung und bin Ihr Ansprechpartner – von der ersten Zeile Code bis zum produktiven System. Iterativ, mit regelmäßigen Reviews.",
    duration: "je nach Projekt",
    output: "Lauffähige Software / KI-Lösung",
    effort: "regelmäßige Reviews (1–2/Monat)",
  },
  {
    number: 5,
    title: "Betrieb & Weiterentwicklung",
    description:
      "Nach dem Launch ist vor der Optimierung. Ich übernehme Hosting und Betrieb und entwickle die Lösung weiter, wenn sich Ihre Anforderungen ändern.",
    duration: "laufend",
    output: "Stabiler Betrieb, planbares SLA",
    effort: "minimal",
  },
];

function StepMeta({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2 text-xs md:text-sm">
      <Icon size={14} className="text-primary shrink-0 mt-0.5" />
      <span className="text-text-light">
        <span className="font-semibold text-text">{label}:</span> {value}
      </span>
    </div>
  );
}

export default function Process() {
  return (
    <section className="section-padding bg-bg">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 text-center">
          So läuft ein Projekt ab
        </h2>
        <p className="text-text-light text-center max-w-2xl mx-auto mb-12">
          Transparent von Tag eins: Dauer, Liefergegenstände und der Aufwand,
          den ich von Ihrer Seite brauche.
        </p>
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
          <div className="space-y-0">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex gap-6 md:gap-8 pb-10 last:pb-0"
              >
                {/* Number circle */}
                <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg">
                  {step.number}
                </div>
                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-bold text-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-light mb-4">{step.description}</p>
                  <div className="grid sm:grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-4 rounded-lg bg-bg-alt border border-border">
                    <StepMeta icon={Clock} label="Dauer" value={step.duration} />
                    <StepMeta
                      icon={FileOutput}
                      label="Ergebnis"
                      value={step.output}
                    />
                    <StepMeta
                      icon={Users}
                      label="Ihr Aufwand"
                      value={step.effort}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
