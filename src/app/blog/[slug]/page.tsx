import type { Metadata } from "next";
import { BlogArticleClient } from "./ClientPage";
import { getSingleBlogPost } from "@/lib/strapi";
import { buildMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const BLOG_COLLECTION = "blogs";
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
  const canonicalPath = `/blog/${slug}`;
  const token = process.env.STRAPI_ACCESS_TOKEN;

  if (!token) {
    return buildMetadata({
      title: "Blog Article",
      description: "Read the latest insights from EU Career Serwis.",
      canonicalPath
    });
  }

  try {
    const response = await getSingleBlogPost(
      token,
      slug,
      "en",
      BLOG_COLLECTION
    );
    const blogEntry = response.data?.[0];
    const attributes = blogEntry?.attributes || {};
    const title = blogEntry?.attributes?.title || blogEntry?.title || slug;
    const description =
      summarize(blogEntry?.attributes?.contents || blogEntry?.contents) ||
      "Read the latest insights from EU Career Serwis.";
    const imagePath =
      blogEntry?.attributes?.blog_image?.data?.attributes?.url ||
      blogEntry?.blog_image?.url;
    const imageUrl = imagePath ? `${CMS_BASE}${imagePath}` : undefined;

    return buildMetadata({
      title,
      description,
      canonicalPath,
      image: imageUrl
    });
  } catch (error) {
    console.error(`Failed to generate blog metadata for slug: ${slug}`, error);
    return buildMetadata({
      title: "Blog Article",
      description: "Read the latest insights from EU Career Serwis.",
      canonicalPath
    });
  }
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  return <BlogArticleClient slug={slug} />;
}
