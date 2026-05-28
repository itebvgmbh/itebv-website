import { Lightbulb, Target, MessageCircle, Handshake } from "lucide-react";

const items = [
  {
    icon: Lightbulb,
    title: "Ich verstehe Ihr Geschäft, nicht nur die Technik.",
    text: "Über 10 Jahre IT-Beratung für Industrieunternehmen haben mir gezeigt: Die beste Technologie bringt nichts, wenn sie am tatsächlichen Bedarf vorbeigeht. Ich höre erst zu, dann plane ich, dann setze ich um.",
  },
  {
    icon: Target,
    title: "Ergebnisse statt Konzeptpapiere.",
    text: "Viele Berater liefern eine Analyse und verschwinden. Viele Entwickler setzen um, ohne den Geschäftsprozess zu verstehen. Ich mache beides – ein Ansprechpartner von der Analyse bis zum laufenden System.",
  },
  {
    icon: MessageCircle,
    title: "Ehrlich statt oversold.",
    text: "Wenn etwas keinen Sinn ergibt, sage ich es. Nicht jedes Problem braucht KI. Nicht jeder Prozess braucht eigene Software. Sie bezahlen mich dafür, die richtige Lösung zu finden – nicht die teuerste.",
  },
  {
    icon: Handshake,
    title: "Gemeinsamer Erfolg statt Stundenzettel.",
    text: "Ich bin offen für Vergütungsmodelle, die sich am Ergebnis orientieren. Wenn meine Lösung Ihnen Geld spart oder Umsatz bringt, darf sich das auch in meiner Vergütung widerspiegeln – so ziehen wir am gleichen Strang.",
  },
];

export default function WhyMe() {
  return (
    <section className="section-padding bg-bg-alt">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 text-center">
          Warum mit mir arbeiten?
        </h2>
        <p className="text-text-light text-center max-w-2xl mx-auto mb-12">
          Vier Prinzipien, die jeden Auftrag prägen.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="flex gap-5 p-6 rounded-xl bg-white border border-border">
                <div className="shrink-0">
                  <div className="flex items-center justify-center size-12 rounded-lg bg-accent">
                    <Icon className="size-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-text mb-2">{item.title}</h3>
                  <p className="text-text-light">{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
