const steps = [
  {
    number: 1,
    title: "Kennenlernen",
    description:
      "Ein kurzes Gespräch, kostenlos und unverbindlich. Sie erzählen mir, wo es hakt. Ich sage Ihnen ehrlich, ob und wie ich helfen kann.",
  },
  {
    number: 2,
    title: "Analyse",
    description:
      "Ich schaue mir Ihre Prozesse, Systeme und Abläufe an. Nicht von oben herab, sondern im Detail. Was funktioniert? Was kostet Sie Zeit und Geld? Wo liegen die Hebel?",
  },
  {
    number: 3,
    title: "Konzept & Angebot",
    description:
      "Sie bekommen einen konkreten Plan: Was wird gemacht, wie wird es umgesetzt, was kostet es, wie lange dauert es. Keine versteckten Kosten, keine vagen Versprechen.",
  },
  {
    number: 4,
    title: "Umsetzung",
    description:
      "Ich steuere die Umsetzung und bin Ihr Ansprechpartner, von der ersten Zeile Code bis zum fertigen System.",
  },
  {
    number: 5,
    title: "Betrieb & Weiterentwicklung",
    description:
      "Nach dem Launch ist vor der Optimierung. Ich übernehme Hosting und Betrieb und entwickle die Lösung weiter, wenn sich Ihre Anforderungen ändern.",
  },
];

export default function Process() {
  return (
    <section className="section-padding bg-bg">
      <div className="container-narrow">
        <h2 className="text-2xl md:text-3xl font-bold text-text mb-12">
          So läuft ein Projekt ab
        </h2>
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
          <div className="space-y-0">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-8 pb-12 last:pb-0">
                {/* Number circle */}
                <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg">
                  {step.number}
                </div>
                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-bold text-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-light">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
