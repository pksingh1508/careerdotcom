import { AllPermitImage } from "@/components/work_permit/AllPermitImage";
import { getAllPermitImages } from "@/lib/strapi";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "European Work Permit Support",
  description:
    "View EU Career Serwis work permit approvals and learn how we manage documentation, compliance, and processing timelines.",
  canonicalPath: "/work-permit"
});

async function getInitialPermits() {
  const token = process.env.STRAPI_ACCESS_TOKEN;
  if (!token) {
    return { permits: [], meta: undefined };
  }

  try {
    const response = await getAllPermitImages(token, 1, 20, "work-permits");
    const pagination = response.meta?.pagination;
    const meta = pagination
      ? {
          currentPage: pagination.page ?? 1,
          totalPages: pagination.pageCount ?? 0,
          hasNextPage: (pagination.page ?? 1) < (pagination.pageCount ?? 0)
        }
      : undefined;

    return { permits: response.data ?? [], meta };
  } catch (error) {
    console.error("Failed to prefetch work permit gallery:", error);
    return { permits: [], meta: undefined };
  }
}

export default async function WorkPermitGalleryPage() {
  const { permits, meta } = await getInitialPermits();
  return <AllPermitImage initialPermits={permits} initialMeta={meta} />;
}
