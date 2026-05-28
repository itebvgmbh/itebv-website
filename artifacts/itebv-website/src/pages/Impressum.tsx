import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function ImpressumPage() {
  return (
    <div>
      <section className="bg-bg-alt border-b border-border">
        <div className="container-narrow pt-12 md:pt-16 pb-10 md:pb-14">
          <nav aria-label="Breadcrumb" className="text-sm text-text-light mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-primary transition-colors">Start</Link>
            <ChevronRight size={14} className="text-text-muted" />
            <span className="text-text-strong">Impressum</span>
          </nav>
          <h1 className="heading-h1">Impressum</h1>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="container-narrow">
          <div className="space-y-10 text-text-light leading-relaxed max-w-prose">
            <section>
              <h2 className="text-xl font-semibold text-text-strong mb-3">{siteConfig.companyName}</h2>
              <address className="not-italic">
                <p>{siteConfig.street}</p>
                <p>{siteConfig.zip} {siteConfig.city}</p>
              </address>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-strong mb-3">Kontakt</h2>
              <p>
                Telefon:{" "}
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-primary hover:underline">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                E-Mail:{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                  {siteConfig.email}
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-strong mb-3">Registereintrag</h2>
              <p>Eingetragen im Handelsregister</p>
              <p>Registergericht: {siteConfig.registry}</p>
              <p>Registernummer: {siteConfig.registryNumber}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-strong mb-3">Vertreten durch</h2>
              <p>{siteConfig.owner}, {siteConfig.ownerTitle}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-strong mb-3">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer nach §27a Umsatzsteuergesetz: {siteConfig.vatId}
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
