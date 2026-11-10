// Reichweitenmessung mit Google Analytics 4 – was gemessen wird.
//
// Grundsätze (Entscheidung Stefan Tittmann, 10.11.2026, gleiche Linie wie Ordulo/Dranzeit):
//   - Nur die eigene Property „ITEBV“ (563475186). Kein Google-Ads-Tag, kein Meta-Pixel,
//     kein Google Signals, keine Werbefunktionen.
//   - gtag.js lädt erst NACH „Alle akzeptieren“ (Consent Mode v2, alle vier Signale vorher
//     „denied“). Ohne Einwilligung geht nichts an Google, auch keine cookielosen Pings.
//   - Ereignisse ohne Angaben zur Person: `generate_lead` nach einer gesendeten
//     Kontaktanfrage, `contact_click` bei Klick auf E-Mail-Adresse oder Telefonnummer.
//
// Wer hier etwas ändert (Ereignis, Frist, Dienst), ändert den Abschnitt „Reichweitenmessung“
// in src/pages/Datenschutz.tsx mit – die Texte dort lesen ihre Werte von hier.

/** Mess-ID der GA4-Property „ITEBV“. */
export const GA_MEASUREMENT_ID = "G-GVN9E6SXL1";

/** Cookies, die gtag.js mit Einwilligung setzt. */
export const GA_COOKIE = "_ga";
export const GA_SESSION_COOKIE = `_ga_${GA_MEASUREMENT_ID.slice(2)}`;

/** Aufbewahrung der Ereignisdaten in der Property (Verwaltung → Datenerfassung und
    -änderung → Datenaufbewahrung). Muss dort so stehen. */
export const GA_EVENT_RETENTION_MONTHS = 14;
/** Laufzeit der Cookies _ga und _ga_<Kennung> (Vorgabe von gtag.js: 2 Jahre). */
export const GA_COOKIE_MONTHS = 24;

/** Schlüssel der gespeicherten Wahl im localStorage. */
export const CONSENT_STORAGE_KEY = "itebv-einwilligung-analyse";

export type ConsentChoice = "granted" | "denied";

/** Gespeicherte Wahl – alles Unbekannte zählt als „noch nicht gefragt“, nie als Zustimmung. */
export function parseConsent(value: string | null | undefined): ConsentChoice | null {
  return value === "granted" || value === "denied" ? value : null;
}
