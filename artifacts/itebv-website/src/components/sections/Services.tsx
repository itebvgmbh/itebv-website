import { Link } from "wouter";
import { Search, Code, BrainCircuit, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    title: "Analyse & Digitalisierungsstrategie",
    href: "/analyse",
    icon: Search,
    description:
      "Bevor irgendjemand eine Zeile Code schreibt, schaue ich mir an, wie Ihr Unternehmen tatsächlich funktioniert. Wo stecken die Engpässe? Wo verbrennen Sie Geld mit manuellen Prozessen? Am Ende steht ein konkreter Plan – keine PowerPoint für die Schublade.",
  },
  {
    title: "Individuelle Geschäftssoftware",
    href: "/software",
    icon: Code,
    description:
      "Wenn Standardsoftware nicht passt, entwickeln wir etwas Passendes. Ich konzipiere die Lösung und verantworte die Umsetzung – von der Architektur bis zum laufenden System. Software, die Ihnen gehört und sich weiterentwickeln lässt.",
  },
  {
    title: "KI-Lösungen für den Geschäftsalltag",
    href: "/ki-loesungen",
    icon: BrainCircuit,
    description:
      "Ein Chatbot, der Ihre Kunden berät. Ein Voice Agent, der Anrufe entgegennimmt und Termine vereinbart. Automatisierungen, die Routine übernehmen. Ich setze KI dort ein, wo sie konkret Zeit und Geld spart – nicht als Spielerei.",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="section-padding bg-paper">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Leistungen"
          title={
            <>
              Beratung, Software und KI –{" "}
              <span className="text-text-light">aus einer Hand.</span>
            </>
          }
          intro="Sie haben Prozesse, die zu viel Zeit kosten. Systeme, die nicht miteinander reden. Ich helfe Ihnen, das zu ändern."
        />

        <div className="mt-14 md:mt-20 border-t border-line">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal as="div" key={service.href} delay={i * 90}>
                <Link
                  href={service.href}
                  className="group grid grid-cols-1 gap-5 border-b border-line py-9 md:py-12 lg:grid-cols-12 lg:gap-8 transition-colors duration-300 hover:bg-bg-alt/60"
                >
                  <div className="flex items-center gap-5 lg:col-span-3">
                    <span className="idx text-4xl md:text-5xl text-primary/30 transition-colors duration-300 group-hover:text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon
                      className="size-6 text-ink/30 transition-colors duration-300 group-hover:text-primary"
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="lg:col-span-6">
                    <h3 className="font-display text-2xl md:text-[1.7rem] font-semibold leading-snug text-ink transition-colors duration-300 group-hover:text-primary">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-xl leading-relaxed text-text-light">
                      {service.description}
                    </p>
                  </div>

                  <div className="lg:col-span-3 lg:flex lg:items-center lg:justify-end">
                    <span className="link-arrow text-primary">
                      Mehr erfahren
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
