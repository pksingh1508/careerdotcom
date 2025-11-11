import { CommonContact } from "@/components/sections/CommonContact";
import { GovernmentLinks } from "@/components/sections/GovernmentLinks";
import { RecentTestimonials } from "@/components/sections/RecentTestimonials";
import { RecentBlog } from "@/components/sections/RecentBlog";
import { NewsSection } from "@/components/immigration_faq/NewsSection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Migrate to Europe with EU Career Serwis",
  description:
    "Plan your move abroad with EU Career Serwis immigration guidance, documentation support, and employer connections.",
  canonicalPath: "/migrate"
});

export default async function MigratePage() {
  return (
    <div className="min-h-screen">
      <CommonContact />
      <RecentTestimonials />
      <RecentBlog />
      <NewsSection />
      <GovernmentLinks />
    </div>
  );
}
