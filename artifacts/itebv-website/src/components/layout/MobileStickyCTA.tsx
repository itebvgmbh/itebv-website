import { Phone, CalendarCheck } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function MobileStickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-line bg-paper/90 backdrop-blur-md">
      <div className="grid grid-cols-2 gap-3 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <a
          href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
          className="flex items-center justify-center gap-2 rounded-full border border-line px-4 py-3 text-sm font-medium text-ink"
          aria-label="Jetzt anrufen"
        >
          <Phone size={16} />
          Anrufen
        </a>
        <a
          href="/#kontakt"
          className="flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-white"
        >
          <CalendarCheck size={16} />
          {siteConfig.primaryCtaShort}
        </a>
      </div>
    </div>
  );
}
