import { Link } from "wouter";
import { siteConfig } from "@/lib/config";
import { Mail, Phone, MapPin } from "lucide-react";

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
    <footer className="bg-text text-white">
      <div className="container-wide py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold mb-4">ITEBV</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              KI- und IT-Beratung, Digitalisierung und individuelle Software
              für den Mittelstand. Sitz in Berlin, deutschlandweit tätig.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Leistungen</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Seite</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/impressum" className="hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-white transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5" />
                <address className="not-italic">
                  {siteConfig.street}
                  <br />
                  {siteConfig.zip} {siteConfig.city}
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/50">
          &copy; {currentYear} {siteConfig.companyName}. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
