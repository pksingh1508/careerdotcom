import { Refund_Policy } from "@/components/Terms_Conditions/Refund_Policy";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Refund Policy",
  description:
    "Review EU Career Serwis refund eligibility rules, timelines, and chargeback policies for every consulting engagement.",
  canonicalPath: "/refund-policy"
});

export default function RefundPolicyPage() {
  return <Refund_Policy />;
}
