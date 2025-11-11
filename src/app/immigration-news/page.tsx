import { ImmigrationNewsSection } from "@/components/immigration_news/ImmigrationNewsSection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Immigration News & Policy Updates",
  description:
    "Stay updated with the latest European immigration news, policy shifts, and visa changes curated by EU Career Serwis.",
  canonicalPath: "/immigration-news"
});

export default async function ImmigrationNewsPage() {
  return (
    <div>
      <ImmigrationNewsSection />
    </div>
  );
}
