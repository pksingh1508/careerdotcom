import { CommonContact } from "@/components/sections/CommonContact";
import { WorkContent } from "@/components/work/WorkContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Work in Europe with EU Career Serwis",
  description:
    "Navigate European relocation, compliance, and placement services with EU Career Serwis work programs.",
  canonicalPath: "/work"
});

export default async function WorkPage() {
  return (
    <div className="min-h-screen">
      <CommonContact />
      <WorkContent />
    </div>
  );
}
