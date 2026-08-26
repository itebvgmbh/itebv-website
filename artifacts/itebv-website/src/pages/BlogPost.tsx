import { Link } from "wouter";
import { ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";
import { siteConfig } from "@/lib/config";
import {
  getBreadcrumbJsonLd,
  getBlogPostingJsonLd,
} from "@/lib/structured-data";
import Reveal from "@/components/ui/Reveal";
import KompassCover from "@/components/blog/KompassCover";
import Markdown from "@/components/blog/Markdown";
import { getPostBySlug, getAllPosts, formatDateDE } from "@/lib/blog";

const proseClasses =
  "mt-10 prose prose-lg max-w-none " +
  "prose-headings:font-display prose-headings:tracking-tight prose-headings:text-ink " +
  "prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-12 prose-h2:mb-4 " +
  "prose-p:text-text-light prose-p:leading-relaxed " +
  "prose-strong:text-ink prose-strong:font-semibold " +
  "prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline " +
  "prose-li:text-text-light prose-hr:border-line prose-hr:my-10";

export default function BlogPostPage({ slug }: { slug: string }) {
  const post = getPostBySlug(slug);

  // Hook muss unbedingt unkonditional laufen (Rules of Hooks).
  useSeo(
    post
      ? {
          title: `${post.title} | ITEBV`,
          description: post.excerpt,
          path: `/blog/${post.slug}`,
          image: post.ogImage,
          imageAlt: post.title,
          type: "article" as const,
        }
      : {
          title: "Beitrag nicht gefunden | ITEBV",
          description: "Diese Seite existiert nicht.",
          path: `/blog/${slug}`,
          noindex: true,
        },
  );

  if (!post) {
    return (
      <section className="section-padding bg-bg">
        <div className="container-narrow text-center">
          <p className="eyebrow justify-center">404</p>
          <h1 className="display mt-5 text-3xl md:text-4xl text-ink">
            Beitrag nicht gefunden
          </h1>
          <p className="mt-4 text-text-light">
            Diesen Beitrag gibt es nicht (mehr).
          </p>
          <Link href="/blog" className="link-arrow mt-8 justify-center text-primary">
            <ArrowLeft size={16} />
            Zurück zum KI-Kompass
          </Link>
        </div>
      </section>
    );
  }

  const others = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const breadcrumb = getBreadcrumbJsonLd([
    { name: "Start", url: siteConfig.siteUrl },
    { name: "Blog", url: `${siteConfig.siteUrl}/blog` },
    { name: post.title, url: `${siteConfig.siteUrl}/blog/${post.slug}` },
  ]);
  const articleSchema = getBlogPostingJsonLd({
    title: post.title,
    description: post.excerpt,
    slug: post.slug,
    datePublished: post.date,
    image: post.ogImage,
  });

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article>
        <div className="container-wide pt-10 md:pt-14">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-1.5 text-sm text-text-light"
          >
            <Link href="/" className="transition-colors hover:text-primary">
              Start
            </Link>
            <ChevronRight size={14} className="text-text-muted" />
            <Link href="/blog" className="transition-colors hover:text-primary">
              Blog
            </Link>
            <ChevronRight size={14} className="text-text-muted" />
            <span className="text-text-strong">{post.heroTitle}</span>
          </nav>

          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-line shadow-[var(--shadow-lift)]">
              <KompassCover
                eyebrow={post.category}
                title={post.heroTitle}
                subtitle={post.heroSubtitle}
                className="aspect-[12/5] w-full"
              />
            </div>
          </Reveal>
        </div>

        <div className="container-narrow pt-10 md:pt-14">
          <Reveal>
            <p className="eyebrow">{post.category}</p>
            <h1 className="display mt-5 text-3xl md:text-4xl lg:text-[2.7rem] text-ink">
              {post.title}
            </h1>
            <p className="idx mt-5 text-xs uppercase tracking-[0.16em] text-text-muted">
              {formatDateDE(post.date)} · {post.readingTimeMin} Min. Lesezeit
            </p>
          </Reveal>

          <Reveal delay={80}>
            <Markdown content={post.body} className={proseClasses} />
          </Reveal>
        </div>

        <div className="container-narrow mt-16">
          <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#062F70_0%,#0057B7_60%,#2F76D6_100%)] px-8 py-12 text-white grain md:px-12 md:py-14">
            <h2 className="display text-2xl md:text-3xl">
              Klingt nach Ihrem Unternehmen?
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-white/80">
              Im kostenlosen 20-Minuten-Gespräch sage ich Ihnen ehrlich, ob und wo
              sich KI bei Ihnen lohnt – und in welcher Reihenfolge.
            </p>
            <a
              href="/#kontakt"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-medium text-ink transition-colors hover:bg-paper"
            >
              {siteConfig.primaryCtaLabel}
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {others.length > 0 && (
          <section className="section-padding">
            <div className="container-editorial">
              <p className="eyebrow">Weitere Ausgaben</p>
              <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
                {others.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group block"
                  >
                    <div className="overflow-hidden rounded-2xl border border-line shadow-[var(--shadow-card)]">
                      <KompassCover
                        eyebrow={p.category}
                        title={p.heroTitle}
                        subtitle={p.heroSubtitle}
                        className="aspect-[12/5] w-full transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-ink transition-colors group-hover:text-primary">
                      {p.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </div>
  );
}
