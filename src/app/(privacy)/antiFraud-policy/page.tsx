import AntiFraudPolicy from "@/components/Terms_Conditions/AntiFraudPolicy";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Anti-Fraud Policy",
  description:
    "Understand how EU Career Serwis prevents fraud, verifies employers, and safeguards every client engagement.",
  canonicalPath: "/antiFraud-policy"
});

export default function AntiFraudPolicyPage() {
  return <AntiFraudPolicy />;
}
