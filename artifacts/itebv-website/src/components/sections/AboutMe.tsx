import { siteConfig } from "@/lib/config";
import ProfileImage from "@/components/ui/ProfileImage";
import { User, GraduationCap, Briefcase, MapPin, Linkedin } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function AboutMe() {
  const hasImage = siteConfig.stefanFoto && siteConfig.stefanFoto.trim() !== "";

  const highlights = [
    {
      icon: Briefcase,
      label: `${siteConfig.yearsOfExperience} Jahre IT-Beratung (u. a. Linde, PSI)`,
    },
    { icon: GraduationCap, label: siteConfig.ownerTitle },
    {
      icon: MapPin,
      label: `Sitz in ${siteConfig.city}, deutschlandweit tätig`,
    },
  ];

  return (
    <section
      id="ueber-mich"
      className="section-padding bg-paper border-t border-line"
    >
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Portrait */}
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 max-w-sm lg:max-w-none">
              {hasImage ? (
                <ProfileImage
                  src={siteConfig.stefanFoto}
                  alt={`${siteConfig.owner}, ${siteConfig.ownerTitle} der ${siteConfig.companyName} – KI- und IT-Beratung in Berlin`}
                />
              ) : (
                <div className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-line bg-bg">
                  <User size={96} className="text-muted/40" />
                </div>
              )}
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={120} className="lg:col-span-7">
            <p className="eyebrow">Über mich</p>
            <h2 className="display mt-5 text-3xl md:text-4xl lg:text-[2.9rem] text-ink">
              {siteConfig.owner}
            </h2>
            <p className="mt-2 text-lg text-primary">{siteConfig.ownerTitle}</p>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-text-light">
              <p>
                Über zehn Jahre habe ich Unternehmen dabei beraten, ihre
                IT-Systeme und Prozesse zu verbessern – von ERP-Einführungen bis
                zur Prozessoptimierung, für Konzerne wie Linde und zahlreiche
                Mittelständler.
              </p>
              <p>
                Heute helfe ich Unternehmen, ihre Abläufe mit moderner
                Technologie effizienter zu machen. Das heißt manchmal eine
                komplett neue Software, manchmal ein KI-Chatbot oder Voice
                Agent – und manchmal die Erkenntnis, dass die einfachste Lösung
                die beste ist.
              </p>
              <p className="text-ink">
                Was mich antreibt: Ich will, dass am Ende etwas steht, das
                funktioniert. Kein Konzept, das niemand umsetzt. Sondern eine
                Lösung, die Ihren Arbeitsalltag spürbar besser macht.
              </p>
            </div>

            <ul className="mt-10 space-y-px border-t border-line">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.label}
                    className="flex items-center gap-4 border-b border-line py-4 text-ink"
                  >
                    <Icon size={18} className="shrink-0 text-primary" strokeWidth={1.5} />
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
                className="link-arrow mt-8 text-primary"
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
