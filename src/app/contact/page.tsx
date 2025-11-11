import { ContactContainer } from "@/components/contact_us/ContactContainer";
import { LocationMap } from "@/components/contact_us/LocationMap";
import { GovernmentLinks } from "@/components/sections/GovernmentLinks";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact EU Career Serwis",
  description:
    "Contact EU Career Serwis for recruitment support, immigration guidance, or employer staffing solutions across Europe.",
  canonicalPath: "/contact"
});

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactContainer />
      <LocationMap />
      <GovernmentLinks />
    </div>
  );
}
