import Link from "next/link";
import { ArrowRight, ShieldCheck, MapPin, Clock, Award } from "lucide-react";
import { siteConfig } from "@/lib/config";

const trustItems = [
  { icon: Award, label: `${siteConfig.yearsOfExperience} Jahre IT-Beratung` },
  { icon: ShieldCheck, label: `Ex-${siteConfig.formerClients}` },
  { icon: MapPin, label: `Sitz in ${siteConfig.city}` },
  { icon: Clock, label: "Erstgespräch in 24h" },
];

export default function Hero() {
  return (
    <section className="relative w-full bg-bg-alt overflow-hidden">
      <div className="container-narrow section-padding text-center">
        <p className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-primary bg-accent rounded-full px-4 py-1.5 mb-6">
          KI- &amp; IT-Beratung für den Mittelstand
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6">
          Software und KI, die Ihr Unternehmen wirklich voranbringen.
        </h1>
        <p className="text-lg md:text-xl text-text-light max-w-2xl mx-auto mb-10">
          Pragmatische IT-Beratung, Digitalisierung und individuelle Software
          für den deutschen Mittelstand. Ein Ansprechpartner aus Berlin – von
          der Analyse bis zum laufenden System.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
          <Link
            href="/#kontakt"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition-colors"
          >
            {siteConfig.primaryCtaLabel}
            <ArrowRight className="size-5" />
          </Link>
          <Link
            href="/#leistungen"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-border bg-white text-text font-medium rounded-lg hover:border-primary hover:text-primary transition-colors"
          >
            Leistungen ansehen
          </Link>
        </div>

        {/* Trust strip */}
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-text-light">
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
      </div>
    </section>
  );
}
