import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/config";

const navLinks = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#referenzen", label: "Referenzen" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#ueber-mich", label: "Über mich" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center" aria-label="Startseite">
          <img
            src="/images/itebv-logo.png"
            alt="ITEBV GmbH – KI- und IT-Beratung"
            className="h-7 md:h-8 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-light hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#kontakt"
            className="inline-flex items-center px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-light transition-colors"
          >
            {siteConfig.primaryCtaLabel}
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-text-light hover:text-primary transition-colors"
          aria-label="Menü öffnen"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-white">
          <div className="container-wide py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-text-light hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#kontakt"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-light transition-colors"
            >
              {siteConfig.primaryCtaLabel}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
