import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full bg-bg-alt">
      <div className="container-narrow section-padding text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6">
          Ihr Unternehmen hat Probleme, die Software lösen kann. Ich finde heraus
          welche und sorge dafür, dass es passiert.
        </h1>
        <p className="text-lg md:text-xl text-text-light max-w-2xl mx-auto mb-10">
          IT-Beratung, Digitalisierung und KI-Lösungen für den Mittelstand. Von
          der Analyse bis zum laufenden System, alles aus einer Hand.
        </p>
        <Link
          href="/#kontakt"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition-colors"
        >
          Lassen Sie uns sprechen
          <ArrowRight className="size-5" />
        </Link>
      </div>
    </section>
  );
}
