import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex items-center justify-center min-h-[60vh]"
    >
      <Loader2
        size={32}
        className="animate-spin text-primary"
        aria-hidden="true"
      />
      <span className="sr-only">Inhalt wird geladen…</span>
    </div>
  );
}
