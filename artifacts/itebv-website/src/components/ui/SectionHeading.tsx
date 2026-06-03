import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

/** Konsistente, links-bündige redaktionelle Section-Überschrift. */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const titleColor = tone === "dark" ? "text-white" : "text-ink";
  const introColor = tone === "dark" ? "text-white/65" : "text-text-light";

  return (
    <Reveal
      className={`${isCenter ? "mx-auto text-center" : ""} max-w-2xl ${className}`.trim()}
    >
      <p className={`eyebrow ${isCenter ? "justify-center" : ""}`}>{eyebrow}</p>
      <h2
        className={`display mt-5 text-3xl md:text-4xl lg:text-[2.9rem] ${titleColor}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed ${introColor}`}>{intro}</p>
      )}
    </Reveal>
  );
}
