# ITEBV – Content-Feedback (offene Punkte)

Gesammeltes Feedback des Inhabers zur Überarbeitung. Status: offen = noch nicht umgesetzt.

## Offen

### Trützschler-Logo fehlt (Asset benötigt)
- **Wunsch:** Trützschler-Logo bei den Beratungs-/Kundenreferenzen ergänzen (Karte „10+ Jahre IT-Beratung" bzw. CustomerLogos-Band).
- **Blocker:** keine Logodatei vorhanden (`public/images/` hat nur Linde, PSI, KROENERT, Rissel, Speinshart). → Inhaber muss `truetzschler.png/.svg` liefern, dann ergänze ich es analog zu den anderen.

## Umgesetzt

### 3. Referenzen: Logo größer/lesbar ✓
- Logo-Styling von `h-7 w-24 grayscale opacity-55` → **`h-11 w-32 md:h-12 md:w-40 opacity-90`** (Graustufe entfernt). Gilt für alle Referenz-Logos (Rissel, Speinshart).

### 1. Hero: „Ehemalige Mandate" umformuliert ✓
- Stat-Caption „Ehemalige Mandate" → **„Vertrauen von"** (Hero.tsx). Kunden nicht mehr als „ehemalig" gerahmt.

### 2. Hero: Stat „Erfahrung" aufgeladen ✓
- Wert „10+ Jahre" → **„10+ Jahre IT, Prozesse & KI"** (zahlt aufs KI-Versprechen ein). Vertiefung *worin* zusätzlich in der neuen Subline.

### 4. „KMU" ergänzt ✓ (Hero + Memory)
- Hero-Eyebrow „Mittelstand & KMU", Subline „Für Mittelstand und KMU …". In `brand-voice.md` und `seo-keywords.md` durchgezogen.
- **Rest-Rollout** über weitere Seiten (Services, Unterseiten) → Phase 3.
