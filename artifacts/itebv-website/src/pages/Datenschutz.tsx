import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";
import { pageSeo } from "@/lib/seo";
import { CookieSettingsButton } from "@/components/consent/CookieBanner";
import {
  GA_COOKIE,
  GA_COOKIE_MONTHS,
  GA_EVENT_RETENTION_MONTHS,
  GA_SESSION_COOKIE,
} from "@/lib/analytics";

export default function DatenschutzPage() {
  useSeo({ ...pageSeo["/datenschutz"], path: "/datenschutz" });
  return (
    <div>
      <section className="bg-bg-alt border-b border-border">
        <div className="container-narrow pt-12 md:pt-16 pb-10 md:pb-14">
          <nav aria-label="Breadcrumb" className="text-sm text-text-light mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-primary transition-colors">Start</Link>
            <ChevronRight size={14} className="text-text-muted" />
            <span className="text-text-strong">Datenschutz</span>
          </nav>
          <h1 className="heading-h1">Datenschutz &amp; Disclaimer</h1>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="container-narrow">
          <div className="space-y-12 text-text-light max-w-prose">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-text-strong mb-4">
                Auskunfts- und Widerrufsrecht
              </h2>
              <p className="text-lg leading-relaxed">
                Sie haben jederzeit das Recht, sich unentgeltlich und unverzüglich
                über die zu Ihrer Person erhobenen Daten zu erkundigen. Ebenfalls
                können Sie Ihre Zustimmung zur Verwendung Ihrer angegebenen
                persönlichen Daten mit Wirkung für die Zukunft widerrufen. Hierfür
                wenden Sie sich bitte an den im Impressum angegebenen
                Diensteanbieter.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-text-strong mb-4">Datenschutz (allgemein)</h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Beim Zugriff auf unsere Webseite werden automatisch allgemeine
                  Informationen (sog. Server-Logfiles) erfasst. Diese beinhalten
                  u.a. den von Ihnen verwendeten Webbrowser sowie Ihr
                  Betriebssystem und Ihren Internet Service Provider. Diese Daten
                  lassen keinerlei Rückschlüsse auf Ihre Person zu und werden von
                  uns statistisch ausgewertet, um unseren Internetauftritt
                  technisch und inhaltlich zu verbessern. Das Erfassen dieser
                  Informationen ist notwendig, um den Inhalt der Webseite korrekt
                  ausliefern zu können.
                </p>
                <p>
                  Die Nutzung der Webseite ist grundsätzlich ohne Angabe
                  personenbezogener Daten möglich. Soweit personenbezogene Daten
                  (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben
                  werden, erfolgt dies, soweit möglich, stets auf freiwilliger
                  Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung
                  nicht an Dritte weitergegeben.
                </p>
                <p>
                  Sofern ein Vertragsverhältnis begründet, inhaltlich ausgestaltet
                  oder geändert werden soll oder Sie an uns eine Anfrage stellen,
                  erheben und verwenden wir personenbezogene Daten von Ihnen,
                  soweit dies zu diesem Zwecke erforderlich ist (Bestandsdaten).
                  Wir erheben, verarbeiten und nutzen personenbezogene Daten
                  soweit dies erforderlich ist, um Ihnen die Inanspruchnahme des
                  Webangebots zu ermöglichen (Nutzungsdaten). Sämtliche
                  personenbezogenen Daten werden nur solange gespeichert wie dies
                  für den genannten Zweck (Bearbeitung Ihrer Anfrage oder
                  Abwicklung eines Vertrags) erforderlich ist.
                </p>
                <p>
                  Wir weisen ausdrücklich darauf hin, dass die Datenübertragung im
                  Internet (z.B. bei der Kommunikation per E-Mail)
                  Sicherheitslücken aufweisen kann.
                </p>
                <p>
                  Die Nutzung von im Rahmen der Impressumspflicht veröffentlichten
                  Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
                  angeforderter Werbung und Informationsmaterialien wird hiermit
                  ausdrücklich untersagt.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-text-strong mb-4">KI-Chatbot</h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Diese Website nutzt einen KI-gestützten Chatbot zur Beantwortung
                  Ihrer Fragen rund um unser Leistungsangebot. Der Chatbot basiert
                  auf der Claude API von Anthropic, PBC (548 Market St, PMB 90375,
                  San Francisco, CA 94104, USA).
                </p>
                <p>
                  Wenn Sie den Chatbot nutzen, werden Ihre eingegebenen Nachrichten
                  an die Server von Anthropic übermittelt, um eine Antwort zu
                  generieren. Die Verarbeitung erfolgt auf Grundlage unseres
                  berechtigten Interesses an einer effizienten Kundenkommunikation
                  (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
                <p>
                  Anthropic verarbeitet die übermittelten Daten gemäß der eigenen
                  Datenschutzrichtlinie (
                  <a
                    href="https://www.anthropic.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://www.anthropic.com/privacy
                  </a>
                  ). Bei Nutzung der API werden Eingaben laut Anthropic nicht für
                  das Training von KI-Modellen verwendet.
                </p>
                <p>
                  Gesprächszusammenfassungen können per E-Mail an uns übermittelt
                  werden, um Ihre Anfrage weiterbearbeiten zu können. Die Nutzung
                  des Chatbots ist freiwillig.
                </p>
              </div>
            </section>

            <section id="analyse" className="scroll-mt-28">
              <h2 className="text-2xl md:text-3xl font-bold text-text-strong mb-4">
                Reichweitenmessung mit Google Analytics
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Nur wenn Sie im Cookie-Banner „Alle akzeptieren“ wählen, nutzt diese Website
                  Google Analytics 4, einen Dienst der Google Ireland Limited, Gordon House,
                  Barrow Street, Dublin 4, Irland. Ohne Ihre Einwilligung wird das Skript von
                  Google gar nicht erst geladen, und es gehen keine Daten an Google.
                  Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1
                  TDDDG).
                </p>
                <p>
                  Zweck ist zu verstehen, wie Besucher die Website finden und nutzen, um Inhalte
                  und Bedienung zu verbessern. Erfasst werden aufgerufene Seiten, Herkunft
                  (z. B. Suchmaschine oder verlinkende Website), Gerätetyp, Browser, ungefährer
                  Standort auf Ebene von Land oder Region, Verweildauer sowie zwei Ereignisse ohne
                  Angaben zur Person: das erfolgreiche Absenden des Kontaktformulars und ein Klick
                  auf E-Mail-Adresse oder Telefonnummer. Der Inhalt Ihrer Nachricht, Name,
                  E-Mail-Adresse oder Telefonnummer gehen nicht an Google. Google kürzt
                  IP-Adressen in der EU, bevor sie gespeichert werden. Werbefunktionen und
                  Google Signals sind abgeschaltet.
                </p>
                <p>
                  Dabei setzt Google die Cookies „{GA_COOKIE}“ und „{GA_SESSION_COOKIE}“ mit einer
                  Laufzeit von {GA_COOKIE_MONTHS} Monaten. Die Ereignisdaten werden nach{" "}
                  {GA_EVENT_RETENTION_MONTHS} Monaten automatisch gelöscht. Eine Übermittlung in
                  die USA ist möglich; Google LLC ist nach dem EU-US Data Privacy Framework
                  zertifiziert. Weitere Informationen:{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://policies.google.com/privacy
                  </a>
                  .
                </p>
                <p>
                  Ihre Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen
                  oder neu erteilen:{" "}
                  <CookieSettingsButton className="text-primary underline hover:text-primary-light" />
                  . Beim Widerruf löschen wir die Analytics-Cookies in Ihrem Browser.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-text-strong mb-6">Haftungsausschluss (Disclaimer)</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-text-strong mb-3">1. Haftung für Inhalte</h3>
                  <p className="text-lg leading-relaxed">
                    Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
                    Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                    verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
                    Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                    gespeicherte fremde Informationen zu überwachen.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-strong mb-3">2. Haftung für Links</h3>
                  <p className="text-lg leading-relaxed">
                    Diese Website enthält Links zu externen Webseiten Dritter, auf
                    deren Inhalte kein Einfluss genommen werden kann. Deshalb kann
                    für diese fremden Inhalte auch keine Gewähr übernommen werden.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-strong mb-3">3. Urheberrecht</h3>
                  <p className="text-lg leading-relaxed">
                    Die durch die Diensteanbieter, deren Mitarbeiter und beauftragte
                    Dritte erstellten Inhalte und Werke auf diesen Seiten
                    unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
                    Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb
                    der Grenzen des Urheberrechtes bedürfen der vorherigen
                    schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
