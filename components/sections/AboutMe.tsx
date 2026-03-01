import { siteConfig } from "@/lib/config";
import ProfileImage from "@/components/ui/ProfileImage";
import { User } from "lucide-react";

export default function AboutMe() {
  const hasImage = siteConfig.stefanFoto && siteConfig.stefanFoto.trim() !== "";

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
                alt={`${siteConfig.owner}, ${siteConfig.ownerTitle}`}
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
              Ich bin Stefan, Geschäftsführer der {siteConfig.companyName} in
              Berlin.
            </p>
            <p className="text-text leading-relaxed">
              Ich habe über zehn Jahre Unternehmen dabei beraten, ihre
              IT-Systeme und Prozesse zu verbessern. Von ERP-Einführungen bis
              zur Prozessoptimierung, für Konzerne wie Linde und zahlreiche
              Mittelständler.
            </p>
            <p className="text-text leading-relaxed">
              Heute helfe ich Unternehmen, ihre Abläufe mit moderner Technologie
              effizienter zu machen. Das heißt manchmal eine komplett neue
              Software, manchmal ein KI-Chatbot, und manchmal die Erkenntnis,
              dass die einfachste Lösung die beste ist.
            </p>
            <p className="text-text leading-relaxed">
              Was mich antreibt: Ich will, dass am Ende etwas steht, das
              funktioniert. Kein Konzept, das niemand umsetzt. Keine Technik, die
              niemand versteht. Sondern eine Lösung, die Ihren Arbeitsalltag
              spürbar besser macht.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
