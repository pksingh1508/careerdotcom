import TermsAndConditions from "@/components/Terms_Conditions/TermsAndConditions";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description:
    "Read the EU Career Serwis terms of use covering service scope, payments, liabilities, and governing law.",
  canonicalPath: "/terms-conditions"
});

export default function TermsAndConditionsPage() {
  return <TermsAndConditions />;
}
