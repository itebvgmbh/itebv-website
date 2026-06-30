import type { ReactNode } from "react";

// Schlanker Markdown-Renderer für unser eigenes Beitragsformat.
// Unterstützt: Überschriften (#, ##, ###), Absätze, **fett**, *kursiv*,
// [Link](url), Aufzählungen (- / *), Zitate (>) und horizontale Linien (---).
// Bewusst ohne externe Abhängigkeit – der volle CommonMark-Parser kommt erst
// mit der späteren Content-Pipeline (react-markdown).

function parseInline(text: string, keyBase: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));

    if (match[1] !== undefined) {
      const href = match[2];
      const external = /^https?:\/\//.test(href);
      nodes.push(
        <a
          key={`${keyBase}-a-${i}`}
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {match[1]}
        </a>,
      );
    } else if (match[3] !== undefined) {
      nodes.push(<strong key={`${keyBase}-b-${i}`}>{match[3]}</strong>);
    } else if (match[4] !== undefined) {
      nodes.push(<em key={`${keyBase}-i-${i}`}>{match[4]}</em>);
    }

    last = regex.lastIndex;
    i++;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

const isHeading = (l: string) => /^#{1,3}\s+/.test(l);
const isRule = (l: string) => /^(-{3,}|\*{3,})$/.test(l.trim());
const isListItem = (l: string) => /^\s*[-*]\s+/.test(l);
const isQuote = (l: string) => /^>\s?/.test(l);

export default function Markdown({
  content,
  className = "",
}: {
  content: string;
  className?: string;
}) {
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") {
      i++;
      continue;
    }

    if (isRule(line)) {
      blocks.push(<hr key={key++} />);
      i++;
      continue;
    }

    const heading = /^(#{1,3})\s+(.*)$/.exec(line);
    if (heading) {
      const level = heading[1].length;
      const inner = parseInline(heading[2].trim(), `h-${key}`);
      if (level === 1) blocks.push(<h1 key={key++}>{inner}</h1>);
      else if (level === 2) blocks.push(<h2 key={key++}>{inner}</h2>);
      else blocks.push(<h3 key={key++}>{inner}</h3>);
      i++;
      continue;
    }

    if (isListItem(line)) {
      const items: ReactNode[] = [];
      while (i < lines.length && isListItem(lines[i])) {
        const itemText = lines[i].replace(/^\s*[-*]\s+/, "");
        items.push(
          <li key={items.length}>
            {parseInline(itemText, `li-${key}-${items.length}`)}
          </li>,
        );
        i++;
      }
      blocks.push(<ul key={key++}>{items}</ul>);
      continue;
    }

    if (isQuote(line)) {
      const quote: string[] = [];
      while (i < lines.length && isQuote(lines[i])) {
        quote.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      blocks.push(
        <blockquote key={key++}>
          {parseInline(quote.join(" "), `bq-${key}`)}
        </blockquote>,
      );
      continue;
    }

    const para: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !isHeading(lines[i]) &&
      !isRule(lines[i]) &&
      !isListItem(lines[i]) &&
      !isQuote(lines[i])
    ) {
      para.push(lines[i]);
      i++;
    }
    blocks.push(<p key={key++}>{parseInline(para.join(" "), `p-${key}`)}</p>);
  }

  return <div className={className}>{blocks}</div>;
}
