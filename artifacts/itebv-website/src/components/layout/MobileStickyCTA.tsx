import { Phone, CalendarCheck } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function MobileStickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-border shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
          className="flex items-center justify-center gap-2 px-4 py-3 border border-primary text-primary font-medium text-sm rounded-lg hover:bg-accent transition-colors"
          aria-label="Jetzt anrufen"
        >
          <Phone size={16} />
          Anrufen
        </a>
        <a
          href="/#kontakt"
          className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white font-medium text-sm rounded-lg hover:bg-primary-light transition-colors"
        >
          <CalendarCheck size={16} />
          {siteConfig.primaryCtaShort}
        </a>
      </div>
    </div>
  );
}
