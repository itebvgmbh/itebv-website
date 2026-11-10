import { useEffect, useState, useSyncExternalStore } from "react";
import { Link } from "wouter";
import {
  CONSENT_CHANGED_EVENT,
  OPEN_SETTINGS_EVENT,
  initAnalytics,
  openCookieSettings,
  readConsent,
  saveConsent,
} from "@/lib/gtag";

/* Cookie-Banner und Einstieg für Google Analytics (Regeln: src/lib/analytics.ts).

   Zwei Knöpfe, gleich gewichtet: Ablehnen ist so leicht wie Zustimmen. Kein Schließen-Kreuz –
   ohne Wahl bleibt alles „denied“, und der Banner kommt auf der nächsten Seite wieder. Die Wahl
   liegt im localStorage; ändern lässt sie sich über „Cookie-Einstellungen“ im Fuß und in der
   Datenschutzerklärung. Beim Vorrendern (Server) wird nichts gezeigt, sonst blitzte der Banner
   bei jedem auf, der schon gewählt hat. */

function subscribe(onChange: () => void) {
  window.addEventListener(CONSENT_CHANGED_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CONSENT_CHANGED_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function useStoredConsent() {
  return useSyncExternalStore(
    subscribe,
    () => readConsent() ?? "unset",
    () => "server" as const,
  );
}

export function CookieBanner() {
  const consent = useStoredConsent();
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    initAnalytics();
    const open = () => setReopened(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, open);
  }, []);

  if (consent === "server") return null;
  if (consent !== "unset" && !reopened) return null;

  function choose(choice: "granted" | "denied") {
    saveConsent(choice);
    setReopened(false);
  }

  const knopf =
    "rounded-full border border-line bg-bg px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary";

  return (
    <section
      aria-label="Cookie-Einstellungen"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-line bg-paper pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_rgba(0,0,0,0.08)] print:hidden"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:gap-8">
        <p className="max-w-[42rem] text-sm leading-relaxed text-text-light">
          Mit Ihrer Einwilligung messe ich mit Google Analytics, wie diese Website genutzt wird –
          ohne Werbefunktionen. Dabei werden Cookies gesetzt und Daten an Google übermittelt, auch
          in die USA. Einzelheiten und Widerruf in der{" "}
          <Link href="/datenschutz#analyse" className="underline hover:text-primary">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="grid shrink-0 gap-2 sm:grid-cols-2">
          <button type="button" className={knopf} onClick={() => choose("granted")}>
            Alle akzeptieren
          </button>
          <button type="button" className={knopf} onClick={() => choose("denied")}>
            Nur notwendige
          </button>
        </div>
      </div>
    </section>
  );
}

/** „Cookie-Einstellungen“: öffnet den Banner wieder. */
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      Cookie-Einstellungen
    </button>
  );
}
