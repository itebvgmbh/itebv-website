import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import AuroraLayer from "@/components/ui/AuroraLayer";

const items = [
  {
    title: "Ich verstehe Ihr Geschäft, nicht nur die Technik.",
    text: "Über 10 Jahre IT-Beratung für Industrieunternehmen haben mir gezeigt: Die beste Technologie bringt nichts, wenn sie am tatsächlichen Bedarf vorbeigeht. Ich höre erst zu, dann plane ich, dann setze ich um.",
  },
  {
    title: "Ergebnisse statt Konzeptpapiere.",
    text: "Viele Berater liefern eine Analyse und verschwinden. Viele Entwickler setzen um, ohne den Prozess zu verstehen. Ich mache beides – ein Ansprechpartner von der Analyse bis zum laufenden System.",
  },
  {
    title: "Ehrlich statt oversold.",
    text: "Wenn etwas keinen Sinn ergibt, sage ich es. Nicht jedes Problem braucht KI. Nicht jeder Prozess braucht eigene Software. Sie bezahlen mich dafür, die richtige Lösung zu finden – nicht die teuerste.",
  },
  {
    title: "Gemeinsamer Erfolg statt Stundenzettel.",
    text: "Ich bin offen für Vergütungsmodelle, die sich am Ergebnis orientieren. Wenn meine Lösung Ihnen Geld spart oder Umsatz bringt, darf sich das auch in meiner Vergütung widerspiegeln.",
  },
];

export default function WhyMe() {
  return (
    <section className="relative section-padding overflow-hidden bg-[linear-gradient(180deg,#0a0f17_0%,#0c1422_55%,#0a1020_100%)] grain">
      <AuroraLayer variant="dark" />

      <div className="relative z-10 container-editorial">
        <SectionHeading
          eyebrow="Haltung"
          title="Warum mit mir arbeiten"
          intro="Vier Prinzipien, die jeden Auftrag prägen."
          tone="dark"
        />

        <div className="mt-14 md:mt-20 grid grid-cols-1 border-t border-white/15 md:grid-cols-2">
          {items.map((item, i) => (
            <Reveal
              as="div"
              key={item.title}
              delay={(i % 2) * 90}
              className={`border-b border-white/15 py-9 md:py-12 ${
                i % 2 === 0 ? "md:border-r md:pr-12" : "md:pl-12"
              }`}
            >
              <span className="idx text-2xl text-primary-light">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold leading-snug text-white">
                {item.title}
              </h3>
              <p className="mt-4 max-w-xl leading-relaxed text-white/65">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
