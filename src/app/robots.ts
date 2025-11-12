import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api"]
      },
      {
        userAgent: ["Googlebot", "Bingbot"],
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
        crawlDelay: 0
      }
    ],
    sitemap: [`${siteConfig.url}/sitemap.xml`],
    host: siteConfig.url
  };
}
