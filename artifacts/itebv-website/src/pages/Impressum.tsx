import { siteConfig } from "@/lib/config";

export default function ImpressumPage() {
  return (
    <div>
      <section className="section-padding bg-bg-alt">
        <div className="container-narrow">
          <h1 className="text-4xl md:text-5xl font-bold text-text leading-tight mb-12">
            Impressum
          </h1>

          <div className="space-y-10 text-text-light">
            <section>
              <h2 className="text-xl font-semibold text-text mb-3">{siteConfig.companyName}</h2>
              <address className="not-italic">
                <p>{siteConfig.street}</p>
                <p>{siteConfig.zip} {siteConfig.city}</p>
              </address>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text mb-3">Kontakt</h2>
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
              <h2 className="text-xl font-semibold text-text mb-3">Registereintrag</h2>
              <p>Eingetragen im Handelsregister</p>
              <p>Registergericht: {siteConfig.registry}</p>
              <p>Registernummer: {siteConfig.registryNumber}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text mb-3">Vertreten durch</h2>
              <p>{siteConfig.owner}, {siteConfig.ownerTitle}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text mb-3">Umsatzsteuer-ID</h2>
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
