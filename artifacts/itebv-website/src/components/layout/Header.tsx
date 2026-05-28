import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
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
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-border shadow-[0_1px_0_0_rgba(15,23,42,0.04)]"
          : "bg-white/70 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center group" aria-label="Startseite">
          <img
            src="/images/itebv-logo.png"
            alt="ITEBV GmbH – KI- und IT-Beratung"
            className="h-7 md:h-8 w-auto transition-transform group-hover:scale-[1.02]"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isHome && link.href.startsWith("/#");
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  active
                    ? "text-text-strong hover:text-primary"
                    : "text-text-light hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a href="/#kontakt" className="ml-3 btn-primary px-5 py-2.5 text-sm rounded-lg">
            {siteConfig.primaryCtaLabel}
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 -mr-2 text-text hover:text-primary transition-colors rounded-lg"
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-white">
          <div className="container-wide py-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-text px-2 py-2.5 rounded-lg hover:bg-bg-alt hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#kontakt"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-3 px-5 py-3 text-sm"
            >
              {siteConfig.primaryCtaLabel}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
