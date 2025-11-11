import { BlogsSection } from "@/components/blogs/BlogsSection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "EU Career Serwis Blog",
  description:
    "Read EU Career Serwis insights on European recruitment trends, visa best practices, and success stories.",
  canonicalPath: "/blog"
});

export default async function BlogPage() {
  return (
    <div>
      <BlogsSection />
    </div>
  );
}
