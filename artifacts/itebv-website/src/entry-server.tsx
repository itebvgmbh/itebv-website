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
  lastmod?: string;
};

export function getPrerenderManifest(): {
  siteUrl: string;
  routes: PrerenderRoute[];
} {
  const staticRoutes: PrerenderRoute[] = Object.entries(pageSeo).map(
    ([path, meta]) => ({
      path,
      title: meta.title,
      description: meta.description,
    }),
  );

  const blogRoutes: PrerenderRoute[] = getAllPosts().map((p) => ({
    path: `/blog/${p.slug}`,
    title: `${p.title} | ITEBV`,
    description: p.excerpt,
    lastmod: p.date,
  }));

  return {
    siteUrl: siteConfig.siteUrl,
    routes: [...staticRoutes, ...blogRoutes],
  };
}
