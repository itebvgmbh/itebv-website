// Lädt die Blog-Beiträge aus den Markdown-Dateien unter src/content/blog/*.md.
// Frontmatter wird mit einem schlanken eigenen Parser gelesen (keine externe
// Abhängigkeit). Nur Beiträge mit status: "published" werden ausgeliefert.

export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO YYYY-MM-DD
  category: string;
  excerpt: string;
  status: string;
  heroVariant: "kompass" | "image";
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  sourceMonth: string;
  body: string;
  readingTimeMin: number;
};

const rawFiles = import.meta.glob("/src/content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parseFrontmatter(raw: string): {
  data: Record<string, string>;
  body: string;
} {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {}, body: raw };

  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line
      .slice(idx + 1)
      .trim()
      .replace(/^["'](.*)["']$/, "$1");
    data[key] = value;
  }
  return { data, body: match[2].trim() };
}

function readingTime(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

const posts: BlogPost[] = Object.entries(rawFiles)
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw);
    const slug =
      data.slug || (path.split("/").pop() ?? "").replace(/\.md$/, "");
    return {
      slug,
      title: data.title ?? "",
      date: data.date ?? "",
      category: data.category || "Blog",
      excerpt: data.excerpt ?? "",
      status: data.status || "draft",
      heroVariant: (data.heroVariant as "kompass" | "image") || "kompass",
      heroTitle: data.heroTitle || data.title || "",
      heroSubtitle: data.heroSubtitle ?? "",
      heroImage: data.heroImage ?? "",
      sourceMonth: data.sourceMonth ?? "",
      body,
      readingTimeMin: readingTime(body),
    } satisfies BlogPost;
  })
  .filter((p) => p.status === "published")
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

const MONTHS_DE = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

export function formatDateDE(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return iso;
  const month = MONTHS_DE[Number(m[2]) - 1] ?? "";
  return `${Number(m[3])}. ${month} ${m[1]}`;
}
