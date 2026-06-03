import { useState } from "react";
import { siteConfig } from "@/lib/config";
import { Send, Mail, Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "",
  });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      setStatus("error");
      setErrorMsg("Bitte stimmen Sie der Verarbeitung Ihrer Daten zu.");
      return;
    }
    if (formData.website) {
      setStatus("success");
      return;
    }
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Fehler beim Senden");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "", website: "" });
      setConsent(false);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es per E-Mail."
      );
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-line bg-bg px-4 py-3 text-ink placeholder:text-muted/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <section id="kontakt" className="section-padding bg-paper border-t border-line">
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Links: Text + Direktkontakt */}
          <div>
            <p className="eyebrow">Kontakt</p>
            <h2 className="display mt-5 text-3xl md:text-4xl lg:text-[2.9rem] text-ink">
              Kostenloses 20-Minuten-Erstgespräch
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-light">
              Sie erzählen mir, was Sie beschäftigt. Ich sage Ihnen ehrlich, ob
              und wie ich helfen kann. Kein Verkaufsgespräch, keine
              Verpflichtung.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Antwort in der Regel innerhalb eines Werktags",
                "Per Video-Call, Telefon oder in Berlin vor Ort",
                "Ehrliche Einschätzung – auch wenn ich nicht der Richtige bin",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-text-light"
                >
                  <CheckCircle
                    size={18}
                    className="mt-0.5 shrink-0 text-primary"
                    strokeWidth={1.5}
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-px border-t border-line">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 border-b border-line py-4 text-ink transition-colors hover:text-primary"
              >
                <Mail size={18} className="shrink-0 text-primary" strokeWidth={1.5} />
                <span>{siteConfig.email}</span>
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 border-b border-line py-4 text-ink transition-colors hover:text-primary"
              >
                <Phone size={18} className="shrink-0 text-primary" strokeWidth={1.5} />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              <div className="flex items-start gap-4 border-b border-line py-4 text-text-light">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary" strokeWidth={1.5} />
                <address className="not-italic">
                  {siteConfig.companyName}
                  <br />
                  {siteConfig.street}, {siteConfig.zip} {siteConfig.city}
                </address>
              </div>
            </div>
          </div>

          {/* Rechts: Formular */}
          <div>
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-line bg-bg p-10 text-center">
                <CheckCircle size={48} className="mb-5 text-primary" strokeWidth={1.5} />
                <h3 className="font-display text-2xl font-semibold text-ink">
                  Vielen Dank für Ihre Nachricht!
                </h3>
                <p className="mt-3 text-text-light">
                  Ich melde mich in der Regel innerhalb eines Werktags bei Ihnen.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="link-arrow mt-6 text-primary"
                >
                  Weitere Nachricht senden
                  <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative space-y-5 rounded-2xl border border-line bg-bg p-7 md:p-9"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ihr Name"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ihre@email.de"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    Telefon{" "}
                    <span className="font-normal text-muted">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+49 ..."
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    Wie kann ich Ihnen helfen? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Erzählen Sie mir kurz, was Sie beschäftigt – ich melde mich bei Ihnen."
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                {/* Honeypot */}
                <div
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-px w-px overflow-hidden"
                >
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="mt-1 size-4 rounded border-line text-primary focus:ring-primary/30"
                  />
                  <label
                    htmlFor="consent"
                    className="text-xs leading-relaxed text-text-light"
                  >
                    Ich habe die{" "}
                    <a href="/datenschutz" className="underline hover:text-primary">
                      Datenschutzerklärung
                    </a>{" "}
                    gelesen und stimme der Verarbeitung meiner Daten zur
                    Bearbeitung dieser Anfrage zu. Die Einwilligung kann jederzeit
                    per E-Mail an {siteConfig.email} widerrufen werden. *
                  </label>
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-600">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending" || !consent}
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-medium text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? (
                    "Wird gesendet …"
                  ) : (
                    <>
                      Nachricht senden
                      <Send
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
