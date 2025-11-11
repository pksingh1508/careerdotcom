import { CommonContact } from "@/components/sections/CommonContact";
import { GovernmentLinks } from "@/components/sections/GovernmentLinks";
import { RecruiterContent } from "@/components/recruiter/RecruiterContent";
import { RecentTestimonials } from "@/components/sections/RecentTestimonials";
import { RecentBlog } from "@/components/sections/RecentBlog";
import { NewsSection } from "@/components/immigration_faq/NewsSection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Recruiter Solutions in Europe",
  description:
    "Partner with EU Career Serwis for recruiter outsourcing, vetted candidates, and scalable staffing pipelines.",
  canonicalPath: "/recruiter"
});

export default function RecruiterPage() {
  return (
    <div className="min-h-screen">
      <CommonContact />
      {/* custom recruiter page content */}
      <RecruiterContent />
      <RecentTestimonials />
      <RecentBlog />
      <NewsSection />
      <GovernmentLinks />
    </div>
  );
}
