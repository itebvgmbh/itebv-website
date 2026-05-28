import type { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="section-padding bg-bg-alt">
      <div className="container-narrow text-center">
        <p className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">
          404
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-4">
          Diese Seite gibt es nicht (mehr).
        </h1>
        <p className="text-text-light mb-8 max-w-xl mx-auto">
          Vielleicht hat sich die URL geändert oder es war ein Tippfehler.
          Zurück zur Startseite oder direkt zum Kontakt.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition-colors"
          >
            <Home size={18} />
            Zur Startseite
          </Link>
          <Link
            href="/#kontakt"
            className="inline-flex items-center justify-center px-6 py-3 border border-border bg-white text-text font-medium rounded-lg hover:border-primary hover:text-primary transition-colors"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </section>
  );
}
