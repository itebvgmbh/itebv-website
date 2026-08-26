import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";
import { siteConfig } from "@/lib/config";
import { getBreadcrumbJsonLd } from "@/lib/structured-data";
import Reveal from "@/components/ui/Reveal";
import AuroraLayer from "@/components/ui/AuroraLayer";
import KompassCover from "@/components/blog/KompassCover";
import { getAllPosts, formatDateDE } from "@/lib/blog";
import { pageSeo } from "@/lib/seo";

export default function BlogPage() {
  useSeo({ ...pageSeo["/blog"], path: "/blog" });

  const posts = getAllPosts();
  const breadcrumb = getBreadcrumbJsonLd([
    { name: "Start", url: siteConfig.siteUrl },
    { name: "Blog", url: `${siteConfig.siteUrl}/blog` },
  ]);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <section className="relative w-full overflow-hidden -mt-16 md:-mt-20 bg-sky grain">
        <AuroraLayer />
        <div className="relative z-10 container-editorial pt-28 pb-14 md:pt-36 md:pb-20">
          <Reveal>
            <p className="eyebrow mb-6">Blog · KI-Kompass</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display max-w-3xl text-[2.4rem] leading-[1.05] sm:text-5xl md:text-6xl text-ink">
              KI-Entwicklungen, übersetzt für den Mittelstand.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-lg md:text-xl leading-relaxed text-text-light">
              Jeden Monat sortiere ich die KI-Nachrichten für Sie: Was ist für ein
              mittelständisches Unternehmen wirklich relevant – und was können Sie
              getrost ignorieren? Ehrlich, nüchtern, ohne Hype.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-paper">
        <div className="container-editorial">
          {posts.length === 0 ? (
            <p className="text-text-light">Noch keine Beiträge veröffentlicht.</p>
          ) : (
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
              {posts.map((post, i) => (
                <Reveal as="article" key={post.slug} delay={(i % 2) * 90}>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="overflow-hidden rounded-2xl border border-line shadow-[var(--shadow-card)]">
                      <KompassCover
                        eyebrow={post.category}
                        title={post.heroTitle}
                        subtitle={post.heroSubtitle}
                        className="aspect-[12/5] w-full transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="mt-5">
                      <p className="idx text-xs uppercase tracking-[0.16em] text-text-muted">
                        {formatDateDE(post.date)} · {post.readingTimeMin} Min. Lesezeit
                      </p>
                      <h2 className="mt-2 font-display text-xl md:text-2xl font-semibold leading-snug text-ink transition-colors group-hover:text-primary">
                        {post.title}
                      </h2>
                      <p className="mt-3 leading-relaxed text-text-light">
                        {post.excerpt}
                      </p>
                      <span className="link-arrow mt-4 text-primary">
                        Weiterlesen
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
