// Server-Entry für das Build-Time-Prerendering (scripts/prerender.mjs).
// Wird NUR im SSR-Build verwendet, nie im Client. Importiert App (nicht main.tsx).
import { renderToString } from "react-dom/server";
import App from "./App";
import { pageSeo } from "./lib/seo";
import { getAllPosts } from "./lib/blog";
import { siteConfig } from "./lib/config";

export function render(path: string): string {
  return renderToString(<App ssrPath={path} />);
}

export type PrerenderRoute = {
  path: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  lastmod?: string;
  isArticle?: boolean;
};

export function getPrerenderManifest(): {
  siteUrl: string;
  routes: PrerenderRoute[];
} {
  // Spread statt Feld-für-Feld: ein neues Feld in PageSeo, das PrerenderRoute
  // nicht kennt, wird so zum Compile-Fehler statt still verloren zu gehen.
  const staticRoutes: PrerenderRoute[] = Object.entries(pageSeo).map(
    ([path, meta]): PrerenderRoute => ({ path, ...meta }),
  );

  const blogRoutes: PrerenderRoute[] = getAllPosts().map((p) => ({
    path: `/blog/${p.slug}`,
    title: `${p.title} | ITEBV`,
    description: p.excerpt,
    image: p.ogImage,
    imageAlt: p.title,
    lastmod: p.date,
    isArticle: true,
  }));

  return {
    siteUrl: siteConfig.siteUrl,
    routes: [...staticRoutes, ...blogRoutes],
  };
}
