import { Link } from "wouter";
import { useSeo } from "@/hooks/useSeo";

export default function NotFound() {
  useSeo({
    title: "Seite nicht gefunden | ITEBV GmbH",
    description: "Die angeforderte Seite konnte nicht gefunden werden.",
    path: "/404",
    noindex: true,
  });
  return (
    <section className="section-padding bg-bg-alt min-h-[60vh] flex items-center">
      <div className="container-narrow text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-text mb-4">404</h1>
        <p className="text-lg text-text-light mb-8">
          Diese Seite konnte leider nicht gefunden werden.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition-colors"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </section>
  );
}
