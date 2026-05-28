import { useState, useRef, useEffect, useCallback } from "react";
import { MessageSquare, X, Send, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendLeadSummary = useCallback(async (msgs: Message[]) => {
    if (msgs.length < 4) return;
    try {
      await fetch("/api/chat/send-summary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: msgs }),
      });
    } catch {
      // silent
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    setHasInteracted(true);
    const userMessage: Message = { role: "user", content: trimmed };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) throw new Error("Chatbot nicht verfügbar");
      const data = (await response.json()) as { text?: string; error?: string };
      const assistantContent =
        data.error ||
        data.text ||
        "Entschuldigung, es ist ein Fehler aufgetreten.";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: assistantContent },
      ]);

      const finalMessages = [
        ...updatedMessages,
        { role: "assistant" as const, content: assistantContent },
      ];
      sendLeadSummary(finalMessages);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Entschuldigung, es ist ein Fehler aufgetreten. Bitte kontaktieren Sie uns direkt per E-Mail oder Telefon.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatMessage = (text: string) => {
    return text
      .replace(
        /\[Kontaktformular\]/g,
        `<a href="/#kontakt-formular" class="text-primary underline hover:text-primary-light">Kontaktformular</a>`
      )
      .replace(
        /\[Terminbuchung\]/g,
        `<a href="/#kontakt-formular" class="text-primary underline hover:text-primary-light">Kontaktformular</a>`
      );
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-28 right-4 md:bottom-6 md:right-6 z-50 flex items-center gap-2 px-4 py-3 bg-primary text-white rounded-full shadow-[var(--shadow-lift)] hover:bg-primary-light transition-all hover:-translate-y-0.5"
          aria-label="Chat öffnen"
        >
          <MessageSquare size={20} />
          <span className="text-sm font-medium hidden sm:inline">Fragen? Ich helfe.</span>
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-x-3 bottom-28 md:inset-x-auto md:left-auto md:right-6 md:bottom-6 z-50 w-auto max-w-[calc(100vw-1.5rem)] md:max-w-none md:w-[380px] h-[520px] max-h-[calc(100dvh-10rem)] md:max-h-[calc(100dvh-6rem)] bg-white rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden">
          <div className="flex items-center justify-between gap-2 px-4 py-3 bg-primary text-white rounded-t-2xl min-w-0">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <MessageSquare size={18} className="shrink-0" />
              <div className="min-w-0">
                <p className="text-sm font-semibold truncate">ITEBV Assistent</p>
                <p className="text-xs text-white/70 truncate">Fragen zum Angebot? Ich helfe gerne.</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="shrink-0 p-1 hover:bg-white/20 rounded transition-colors"
              aria-label="Chat schließen"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {!hasInteracted && messages.length === 0 && (
              <div className="bg-bg-alt rounded-lg rounded-tl-sm px-3 py-2.5 text-sm text-text max-w-[85%]">
                Guten Tag! Ich bin der digitale Assistent der ITEBV GmbH. Wie kann ich Ihnen
                weiterhelfen? Sie können mir z.B. Fragen zu unseren Leistungen stellen oder
                mir erzählen, welche Herausforderung Sie aktuell beschäftigt.
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-3 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-white rounded-tr-sm"
                      : "bg-bg-alt text-text rounded-tl-sm"
                  }`}
                  dangerouslySetInnerHTML={
                    msg.role === "assistant"
                      ? { __html: formatMessage(msg.content) }
                      : undefined
                  }
                >
                  {msg.role === "user" ? msg.content : undefined}
                </div>
              </div>
            ))}

            {isLoading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex justify-start">
                <div className="bg-bg-alt rounded-lg rounded-tl-sm px-3 py-2.5">
                  <Loader2 size={16} className="animate-spin text-text-light" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-3 py-3 border-t border-border min-w-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ihre Frage..."
              className="min-w-0 flex-1 px-3 py-2 text-base sm:text-sm bg-bg-alt rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="shrink-0 p-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Nachricht senden"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
