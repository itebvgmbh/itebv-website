type AuroraLayerProps = {
  variant?: "light" | "dark";
  className?: string;
};

/**
 * Dezent animierte Aurora-Lichtbänder als Hintergrund (rein dekorativ).
 * Bewegung respektiert prefers-reduced-motion (siehe index.css).
 */
export default function AuroraLayer({
  variant = "light",
  className = "",
}: AuroraLayerProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className={`aurora-layer ${variant === "dark" ? "aurora-dark" : ""}`} />
    </div>
  );
}
