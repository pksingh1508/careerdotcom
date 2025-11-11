import Privacy_Policy from "@/components/Terms_Conditions/Privacy_Policy";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Learn how EU Career Serwis protects personal information, complies with GDPR, and handles data across all recruitment services.",
  canonicalPath: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return <Privacy_Policy />;
}
