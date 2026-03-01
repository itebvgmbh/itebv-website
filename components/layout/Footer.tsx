import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text text-white">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Unternehmen */}
          <div>
            <h3 className="text-lg font-bold mb-4">ITEBV</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              IT-Beratung, Digitalisierung und KI-Lösungen für den Mittelstand.
              Von der Analyse bis zum laufenden System.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5" />
                <span>
                  {siteConfig.street}
                  <br />
                  {siteConfig.zip} {siteConfig.city}
                </span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link
                  href="/impressum"
                  className="hover:text-white transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="hover:text-white transition-colors"
                >
                  Datenschutz
                </Link>
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
