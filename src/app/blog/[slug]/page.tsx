import { BlogArticleClient } from "./ClientPage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  return <BlogArticleClient slug={slug} />;
}
