import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { getFaqJsonLd } from "@/lib/structured-data";

export const faqItems = [
  { question: "Was kostet eine KI- oder IT-Beratung bei ITEBV?", answer: "Das Erstgespräch ist immer kostenlos und unverbindlich. Konkrete Beratungsprojekte rechne ich entweder nach Tagessatz, auf Festpreisbasis oder erfolgsorientiert ab – je nach Projekt. KI-Projekte starten typischerweise ab 5.000 €. Eine belastbare Einschätzung bekommen Sie nach dem Erstgespräch." },
  { question: "Wie lange dauert ein typisches Projekt?", answer: "Eine Prozessanalyse dauert in der Regel 2–4 Wochen. Ein erster produktiver KI-Use-Case (z. B. Chatbot, Voice Agent) ist oft in 4–8 Wochen live. Eine individuelle Geschäftssoftware planen wir in iterativen Releases, sodass Sie früh erste Funktionen produktiv nutzen können." },
  { question: "Wem gehört die entwickelte Software am Ende?", answer: "Ihnen. Software, die ich für Sie entwickle, gehört Ihnen vollständig – inklusive Quellcode, Dokumentation und Deployment. Keine Lizenzgebühren, keine Vendor-Lock-in-Klauseln. Sie können die Lösung jederzeit von einem anderen Dienstleister weiterführen lassen." },
  { question: "Für welche Branchen und Unternehmensgrößen arbeiten Sie?", answer: "Schwerpunkt sind mittelständische Unternehmen ab ca. 10 Mitarbeitenden – von Handwerk und Industrie über Gesundheitswesen bis zu wissensbasierten Dienstleistern. Größere Mittelständler und Konzern-Tochtergesellschaften begleite ich ebenfalls, oft als externer Sparringspartner für IT-Leitung oder Geschäftsführung." },
  { question: "Wie steht es um DSGVO und Datenschutz bei KI-Lösungen?", answer: "Datenschutz ist von Anfang an Teil der Lösungskonzeption. Wenn möglich, setze ich auf europäische Anbieter und Modelle, die in der EU gehostet werden. Bei sensiblen Daten besprechen wir Optionen wie On-Premise- oder Hybrid-Setups. Sie erhalten klare Antworten zu Datenverarbeitung, Auftragsverarbeitung und Datenfluss." },
  { question: "Können Lösungen in Deutschland gehostet werden?", answer: "Ja. Standardmäßig hoste ich Anwendungen bei deutschen oder EU-Cloud-Anbietern (z. B. Hetzner, IONOS, OVH, AWS Frankfurt). Wenn es Ihre Compliance erfordert, ist auch On-Premise oder ein deutscher Managed-Hoster möglich." },
  { question: "Sind Sie ein Einzelberater oder ein Team?", answer: "Sie haben mit mir als Ansprechpartner immer eine feste Bezugsperson – das ist der Kern meines Modells. Für Umsetzungsphasen arbeite ich bei Bedarf mit einem festen Netzwerk erfahrener Entwicklerinnen und Spezialisten zusammen, die ich persönlich steuere." },
  { question: "Was passiert, wenn KI für meinen Fall nicht sinnvoll ist?", answer: "Dann sage ich Ihnen das. Nicht jedes Problem braucht KI, und nicht jeder Prozess braucht eine eigene Software. Manchmal ist die richtige Antwort ein besseres Bestandstool, ein klarer Prozess oder eine kleine Automatisierung. Sie bezahlen mich dafür, die richtige Lösung zu finden – nicht die teuerste." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-bg">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 text-center">
          Häufige Fragen
        </h2>
        <p className="text-text-light text-center max-w-2xl mx-auto mb-12">
          Antworten auf die Fragen, die Unternehmer vor einem Beratungsprojekt
          am häufigsten stellen.
        </p>

        <ul className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <li
                key={item.question}
                className="border border-border rounded-xl bg-white overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5 text-left hover:bg-bg-alt transition-colors"
                >
                  <span className="text-base md:text-lg font-semibold text-text">{item.question}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1 text-text-light leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqJsonLd(faqItems)) }}
      />
    </section>
  );
}
