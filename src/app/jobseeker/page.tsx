import { CommonContact } from "@/components/sections/CommonContact";
import { GovernmentLinks } from "@/components/sections/GovernmentLinks";
import { JobseekerContent } from "@/components/jobseeker/JobseekerContent";
import { RecentTestimonials } from "@/components/sections/RecentTestimonials";
import { RecentBlog } from "@/components/sections/RecentBlog";
import { NewsSection } from "@/components/immigration_faq/NewsSection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Work in Europe - Recruitment, Work Visa, and Job Placement Support",
  description:
    "Explore EU Career Serwis job openings across logistics, construction, hospitality, and seasonal work with visa-ready support.",
  canonicalPath: "/jobseeker"
});

export default function JobseekerPage() {
  return (
    <div className="min-h-screen">
      <CommonContact />
      {/* some custom jobseeker page content */}
      <JobseekerContent />
      <RecentTestimonials />
      <RecentBlog />
      <NewsSection />
      <GovernmentLinks />
    </div>
  );
}
