import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";

export default function DatenschutzPage() {
  useSeo({
    title: "Datenschutz & Disclaimer | ITEBV GmbH",
    description:
      "Datenschutzerklärung und Disclaimer der ITEBV GmbH. Informationen zur Verarbeitung personenbezogener Daten auf itebv.de.",
    path: "/datenschutz",
  });
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
