import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.companyName,
    short_name: "ITEBV",
    description: siteConfig.siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0056A4",
    icons: [
      {
        src: "/images/itebv-logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
