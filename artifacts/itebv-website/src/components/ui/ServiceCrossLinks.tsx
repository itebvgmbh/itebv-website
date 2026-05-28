import { Link } from "wouter";
import { ArrowRight, Search, Code, BrainCircuit } from "lucide-react";

const allServices = [
  {
    href: "/analyse",
    icon: Search,
    title: "Analyse & Digitalisierungsstrategie",
    description: "Wo lohnt sich Digitalisierung wirklich – und wo nicht?",
  },
  {
    href: "/software",
    icon: Code,
    title: "Individuelle Geschäftssoftware",
    description: "Maßgeschneiderte Software, die Ihnen gehört.",
  },
  {
    href: "/ki-loesungen",
    icon: BrainCircuit,
    title: "KI-Lösungen für den Geschäftsalltag",
    description: "Chatbots, Voice Agents, Prozessautomatisierung.",
  },
];

export default function ServiceCrossLinks({ currentHref }: { currentHref: string }) {
  const others = allServices.filter((s) => s.href !== currentHref);
  return (
    <section className="section-padding bg-bg-alt">
      <div className="container-wide">
        <h2 className="text-2xl md:text-3xl font-bold text-text mb-8 text-center">
          Passend dazu
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {others.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.href}
                href={service.href}
                className="group p-6 rounded-xl border border-border bg-white hover:border-primary/30 transition-colors block"
              >
                <div className="flex items-start gap-4">
                  <Icon className="size-8 text-primary shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-text mb-2">
                      {service.title}
                    </h3>
                    <p className="text-text-light text-sm mb-3">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                      Mehr erfahren <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
