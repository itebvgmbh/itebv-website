import { Link } from "wouter";
import { Search, Code, BrainCircuit, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const services = [
  {
    title: "Analyse & Digitalisierungsstrategie",
    href: "/analyse",
    icon: Search,
    description:
      "Wo lohnt sich Digitalisierung wirklich? Ich analysiere Ihre Prozesse und liefere einen konkreten Plan – keine PowerPoint für die Schublade.",
  },
  {
    title: "Individuelle Geschäftssoftware",
    href: "/software",
    icon: Code,
    description:
      "Wenn Standardsoftware nicht passt, entwickeln wir Passendes. Sie bekommen Software, die Ihnen gehört und sich mit Ihrem Unternehmen weiterentwickelt.",
  },
  {
    title: "KI-Lösungen für den Geschäftsalltag",
    href: "/ki-loesungen",
    icon: BrainCircuit,
    description:
      "Chatbots, Voice Agents, Automatisierungen. KI dort, wo sie konkret Zeit und Geld spart – nicht als Spielerei, sondern als Werkzeug.",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="section-padding bg-bg">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Leistungen"
          title="IT-Beratung, Software & KI für den Mittelstand"
          lead="Sie haben Prozesse, die zu viel Zeit kosten. Systeme, die nicht miteinander reden. Aufgaben, die Ihre Mitarbeiter von der eigentlichen Arbeit abhalten. Ich helfe Ihnen, das zu ändern."
        />
        <div className="grid md:grid-cols-3 gap-6 md:gap-7">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.href} delay={i * 80}>
                <Link
                  href={service.href}
                  className="card-base card-hover group h-full flex flex-col p-7 md:p-8"
                >
                  <div className="icon-badge mb-6">
                    <Icon size={22} />
                  </div>
                  <h3 className="heading-h3 mb-3">{service.title}</h3>
                  <p className="text-text-light leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Mehr erfahren
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
