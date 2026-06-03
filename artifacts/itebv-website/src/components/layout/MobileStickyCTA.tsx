import { Phone, CalendarCheck } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function MobileStickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-border shadow-[0_-6px_20px_-6px_rgba(15,23,42,0.08)]">
      <div className="grid grid-cols-2 gap-2.5 p-3" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
        <a
          href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
          className="flex items-center justify-center gap-2 px-4 py-3 border border-border text-text-strong font-semibold text-sm rounded-xl hover:border-primary hover:text-primary transition-colors"
          aria-label="Jetzt anrufen"
        >
          <Phone size={16} />
          Anrufen
        </a>
        <a
          href="/#kontakt"
          className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white font-semibold text-sm rounded-xl hover:bg-primary-light transition-colors shadow-[var(--shadow-soft)]"
        >
          <CalendarCheck size={16} />
          {siteConfig.primaryCtaShort}
        </a>
      </div>
    </div>
  );
}
