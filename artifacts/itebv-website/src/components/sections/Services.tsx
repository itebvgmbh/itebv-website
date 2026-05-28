import { Link } from "wouter";
import { Search, Code, BrainCircuit } from "lucide-react";

const services = [
  {
    title: "Analyse & Digitalisierungsstrategie",
    href: "/analyse",
    icon: Search,
    description:
      "Bevor irgendjemand eine Zeile Code schreibt, schaue ich mir an, wie Ihr Unternehmen tatsächlich funktioniert. Wo stecken die Engpässe? Wo verbrennen Sie Geld mit manuellen Prozessen? Was lässt sich sinnvoll digitalisieren und was nicht? Am Ende steht ein konkreter Plan, keine PowerPoint-Präsentation für die Schublade.",
  },
  {
    title: "Individuelle Geschäftssoftware",
    href: "/software",
    icon: Code,
    description:
      "Wenn Standardsoftware nicht passt, entwickeln wir etwas Passendes. Ich konzipiere die Lösung und verantworte die Umsetzung, von der Architektur bis zum laufenden System. Sie bekommen Software, die Ihnen gehört, genau auf Ihre Abläufe zugeschnitten ist und sich weiterentwickeln lässt.",
  },
  {
    title: "KI-Lösungen für den Geschäftsalltag",
    href: "/ki-loesungen",
    icon: BrainCircuit,
    description:
      "KI ist kein Zukunftsthema mehr. Ein Chatbot, der Ihre Kunden berät. Ein Voice Agent, der Anrufe entgegennimmt und Termine vereinbart. Automatisierungen, die Routineaufgaben übernehmen. Ich setze KI dort ein, wo sie Ihnen konkret Zeit und Geld spart. Nicht als Spielerei, sondern als Werkzeug.",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="section-padding bg-bg">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 text-center">
          Leistungen: IT-Beratung, Software &amp; KI für den Mittelstand
        </h2>
        <p className="text-lg text-text-light max-w-2xl mx-auto mb-12 text-center">
          Sie haben Prozesse, die zu viel Zeit kosten. Systeme, die nicht
          miteinander reden. Aufgaben, die Ihre Mitarbeiter von der
          eigentlichen Arbeit abhalten. Ich helfe Ihnen, das zu ändern.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.href}
                className="p-6 rounded-xl border border-border bg-bg-alt hover:border-primary/30 transition-colors"
              >
                <div className="mb-4">
                  <Icon className="size-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text mb-3">{service.title}</h3>
                <p className="text-text-light mb-4">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                >
                  Mehr erfahren →
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
