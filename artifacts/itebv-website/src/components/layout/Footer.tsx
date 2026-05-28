import { Link } from "wouter";
import { siteConfig } from "@/lib/config";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const serviceLinks = [
  { href: "/analyse", label: "Analyse & Strategie" },
  { href: "/software", label: "Individuelle Software" },
  { href: "/ki-loesungen", label: "KI-Lösungen" },
];

const siteLinks = [
  { href: "/#referenzen", label: "Referenzen" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#ueber-mich", label: "Über mich" },
];

const legalLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-deep text-white/80">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-4">
            <img
              src="/images/itebv-logo.png"
              alt="ITEBV GmbH"
              className="h-7 w-auto mb-5 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed text-white/65 max-w-xs">
              KI- und IT-Beratung, Digitalisierung und individuelle Software
              für den Mittelstand. Sitz in Berlin, deutschlandweit tätig.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Leistungen
            </h3>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/65 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Unternehmen
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/65 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4">
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Kostenloses Erstgespräch
            </h3>
            <p className="text-sm text-white/65 mb-5 leading-relaxed">
              20&nbsp;Minuten, unverbindlich. Sie erzählen, ich höre zu.
            </p>
            <a
              href="/#kontakt-formular"
              className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-light transition-colors mb-7"
            >
              Termin anfragen
              <ArrowRight size={16} />
            </a>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-white/50" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-white/75 hover:text-white transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-white/50" />
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="text-white/75 hover:text-white transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="shrink-0 mt-0.5 text-white/50" />
                <address className="not-italic text-white/75">
                  {siteConfig.street}
                  <br />
                  {siteConfig.zip} {siteConfig.city}
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 text-center md:text-left">
            &copy; {currentYear} {siteConfig.companyName}. Alle Rechte vorbehalten.
          </p>
          <ul className="flex items-center gap-6 text-xs">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/60 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
