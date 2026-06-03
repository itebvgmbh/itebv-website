import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

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
    output: "Erste Einschätzung & nächste Schritte",
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
    effort: "Reviews (1–2 / Monat)",
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

export default function Process() {
  return (
    <section className="section-padding bg-paper">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Ablauf"
          title="So läuft ein Projekt ab"
          intro="Transparent von Tag eins: Dauer, Liefergegenstände und der Aufwand, den ich von Ihrer Seite brauche."
        />

        <div className="mt-14 md:mt-20 border-t border-line">
          {steps.map((step, i) => (
            <Reveal
              as="div"
              key={step.number}
              delay={i * 70}
              className="grid grid-cols-1 gap-x-8 gap-y-5 border-b border-line py-9 md:py-11 lg:grid-cols-12"
            >
              <div className="flex items-baseline gap-4 lg:col-span-3">
                <span className="idx text-4xl md:text-5xl text-primary">
                  {String(step.number).padStart(2, "0")}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  {step.duration}
                </span>
              </div>

              <div className="lg:col-span-9">
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-text-light">
                  {step.description}
                </p>
                <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:gap-10">
                  <p className="flex items-center gap-2 text-sm text-text-light">
                    <ArrowRight size={14} className="text-primary shrink-0" />
                    <span className="font-medium text-ink">Ergebnis:</span>{" "}
                    {step.output}
                  </p>
                  <p className="flex items-center gap-2 text-sm text-text-light">
                    <ArrowRight size={14} className="text-primary shrink-0" />
                    <span className="font-medium text-ink">Ihr Aufwand:</span>{" "}
                    {step.effort}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
