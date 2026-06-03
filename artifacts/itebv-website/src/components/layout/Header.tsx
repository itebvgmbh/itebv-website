import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

const navLinks = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#referenzen", label: "Referenzen" },
  { href: "/#ueber-mich", label: "Über mich" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "bg-white/65 backdrop-blur-xl backdrop-saturate-150 border-b border-white/50 shadow-[0_8px_30px_-18px_rgba(11,16,22,0.25)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-editorial flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center shrink-0" aria-label="ITEBV – Startseite">
          <img
            src="/images/itebv-logo.png"
            alt="ITEBV – KI- und IT-Beratung"
            className="h-6 md:h-7 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline text-[0.95rem] text-ink/70 hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#kontakt"
            className="group inline-flex items-center gap-2 pl-5 pr-4 py-2.5 rounded-full bg-ink text-white text-sm font-medium hover:bg-primary transition-colors duration-300"
          >
            {siteConfig.primaryCtaShort}
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden -mr-2 p-2 text-ink"
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-line bg-paper">
          <div className="container-editorial py-5 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-lg font-medium text-ink border-b border-line/70 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#kontakt"
              onClick={() => setMobileOpen(false)}
              className="mt-5 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-ink text-white text-base font-medium"
            >
              {siteConfig.primaryCtaLabel}
              <ArrowUpRight size={18} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
