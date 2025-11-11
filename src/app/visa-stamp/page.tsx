import type { Metadata } from "next";
import { AllVisaStampImage } from "@/components/visaStamp/AllVisaStampImage";
import { getAllStampImages } from "@/lib/strapi";

async function getInitialStamps() {
  const token = process.env.STRAPI_ACCESS_TOKEN;
  if (!token) {
    return { stamps: [], meta: undefined };
  }

  try {
    const response = await getAllStampImages(token, 1, 20, "visa-stamps");
    const pagination = response.meta?.pagination;
    const meta = pagination
      ? {
          currentPage: pagination.page ?? 1,
          totalPages: pagination.pageCount ?? 0,
          hasNextPage: (pagination.page ?? 1) < (pagination.pageCount ?? 0)
        }
      : undefined;

    return { stamps: response.data ?? [], meta };
  } catch (error) {
    console.error("Failed to prefetch visa stamp gallery:", error);
    return { stamps: [], meta: undefined };
  }
}

export default async function VisaStampGalleryPage() {
  const { stamps, meta } = await getInitialStamps();
  return <AllVisaStampImage initialStamps={stamps} initialMeta={meta} />;
}
