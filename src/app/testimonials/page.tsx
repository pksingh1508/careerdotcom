import { CommonContact } from "@/components/sections/CommonContact";
import { AllTestimonials } from "@/components/testimonials/AllTestimonials";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Client Testimonials",
  description:
    "Read EU Career Serwis client testimonials featuring successful immigration journeys and employer partnerships.",
  canonicalPath: "/testimonials"
});

export default function TestimonialsPage() {
  return (
    <div>
      <CommonContact />
      <AllTestimonials />
    </div>
  );
}
