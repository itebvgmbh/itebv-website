// Google Analytics 4 im Browser – der einzige Weg zu gtag. Was gemessen wird: src/lib/analytics.ts.
//
// Ablauf (Google Consent Mode v2):
//   1. dataLayer und gtag() anlegen, alle vier Signale „denied“.
//   2. Gespeicherte Einwilligung anwenden.
//   3. gtag('js'), gtag('config') – landen in dataLayer.
//   4. gtag.js nachladen, aber nur mit Einwilligung: verzögert, wenn sie schon gespeichert
//      war, sofort nach „Alle akzeptieren“. gtag.js arbeitet beim Laden alles ab, was in
//      dataLayer steht – kein Aufruf geht verloren.
// Seitenwechsel innerhalb der App (wouter, pushState) zählt gtag.js selbst
// („Erweiterte Messung“ der Property).

import {
  CONSENT_STORAGE_KEY,
  GA_COOKIE,
  GA_MEASUREMENT_ID,
  GA_SESSION_COOKIE,
  parseConsent,
  type ConsentChoice,
} from "./analytics";

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

/** Gemeldet nach jeder gespeicherten Wahl – der Banner liest sie neu. */
export const CONSENT_CHANGED_EVENT = "itebv:einwilligung";
/** „Cookie-Einstellungen“ geklickt – der Banner öffnet sich wieder. */
export const OPEN_SETTINGS_EVENT = "itebv:cookie-einstellungen";

const SCRIPT_ID = "itebv-gtag";
const DISABLE_FLAG = `ga-disable-${GA_MEASUREMENT_ID}`;

let initialized = false;
let scriptRequested = false;

function gtag(...args: unknown[]) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag(...args);
}

export function readConsent(): ConsentChoice | null {
  try {
    return parseConsent(window.localStorage.getItem(CONSENT_STORAGE_KEY));
  } catch {
    return null;
  }
}

function setDisabled(disabled: boolean) {
  (window as unknown as Record<string, unknown>)[DISABLE_FLAG] = disabled;
}

function loadScript() {
  if (scriptRequested || document.getElementById(SCRIPT_ID)) return;
  scriptRequested = true;
  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

/** Nach dem Laden der Seite und wenn der Browser Zeit hat – gtag.js soll die erste
    Anzeige nicht bremsen. */
function loadScriptLater() {
  const later = () => {
    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(loadScript, { timeout: 3000 });
    } else {
      setTimeout(loadScript, 1500);
    }
  };
  if (document.readyState === "complete") later();
  else window.addEventListener("load", later, { once: true });
}

/** Klick auf E-Mail-Adresse oder Telefonnummer – nur die Art, nie die Adresse selbst. */
function onDocumentClick(e: MouseEvent) {
  const link = (e.target as Element | null)?.closest?.('a[href^="mailto:"], a[href^="tel:"]');
  if (!link) return;
  const method = link.getAttribute("href")!.startsWith("mailto:") ? "email" : "telefon";
  trackEvent("contact_click", { method });
}

/** Einmal je Dokument. Lädt gtag.js nur, wenn die Einwilligung schon gespeichert ist. */
export function initAnalytics() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  window.dataLayer = window.dataLayer || [];
  // gtag.js erwartet das arguments-Objekt, kein Array – deshalb `function`.
  window.gtag = function () {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };

  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    wait_for_update: 500,
  });
  gtag("set", "ads_data_redaction", true);

  const consent = readConsent();
  if (consent === "granted") gtag("consent", "update", { analytics_storage: "granted" });
  setDisabled(consent !== "granted");

  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, {
    // Keine Werbefunktionen: kein Google Signals, keine personalisierte Werbung.
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  document.addEventListener("click", onDocumentClick, { capture: true });

  if (consent === "granted") loadScriptLater();
}

/** Löscht _ga und _ga_<Kennung> – gtag.js setzt sie auf die oberste Domain (.itebv.de). */
function deleteGaCookies() {
  const parts = window.location.hostname.split(".");
  const domains = [""];
  for (let i = 0; i < parts.length - 1; i++) domains.push(`; domain=.${parts.slice(i).join(".")}`);
  for (const name of [GA_COOKIE, GA_SESSION_COOKIE]) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain}`;
    }
  }
}

/** Wahl aus dem Cookie-Banner speichern und sofort anwenden. */
export function saveConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    // Speicher gesperrt (privater Modus): gilt dann nur für diese Seite.
  }
  initAnalytics();
  gtag("consent", "update", { analytics_storage: choice });
  setDisabled(choice !== "granted");
  if (choice === "granted") {
    loadScript();
  } else {
    deleteGaCookies();
  }
  window.dispatchEvent(new Event(CONSENT_CHANGED_EVENT));
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}

/** Ereignis an GA4 – nur mit Einwilligung, sonst still. Keine Angaben zur Person übergeben.
    Ist gtag.js noch nicht geladen, wartet das Ereignis in dataLayer. */
export function trackEvent(name: string, params: Record<string, string | number> = {}) {
  if (typeof window === "undefined" || !initialized || readConsent() !== "granted") return;
  gtag("event", name, params);
}
