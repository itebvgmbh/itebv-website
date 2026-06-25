import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";
import Reveal from "@/components/ui/Reveal";
import AuroraLayer from "@/components/ui/AuroraLayer";

const stats = [
  { caption: "Erfahrung", value: `${siteConfig.yearsOfExperience} Jahre IT, Prozesse & KI` },
  { caption: "Standort", value: `${siteConfig.city}, bundesweit` },
  { caption: "Erstgespräch", value: "in 24 Stunden" },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden -mt-16 md:-mt-20 bg-sky grain">
      <AuroraLayer />

      <div className="relative z-10 container-editorial pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-44">
        <div className="max-w-4xl">
          <Reveal>
            <p className="eyebrow mb-7">KI- &amp; IT-Beratung · Mittelstand &amp; KMU</p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="display text-[2.6rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4.4rem] text-ink">
              Bringen Sie Ihr Unternehmen mit KI und Software{" "}
              <span className="underline decoration-primary/55 decoration-2 underline-offset-[0.16em]">
                wirklich
              </span>{" "}
              voran.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-text-light">
              Für Mittelstand und KMU, die mit KI vorangehen wollen. Ich sage
              Ihnen ehrlich, wo KI bei Ihnen Zeit und Geld bringt – und setze es
              um. Von der Analyse bis zum laufenden System, ein Ansprechpartner
              aus Berlin.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <a
                href="/#kontakt"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:bg-primary-dark transition-colors duration-300"
              >
                {siteConfig.primaryCtaLabel}
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="/#leistungen"
                className="link-arrow text-ink hover:text-primary transition-colors"
              >
                Leistungen ansehen
                <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Kennzahlen als schwebende Glas-Kachel */}
        <Reveal delay={320}>
          <dl className="glass mt-16 md:mt-24 grid grid-cols-1 overflow-hidden rounded-2xl shadow-[0_20px_60px_-30px_rgba(11,16,22,0.25)] sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.caption}
                className="border-white/45 p-6 lg:p-8 [&:not(:first-child)]:border-t sm:[&:not(:first-child)]:border-t-0 sm:[&:not(:first-child)]:border-l"
              >
                <dt className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-text-light">
                  {stat.caption}
                </dt>
                <dd className="mt-2 text-xl md:text-2xl font-semibold tracking-tight text-ink leading-tight">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
