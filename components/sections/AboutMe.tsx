import { siteConfig } from "@/lib/config";
import ProfileImage from "@/components/ui/ProfileImage";
import { User, GraduationCap, Briefcase, MapPin, Linkedin } from "lucide-react";

export default function AboutMe() {
  const hasImage = siteConfig.stefanFoto && siteConfig.stefanFoto.trim() !== "";

  const highlights = [
    {
      icon: Briefcase,
      label: `${siteConfig.yearsOfExperience} Jahre IT-Beratung (u. a. Linde, PSI)`,
    },
    {
      icon: GraduationCap,
      label: siteConfig.ownerTitle,
    },
    {
      icon: MapPin,
      label: `Sitz in ${siteConfig.city}, deutschlandweit tätig`,
    },
  ];

  return (
    <section id="ueber-mich" className="section-padding bg-bg-alt">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-16 text-center">
          Über mich
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            {hasImage ? (
              <ProfileImage
                src={siteConfig.stefanFoto}
                alt={`${siteConfig.owner}, ${siteConfig.ownerTitle} der ${siteConfig.companyName} – KI- und IT-Beratung in Berlin`}
              />
            ) : (
              <div className="aspect-square max-w-sm mx-auto lg:mx-0 flex items-center justify-center rounded-xl bg-white border border-border">
                <User size={96} className="text-text-light/40" />
              </div>
            )}
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 space-y-5">
            <p className="text-text leading-relaxed">
              Ich bin Stefan Tittmann, Geschäftsführer der{" "}
              {siteConfig.companyName} in {siteConfig.city}.
            </p>
            <p className="text-text leading-relaxed">
              Über zehn Jahre habe ich Unternehmen dabei beraten, ihre
              IT-Systeme und Prozesse zu verbessern – von ERP-Einführungen bis
              zur Prozessoptimierung, für Konzerne wie Linde und zahlreiche
              Mittelständler.
            </p>
            <p className="text-text leading-relaxed">
              Heute helfe ich Unternehmen, ihre Abläufe mit moderner
              Technologie effizienter zu machen. Das heißt manchmal eine
              komplett neue Software, manchmal ein KI-Chatbot oder Voice
              Agent, und manchmal die Erkenntnis, dass die einfachste Lösung
              die beste ist.
            </p>
            <p className="text-text leading-relaxed">
              Was mich antreibt: Ich will, dass am Ende etwas steht, das
              funktioniert. Kein Konzept, das niemand umsetzt. Keine Technik,
              die niemand versteht. Sondern eine Lösung, die Ihren
              Arbeitsalltag spürbar besser macht.
            </p>

            {/* Highlights */}
            <ul className="grid sm:grid-cols-1 gap-3 pt-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 text-sm text-text"
                  >
                    <span className="flex items-center justify-center size-8 rounded-full bg-accent shrink-0">
                      <Icon size={16} className="text-primary" />
                    </span>
                    <span>{item.label}</span>
                  </li>
                );
              })}
            </ul>

            {siteConfig.linkedInUrl && (
              <a
                href={siteConfig.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 text-primary font-medium hover:text-primary-light transition-colors"
              >
                <Linkedin size={18} />
                Auf LinkedIn vernetzen
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
