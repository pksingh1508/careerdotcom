import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { fetchSlugs } from "@/lib/strapi";

async function getSlugs(collection: string): Promise<string[]> {
  const token = process.env.STRAPI_ACCESS_TOKEN;
  if (!token) {
    console.warn(`Missing STRAPI_ACCESS_TOKEN for ${collection} slugs`);
    return [];
  }

  try {
    return await fetchSlugs(token, collection, "en");
  } catch (error) {
    console.error(`Failed to fetch ${collection} slugs for sitemap`, error);
    return [];
  }
}

export const revalidate = 21600; // 6 hours

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;
  const now = new Date();
  const sanitizeSlugs = (slugs: string[]) =>
    Array.from(
      new Set(
        slugs
          .filter((slug) => typeof slug === "string")
          .map((slug) => slug.trim())
          .filter(Boolean)
      )
    );

  const staticRoutes = [
    { path: "/", priority: 1, frequency: "daily" as const },
    { path: "/jobseeker", priority: 0.9, frequency: "weekly" as const },
    { path: "/employer", priority: 0.9, frequency: "weekly" as const },
    { path: "/work", priority: 0.8, frequency: "weekly" as const },
    { path: "/work-permit", priority: 0.8, frequency: "weekly" as const },
    { path: "/visa-stamp", priority: 0.7, frequency: "monthly" as const },
    { path: "/immigration-news", priority: 0.8, frequency: "daily" as const },
    { path: "/blog", priority: 0.8, frequency: "daily" as const },
    { path: "/recruiter", priority: 0.7, frequency: "monthly" as const },
    { path: "/success-stories", priority: 0.7, frequency: "monthly" as const },
    { path: "/testimonials", priority: 0.7, frequency: "monthly" as const },
    { path: "/migrate", priority: 0.7, frequency: "monthly" as const },
    { path: "/company-certificate", priority: 0.6, frequency: "yearly" as const },
    { path: "/contact", priority: 0.8, frequency: "monthly" as const },
    { path: "/privacy-policy", priority: 0.5, frequency: "yearly" as const },
    { path: "/terms-conditions", priority: 0.5, frequency: "yearly" as const },
    { path: "/refund-policy", priority: 0.5, frequency: "yearly" as const },
    { path: "/antiFraud-policy", priority: 0.5, frequency: "yearly" as const }
  ].map((route) => ({
    url: route.path === "/" ? baseUrl : `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.frequency,
    priority: route.priority
  }));

  const [rawBlogSlugs, rawNewsSlugs] = await Promise.all([
    getSlugs("blogs"),
    getSlugs("khabars")
  ]);
  const blogSlugs = sanitizeSlugs(rawBlogSlugs);
  const newsSlugs = sanitizeSlugs(rawNewsSlugs);

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7
  }));

  const newsRoutes = newsSlugs.map((slug) => ({
    url: `${baseUrl}/immigration-news/${slug}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...blogRoutes, ...newsRoutes];
}
