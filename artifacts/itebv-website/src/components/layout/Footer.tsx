import { Link } from "wouter";
import { siteConfig } from "@/lib/config";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const serviceLinks = [
  { href: "/analyse", label: "Analyse & Strategie" },
  { href: "/software", label: "Individuelle Software" },
  { href: "/ki-loesungen", label: "KI-Lösungen" },
];

const siteLinks = [
  { href: "/#referenzen", label: "Referenzen" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#ueber-mich", label: "Über mich" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      {/* Closing-CTA */}
      <div className="container-editorial border-b border-white/10 py-16 md:py-24">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <h2 className="display max-w-2xl text-3xl md:text-4xl lg:text-[2.9rem] text-white">
            Lassen Sie uns über Ihr Projekt sprechen.
          </h2>
          <a
            href="/#kontakt"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-4 font-medium text-ink transition-colors duration-300 hover:bg-primary hover:text-white"
          >
            {siteConfig.primaryCtaLabel}
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>

      <div className="container-editorial py-14 md:py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <span className="font-display text-2xl font-semibold tracking-tight text-white">
              ITEBV
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              KI- und IT-Beratung, Digitalisierung und individuelle Software für
              den Mittelstand. Sitz in Berlin, deutschlandweit tätig.
            </p>
          </div>

          <div>
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/40">
              Leistungen
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-underline transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/40">
              Seite
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/impressum"
                  className="link-underline transition-colors hover:text-white"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="link-underline transition-colors hover:text-white"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/40">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="shrink-0 text-white/40" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="shrink-0 text-white/40" />
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-white/40" />
                <address className="not-italic">
                  {siteConfig.street}
                  <br />
                  {siteConfig.zip} {siteConfig.city}
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>
            &copy; {currentYear} {siteConfig.companyName}. Alle Rechte
            vorbehalten.
          </span>
          <span>{siteConfig.registry} · {siteConfig.registryNumber}</span>
        </div>
      </div>
    </footer>
  );
}
