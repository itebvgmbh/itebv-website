"use client";

import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="section-padding bg-bg-alt">
      <div className="container-narrow text-center">
        <AlertTriangle
          size={48}
          className="text-primary mx-auto mb-6"
          aria-hidden="true"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-4">
          Da ist etwas schiefgelaufen.
        </h1>
        <p className="text-text-light mb-8 max-w-xl mx-auto">
          Ein unerwarteter Fehler ist aufgetreten. Sie können die Seite neu
          laden oder direkt Kontakt aufnehmen.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition-colors"
          >
            Erneut versuchen
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-border bg-white text-text font-medium rounded-lg hover:border-primary hover:text-primary transition-colors"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </section>
  );
}
