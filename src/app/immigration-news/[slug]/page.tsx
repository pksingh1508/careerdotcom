import type { Metadata } from "next";
import { NewsArticleClient } from "./ClientPage";
import { getSingleNews } from "@/lib/strapi";
import { buildMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const NEWS_COLLECTION = "khabars";
const CMS_BASE =
  process.env.NEXT_PUBLIC_CMS_URL?.replace(/\/$/, "") ||
  "https://api.eucareerserwis.pl";

const summarize = (content?: string) => {
  if (!content) return undefined;
  return content
    .replace(/[#>*_`[\]]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 155);
};

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const canonicalPath = `/immigration-news/${slug}`;
  const token = process.env.STRAPI_ACCESS_TOKEN;

  if (!token) {
    return buildMetadata({
      title: "Immigration News",
      description: "Read European immigration updates from EU Career Serwis.",
      canonicalPath
    });
  }

  try {
    const response = await getSingleNews(token, slug, "en", NEWS_COLLECTION);
    const newsEntry = response.data?.[0];
    const attributes = newsEntry?.attributes || {};
    const title = newsEntry?.title || slug;
    const description =
      summarize(newsEntry?.attributes?.contents || newsEntry?.contents) ||
      "Get the latest European immigration updates from EU Career Serwis.";
    const imagePath =
      newsEntry.attributes?.news_image?.data?.attributes?.url ||
      newsEntry.news_image?.url;
    const imageUrl = imagePath ? `${CMS_BASE}${imagePath}` : undefined;

    return buildMetadata({
      title,
      description,
      canonicalPath,
      image: imageUrl
    });
  } catch (error) {
    console.error(
      `Failed to generate immigration news metadata for slug: ${slug}`,
      error
    );
    return buildMetadata({
      title: "Immigration News",
      description: "Read European immigration updates from EU Career Serwis.",
      canonicalPath
    });
  }
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  return <NewsArticleClient slug={slug} />;
}
