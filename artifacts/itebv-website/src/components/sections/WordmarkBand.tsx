import Reveal from "@/components/ui/Reveal";
import AuroraLayer from "@/components/ui/AuroraLayer";

/**
 * Atmosphärisches Marken-Finale: überdimensionale Wortmarke über einem weichen
 * Himmel-/Aurora-Verlauf – ein ruhiger, hochwertiger Übergang zum Footer.
 */
export default function WordmarkBand() {
  return (
    <section className="relative overflow-hidden bg-sky grain border-t border-line">
      <AuroraLayer />

      <div className="relative z-10 container-editorial pt-20 pb-12 md:pt-28 md:pb-16 text-center">
        <Reveal>
          <p className="eyebrow justify-center">Berlin · seit 2014 · bundesweit</p>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-8 max-w-2xl text-balance text-lg md:text-xl text-text-light">
            Ein Ansprechpartner für Beratung, Software und KI –{" "}
            <span className="text-ink">von der Analyse bis zum laufenden System.</span>
          </p>
        </Reveal>
      </div>

      {/* Überdimensionale Wortmarke, leicht in den Footer auslaufend */}
      <Reveal
        as="div"
        delay={160}
        className="relative z-10 flex w-full justify-center overflow-hidden px-4"
      >
        <span
          className="select-none font-semibold leading-none tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-b from-ink/90 to-primary/40"
          style={{ fontSize: "clamp(4rem, 19vw, 17rem)" }}
          aria-hidden
        >
          IT&middot;EBV
        </span>
      </Reveal>
    </section>
  );
}
