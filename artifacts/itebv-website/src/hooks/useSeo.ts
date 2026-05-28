import { useEffect } from "react";
import { siteConfig } from "@/lib/config";

type SeoOptions = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  image?: string;
};

function setMeta(
  selector: string,
  attr: "name" | "property",
  key: string,
  content: string,
) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSeo({ title, description, path, noindex, image }: SeoOptions) {
  useEffect(() => {
    const url = `${siteConfig.siteUrl}${path}`;
    const ogImage = image
      ? (image.startsWith("http") ? image : `${siteConfig.siteUrl}${image}`)
      : `${siteConfig.siteUrl}${siteConfig.ogImage}`;

    document.title = title;

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta(
      'meta[name="robots"]',
      "name",
      "robots",
      noindex
        ? "noindex, nofollow"
        : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    );

    setLink("canonical", url);

    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
      description,
    );
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta('meta[property="og:image"]', "property", "og:image", ogImage);

    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      description,
    );
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", ogImage);
  }, [title, description, path, noindex, image]);
}
