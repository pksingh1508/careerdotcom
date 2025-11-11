import { AllTestimonials } from "@/components/testimonials/AllTestimonials";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Success Stories",
  description:
    "Discover how EU Career Serwis candidates secured European jobs and work permits through our recruitment support.",
  canonicalPath: "/success-stories"
});

export default function SuccessStoriesPage() {
  return <AllTestimonials />;
}
