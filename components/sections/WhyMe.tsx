const items = [
  {
    title: "Ich verstehe Ihr Geschäft, nicht nur die Technik.",
    text: "10 Jahre IT-Beratung für Industrieunternehmen haben mir eins beigebracht: Die beste Technologie bringt nichts, wenn sie am tatsächlichen Bedarf vorbeigeht. Ich komme nicht mit einer fertigen Lösung im Koffer. Ich höre erst zu, dann plane ich, dann setze ich um.",
  },
  {
    title: "Sie bekommen Ergebnisse, keine Konzeptpapiere.",
    text: "Viele Berater liefern eine Analyse und verschwinden. Viele Entwickler setzen um, ohne den Geschäftsprozess zu verstehen. Ich mache beides: Ich analysiere, was Sie brauchen, und sorge dafür, dass es realisiert und betrieben wird. Von Anfang bis Ende, ein Ansprechpartner.",
  },
  {
    title: "Ehrlich statt oversold.",
    text: "Wenn etwas keinen Sinn ergibt, sage ich Ihnen das. Nicht jedes Problem braucht KI. Nicht jeder Prozess braucht eine eigene Software. Manchmal ist die richtige Antwort einfacher als gedacht. Sie bezahlen mich dafür, dass ich die richtige Lösung finde, nicht die teuerste.",
  },
  {
    title: "Ich glaube an gemeinsamen Erfolg.",
    text: "Gute Zusammenarbeit heißt für mich: Beide Seiten profitieren. Deshalb bin ich offen für Vergütungsmodelle, die sich am tatsächlichen Ergebnis orientieren. Wenn meine Lösung Ihnen Geld spart oder Umsatz bringt, darf sich das auch in meiner Vergütung widerspiegeln. Das sorgt dafür, dass wir am gleichen Strang ziehen.",
  },
];

export default function WhyMe() {
  return (
    <section className="section-padding bg-bg-alt">
      <div className="container-wide">
        <h2 className="text-2xl md:text-3xl font-bold text-text mb-12">
          Warum mit mir arbeiten?
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {items.map((item) => (
            <article key={item.title}>
              <h3 className="text-xl font-bold text-text mb-3">{item.title}</h3>
              <p className="text-text-light">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
