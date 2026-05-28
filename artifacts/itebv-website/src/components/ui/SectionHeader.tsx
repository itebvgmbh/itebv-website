import Reveal from "./Reveal";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignmentText = align === "center" ? "text-center" : "text-left";
  const alignmentBlock = align === "center" ? "mx-auto" : "";
  return (
    <Reveal
      className={`max-w-2xl ${alignmentBlock} ${alignmentText} mb-14 md:mb-16 ${className}`.trim()}
    >
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="heading-h2 mb-5">{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  );
}
