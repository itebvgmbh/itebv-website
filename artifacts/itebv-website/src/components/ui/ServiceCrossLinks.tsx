import { Link } from "wouter";
import { ArrowRight, Search, Code, BrainCircuit } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

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
    <section className="section-padding bg-bg">
      <div className="container-wide">
        <Reveal className="text-center mb-12">
          <p className="eyebrow mb-3">Passend dazu</p>
          <h2 className="heading-h2">Weitere Leistungen</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {others.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.href} delay={i * 80}>
                <Link
                  href={service.href}
                  className="card-base card-hover group block p-7 h-full"
                >
                  <div className="flex items-start gap-5">
                    <div className="icon-badge shrink-0">
                      <Icon size={22} />
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-h3 mb-2">{service.title}</h3>
                      <p className="text-text-light text-sm mb-3 leading-relaxed">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all">
                        Mehr erfahren <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
