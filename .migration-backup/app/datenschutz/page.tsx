import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz & Disclaimer",
};

export default function DatenschutzPage() {
  return (
    <div>
      <section className="section-padding bg-bg-alt">
        <div className="container-narrow">
          <h1 className="text-4xl md:text-5xl font-bold text-text leading-tight mb-12">
            Datenschutz & Disclaimer
          </h1>

          <div className="space-y-12 text-text-light">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-text mb-4">
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
              <h2 className="text-2xl md:text-3xl font-bold text-text mb-4">
                Datenschutz (allgemein)
              </h2>
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
                  Abwicklung eines Vertrags) erforderlich ist. Hierbei werden
                  steuer- und handelsrechtliche Aufbewahrungsfristen von uns
                  berücksichtigt. Auf Anordnung der zuständigen Stellen müssen wir
                  im Einzelfall Auskunft über diese Daten (Bestandsdaten) erteilen,
                  soweit dies für Zwecke der Strafverfolgung, zur Gefahrenabwehr,
                  zur Erfüllung der gesetzlichen Aufgaben der
                  Verfassungsschutzbehörden oder des Militärischen Abschirmdienstes
                  oder zur Durchsetzung der Rechte am geistigen Eigentum
                  erforderlich ist.
                </p>
                <p>
                  Wir weisen ausdrücklich darauf hin, dass die Datenübertragung im
                  Internet (z.B. bei der Kommunikation per E-Mail)
                  Sicherheitslücken aufweisen kann. Vor dem Zugriff auf Daten kann
                  nicht lückenlos geschützt werden.
                </p>
                <p>
                  Die Nutzung von im Rahmen der Impressumspflicht veröffentlichten
                  Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
                  angeforderter Werbung und Informationsmaterialien wird hiermit
                  ausdrücklich untersagt. Ausgenommen hiervon sind bestehende
                  Geschäftsbeziehungen bzw. es liegt Ihnen eine entsprechende
                  Einwilligung von uns vor.
                </p>
                <p>
                  Die Anbieter und alle auf dieser Website genannten Dritten
                  behalten sich ausdrücklich rechtliche Schritte im Falle der
                  unverlangten Zusendung von Werbeinformationen vor. Gleiches gilt
                  für die kommerzielle Verwendung und Weitergabe der Daten.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-text mb-4">
                KI-Chatbot
              </h2>
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
                  des Chatbots ist freiwillig. Sie können uns alternativ per
                  E-Mail oder Telefon kontaktieren.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-text mb-4">
                Google Analytics
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                <strong className="text-text">
                  Hinweis: Google Analytics ist auf dieser Version der Website
                  möglicherweise nicht aktiv.
                </strong>
              </p>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Diese Website kann Google Analytics verwenden, einen
                  Webanalysedienst der Google Inc. („Google"), 1600 Amphitheatre
                  Parkway, Mountain View, CA 94043, USA. Google Analytics
                  verwendet sog. „Cookies" (Textdateien), die auf Ihrem Computer
                  gespeichert werden und die eine Analyse der Benutzung der
                  Website durch Sie ermöglichen. Die durch das Cookie erzeugten
                  Informationen über Ihre Benutzung dieser Website werden in der
                  Regel an einen Server von Google in den USA übertragen und dort
                  gespeichert. Im Falle der Aktivierung der IP-Anonymisierung auf
                  dieser Website, wird Ihre IP-Adresse von Google jedoch innerhalb
                  von Mitgliedstaaten der Europäischen Union oder in anderen
                  Vertragsstaaten des Abkommens über den Europäischen
                  Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die
                  vollständige IP-Adresse an einen Server von Google in den USA
                  übertragen und dort anonymisiert.
                </p>
                <p>
                  Sie können die Speicherung der Cookies durch eine entsprechende
                  Einstellung Ihrer Browser-Software verhindern; wir weisen Sie
                  jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht
                  sämtliche Funktionen dieser Website vollumfänglich nutzen
                  können. Sie können darüber hinaus die Erfassung der durch das
                  Cookie erzeugten und auf Ihre Nutzung der Website bezogenen
                  Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung
                  dieser Daten durch Google verhindern, indem sie das unter dem
                  folgenden Link verfügbare Browser-Add-on herunterladen und
                  installieren:{" "}
                  <a
                    href="http://tools.google.com/dlpage/gaoptout?hl=de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    http://tools.google.com/dlpage/gaoptout?hl=de
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">
                Haftungsausschluss (Disclaimer)
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-text mb-3">
                    1. Haftung für Inhalte
                  </h3>
                  <p className="text-lg leading-relaxed">
                    Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
                    Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                    verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
                    Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                    gespeicherte fremde Informationen zu überwachen oder nach
                    Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                    hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                    Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
                    hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst
                    ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                    möglich. Bei Bekanntwerden von entsprechenden
                    Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-text mb-3">
                    2. Haftung für Links
                  </h3>
                  <p className="text-lg leading-relaxed">
                    Diese Website enthält Links zu externen Webseiten Dritter, auf
                    deren Inhalte kein Einfluss genommen werden kann. Deshalb kann
                    für diese fremden Inhalte auch keine Gewähr übernommen werden.
                    Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                    Anbieter oder Betreiber der Seiten verantwortlich. Die
                    verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                    mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
                    zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
                    inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
                    konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
                    Bei Bekanntwerden von Rechtsverletzungen werden derartige
                    Links umgehend entfernt.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-text mb-3">
                    3. Urheberrecht
                  </h3>
                  <p className="text-lg leading-relaxed">
                    Die durch die Diensteanbieter, deren Mitarbeiter und beauftragte
                    Dritte erstellten Inhalte und Werke auf diesen Seiten
                    unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
                    Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb
                    der Grenzen des Urheberrechtes bedürfen der vorherigen
                    schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    Downloads und Kopien dieser Seite sind nur für den privaten,
                    nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
                    dieser Seite nicht vom Betreiber erstellt wurden, werden die
                    Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
                    Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                    Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                    entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                    werden derartige Inhalte umgehend entfernt.
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
