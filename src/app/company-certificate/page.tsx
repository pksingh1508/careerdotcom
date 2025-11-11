import { CertificateGallery } from "@/components/companyCertificate/CertificateGallery";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Company Certificates",
  description:
    "Verify EU Career Serwis compliance with Polish and EU regulations through our official company certificates.",
  canonicalPath: "/company-certificate"
});

export default function CompanyCertificatePage() {
  return <CertificateGallery />;
}
