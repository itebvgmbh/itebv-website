import { siteConfig } from "@/lib/config";
import ProfileImage from "@/components/ui/ProfileImage";
import Reveal from "@/components/ui/Reveal";
import { User, GraduationCap, Briefcase, MapPin, Linkedin } from "lucide-react";

export default function AboutMe() {
  const hasImage = siteConfig.stefanFoto && siteConfig.stefanFoto.trim() !== "";

  const highlights = [
    { icon: Briefcase, label: `${siteConfig.yearsOfExperience} Jahre IT-Beratung (u. a. Linde, PSI)` },
    { icon: GraduationCap, label: siteConfig.ownerTitle },
    { icon: MapPin, label: `Sitz in ${siteConfig.city}, deutschlandweit tätig` },
  ];

  return (
    <section id="ueber-mich" className="section-padding bg-bg">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16 items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent to-transparent"
              />
              <div className="relative">
                {hasImage ? (
                  <ProfileImage
                    src={siteConfig.stefanFoto}
                    alt={`${siteConfig.owner}, ${siteConfig.ownerTitle} der ${siteConfig.companyName} – KI- und IT-Beratung in Berlin`}
                  />
                ) : (
                  <div className="aspect-square max-w-sm mx-auto lg:mx-0 flex items-center justify-center rounded-2xl bg-bg-alt border border-border">
                    <User size={96} className="text-text-light/40" />
                  </div>
                )}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="order-1 lg:order-2 space-y-5">
            <p className="eyebrow">Über mich</p>
            <h2 className="heading-h2">
              Ein Ansprechpartner, der zuhört –
              <br className="hidden md:block" /> und liefert.
            </h2>
            <p className="text-text-light leading-relaxed">
              Ich bin Stefan Tittmann, Geschäftsführer der {siteConfig.companyName} in {siteConfig.city}.
              Über zehn Jahre habe ich Unternehmen dabei beraten, ihre IT-Systeme und
              Prozesse zu verbessern – von ERP-Einführungen bis zur Prozessoptimierung,
              für Konzerne wie Linde und zahlreiche Mittelständler.
            </p>
            <p className="text-text-light leading-relaxed">
              Heute helfe ich Unternehmen, ihre Abläufe mit moderner Technologie
              effizienter zu machen. Das heißt manchmal eine komplett neue Software,
              manchmal ein KI-Chatbot oder Voice Agent, und manchmal die Erkenntnis,
              dass die einfachste Lösung die beste ist.
            </p>
            <p className="text-text-light leading-relaxed">
              Was mich antreibt: Ich will, dass am Ende etwas steht, das funktioniert.
              Kein Konzept, das niemand umsetzt. Keine Technik, die niemand versteht.
              Sondern eine Lösung, die Ihren Arbeitsalltag spürbar besser macht.
            </p>

            <ul className="grid sm:grid-cols-1 gap-3 pt-2">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex items-center gap-3 text-sm text-text">
                    <span className="icon-badge size-9">
                      <Icon size={16} />
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
                className="inline-flex items-center gap-2 mt-2 text-primary font-semibold hover:text-primary-light transition-colors"
              >
                <Linkedin size={18} />
                Auf LinkedIn vernetzen
              </a>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
