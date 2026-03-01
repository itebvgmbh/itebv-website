"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/config";
import { Send, Mail, Phone, MapPin, CheckCircle, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Fehler beim Senden");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es per E-Mail."
      );
    }
  };

  return (
    <section id="kontakt" className="section-padding">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: Text + Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text leading-tight mb-6">
              Lassen Sie uns herausfinden, ob ich Ihnen helfen kann.
            </h2>
            <p className="text-lg text-text-light mb-10">
              Ein kurzes Gespräch, 20 Minuten, kostenlos, unverbindlich. Sie
              erzählen mir, was Sie beschäftigt. Ich sage Ihnen ehrlich, ob und
              wie ich helfen kann.
            </p>

            {/* Direct Contact */}
            <div className="space-y-4 mb-10">
              <h3 className="text-sm font-semibold text-text-light uppercase tracking-wider">
                Oder direkt erreichen
              </h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-text hover:text-primary transition-colors"
              >
                <Mail size={18} className="text-primary shrink-0" />
                <span>{siteConfig.email}</span>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 text-text hover:text-primary transition-colors"
              >
                <Phone size={18} className="text-primary shrink-0" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              <div className="flex items-start gap-3 text-text-light">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>
                  {siteConfig.companyName}
                  <br />
                  {siteConfig.street}
                  <br />
                  {siteConfig.zip} {siteConfig.city}
                </span>
              </div>
            </div>

            {/* Chatbot Hint */}
            <div className="flex items-start gap-3 p-4 bg-accent rounded-lg border border-primary/10">
              <MessageSquare size={20} className="text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-text">
                  Schnelle Frage? Probieren Sie den Chatbot.
                </p>
                <p className="text-sm text-text-light mt-1">
                  Unser KI-Assistent unten rechts beantwortet Fragen zu
                  Leistungen und Ablauf sofort.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-bg-alt rounded-2xl border border-border">
                <CheckCircle size={48} className="text-primary mb-4" />
                <h3 className="text-xl font-bold text-text mb-2">
                  Vielen Dank für Ihre Nachricht!
                </h3>
                <p className="text-text-light mb-6">
                  Ich melde mich in der Regel innerhalb eines Werktags bei
                  Ihnen.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm text-primary hover:text-primary-light underline transition-colors"
                >
                  Weitere Nachricht senden
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 p-8 bg-bg-alt rounded-2xl border border-border"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text mb-1.5"
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
                    className="w-full px-4 py-3 bg-white rounded-lg border border-border text-text placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text mb-1.5"
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
                    className="w-full px-4 py-3 bg-white rounded-lg border border-border text-text placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-text mb-1.5"
                  >
                    Telefon{" "}
                    <span className="text-text-light font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+49 ..."
                    className="w-full px-4 py-3 bg-white rounded-lg border border-border text-text placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text mb-1.5"
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
                    className="w-full px-4 py-3 bg-white rounded-lg border border-border text-text placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-600">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    "Wird gesendet..."
                  ) : (
                    <>
                      Nachricht senden
                      <Send size={18} />
                    </>
                  )}
                </button>

                <p className="text-xs text-text-light text-center">
                  Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage
                  verwendet.{" "}
                  <a href="/datenschutz" className="underline hover:text-primary">
                    Datenschutz
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
