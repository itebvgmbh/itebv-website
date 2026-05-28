import { Zap, Rocket, MessageCircle, Handshake } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const items = [
  {
    icon: Zap,
    title: "80/20 statt Overengineering.",
    text: "Ich arbeite nach dem Pareto-Prinzip: die 20% Aufwand finden, die 80% des Ergebnisses bringen. Keine aufgeblähten Systeme, keine Features, die niemand braucht. Sie bekommen genau das, was den größten Hebel hat – schnell und planbar.",
  },
  {
    icon: Rocket,
    title: "Heute stark, morgen noch stärker.",
    text: "Jede Lösung ist so gebaut, dass sie mit der rasanten Entwicklung von KI mitwächst. Modelle sind austauschbar, Schnittstellen offen, Erweiterungen eingeplant. Sie legen jetzt die Grundlage, um KI heute sinnvoll einzusetzen – und morgen noch viel mehr daraus zu machen.",
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
    <section className="section-padding bg-bg">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Warum ITEBV"
          title="Warum mit mir arbeiten?"
          lead="Vier Prinzipien, die jeden Auftrag prägen."
        />
        <div className="grid md:grid-cols-2 gap-6 md:gap-7">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 80}>
                <article className="card-base card-hover h-full flex gap-5 p-7">
                  <div className="icon-badge shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="heading-h3 mb-2.5">{item.title}</h3>
                    <p className="text-text-light leading-relaxed">{item.text}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
