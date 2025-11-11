import { CommonContact } from "@/components/sections/CommonContact";
import { WorkContent } from "@/components/work/WorkContent";

export default async function WorkPage() {
  return (
    <div className="min-h-screen">
      <CommonContact />
      <WorkContent />
    </div>
  );
}
