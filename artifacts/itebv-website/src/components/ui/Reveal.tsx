import { useEffect, useRef, useState, type ReactNode, type ElementType, type CSSProperties } from "react";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  threshold?: number;
}

export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  threshold = 0.12,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const node = ref.current;
    if (!node) return;
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  const style: CSSProperties = delay ? { animationDelay: `${delay}ms` } : {};

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
