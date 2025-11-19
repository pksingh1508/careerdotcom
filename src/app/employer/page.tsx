import { CommonContact } from "@/components/sections/CommonContact";
import { GovernmentLinks } from "@/components/sections/GovernmentLinks";
import { EmployerContent } from "@/components/employer/EmployerContent";
import { RecentTestimonials } from "@/components/sections/RecentTestimonials";
import { RecentBlog } from "@/components/sections/RecentBlog";
import { NewsSection } from "@/components/immigration_faq/NewsSection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Hire Skilled Worker in Europe with Recruitment Solution",
  description:
    "EU Career Serwis helps European employers source, onboard, and retain skilled workers with verified compliance and legal support.",
  canonicalPath: "/employer"
});

export default async function EmployerPage() {
  return (
    <div className="min-h-screen">
      <CommonContact />
      {/* some employer realted page content */}
      <EmployerContent />
      <RecentTestimonials />
      <RecentBlog />
      <NewsSection />
      <GovernmentLinks />
    </div>
  );
}
