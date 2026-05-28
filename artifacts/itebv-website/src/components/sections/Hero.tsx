import { ArrowRight, ShieldCheck, MapPin, Clock, Award, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/config";
import Reveal from "@/components/ui/Reveal";

const trustItems = [
  { icon: Award, label: `${siteConfig.yearsOfExperience} Jahre IT-Beratung` },
  { icon: ShieldCheck, label: `Ex-${siteConfig.formerClients}` },
  { icon: MapPin, label: `Sitz in ${siteConfig.city}` },
  { icon: Clock, label: "Erstgespräch in 24h" },
];

const heroBullets = [
  "Ein Ansprechpartner – von der Analyse bis zum laufenden System",
  "Pragmatisch, ehrlich, ergebnisorientiert",
  "Festpreise statt versteckter Stundenzettel",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(11,91,211,0.08),transparent_55%),radial-gradient(circle_at_0%_100%,rgba(11,91,211,0.05),transparent_45%)]"
      />
      <div className="relative container-wide pt-14 md:pt-20 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <Reveal className="max-w-xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary bg-accent rounded-full px-3.5 py-1.5 mb-7 ring-1 ring-inset ring-primary/15">
              <span className="size-1.5 rounded-full bg-primary" />
              KI- &amp; IT-Beratung für den Mittelstand
            </p>
            <h1 className="heading-display mb-6">
              Software und KI, die Ihr Unternehmen{" "}
              <span className="text-primary">wirklich voranbringen.</span>
            </h1>
            <p className="lead mb-8">
              Pragmatische IT-Beratung, Digitalisierung und individuelle Software
              für den deutschen Mittelstand. Ein Ansprechpartner aus Berlin –
              von der Analyse bis zum laufenden System.
            </p>

            <ul className="space-y-2.5 mb-9">
              {heroBullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-text">
                  <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10">
              <a href="/#kontakt-formular" className="btn-primary">
                {siteConfig.primaryCtaLabel}
                <ArrowRight className="size-5" />
              </a>
              <a href="/#leistungen" className="btn-secondary">
                Leistungen ansehen
              </a>
            </div>

            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-text-light">
              {trustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex items-center gap-2">
                    <Icon size={16} className="text-primary" />
                    <span>{item.label}</span>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 md:-inset-6 rounded-[2rem] bg-gradient-to-tr from-primary/15 via-primary/5 to-transparent blur-2xl"
              />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-bg-alt shadow-[var(--shadow-lift)]">
                <img
                  src="/images/hero-visual.png"
                  alt="Modernes Büro mit ruhiger Atmosphäre – ITEBV KI- und IT-Beratung"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="hidden md:flex absolute -bottom-6 -left-6 items-center gap-3 px-5 py-4 bg-white rounded-2xl border border-border shadow-[var(--shadow-card)]">
                <div className="icon-badge">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-text-muted font-semibold">
                    Vertrauen aus
                  </p>
                  <p className="text-sm font-semibold text-text-strong">
                    10+ Jahren Industrie-IT
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
