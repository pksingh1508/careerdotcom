import type { Metadata } from "next";

const APP_BASE_URL = "https://eucareerserwis.com";
const DEFAULT_SEO_TITLE =
  "International Recruitment company in Europe For Skilled & Unskilled Workers";

const keywordList = [
  "Europe Leading Immigration Consultancy",
  "International Employment Consultancy Europe",
  "EU Career Serwis - International Employment Company",
  "Start Your European Career",
  "European Job Placement Agency",
  "Work Abroad Consultancy Europe",
  "Europe Work Permit Assistance",
  "Europe Visa Consultancy Services",
  "Legal Immigration Services for Europe",
  "European Employment Experts",
  "Jobs in Europe for Non-EU Citizens",
  "Migration Consultancy to Europe",
  "Abroad Job Consultancy Europe",
  "Europe Skilled and Unskilled Worker Recruitment",
  "Get Job in Europe",
  "European Jobs for Indians",
  "Work in Europe Legally",
  "Poland Work Permit Provider",
  "Lithuania Work Permit Consultancy",
  "Romania Work Visa Assistance",
  "Hire Unskilled Workers for Europe",
  "Skilled Worker Recruitment Europe",
  "Job Placement for Factory Workers in Europe",
  "Europe Work Visa Without IELTS",
  "High-Demand Jobs in Europe",
  "European Hospitality Jobs Recruitment",
  "Agriculture Jobs in Europe",
  "Construction Jobs in Europe",
  "Warehouse Jobs in Europe",
  "Manufacturing Job Opportunities Europe",
  "Seasonal Work in Europe",
  "Blue-Collar Jobs in Europe",
  "EU Career Serwis Immigration Services",
  "EU Career Serwis Work Permit Solutions",
  "EU Career Serwis Visa Consultancy",
  "EU Career Serwis Overseas Recruitment",
  "Trusted European Employment Consultancy",
  "Verified Europe Job Consultants",
  "Certified International Employment Agency",
  "Authorized European Job Consultancy",
  "Experienced Europe Migration Consultant",
  "Legal Europe Work Permit Provider",
  "100% Genuine Europe Jobs",
  "Poland Work Permit Consultancy",
  "Germany Work Permit Assistance",
  "Estonia Visa Support",
  "Bulgaria Employment Consultancy",
  "Croatia Job Placement Agency",
  "Latvia and Lithuania Employment Services",
  "Czech Republic Work Permit Agency",
  "How to apply for a Europe work permit",
  "Best consultancy for European job visa",
  "How to get a job in Europe from India",
  "Europe job consultancy with 100% success rate",
  "Affordable Europe work visa consultancy",
  "Step-by-step Europe visa guidance"
];

export const siteConfig = {
  name: "EU Career Serwis",
  shortName: "EU Career Serwis",
  description:
    "EU Career Serwis is a Polish recruitment agency that helps European employers connect with vetted international talent for logistics, construction, hospitality, and seasonal work.",
  url: APP_BASE_URL,
  contactEmail: "office@eucareerserwis.com",
  contactPhone: "+48 22 208 5497",
  logo: `${APP_BASE_URL}/brandLogo.webp`,
  socials: [
    "https://www.facebook.com/eucareerserwis/",
    "https://www.instagram.com/eucareerserwis",
    "https://www.linkedin.com/company/eu-career-serwis"
  ],
  keywords: keywordList
} as const;

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: DEFAULT_SEO_TITLE,
    template: ``
  },
  description: siteConfig.description,
  keywords: keywordList,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: DEFAULT_SEO_TITLE,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.logo,
        width: 512,
        height: 512,
        alt: `${siteConfig.name} logo`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    creator: "@eucareerserwis",
    title: DEFAULT_SEO_TITLE,
    description: siteConfig.description,
    images: [siteConfig.logo]
  },
  alternates: {
    canonical: siteConfig.url
  }
};

type BuildMetadataArgs = {
  title?: string;
  description?: string;
  canonicalPath?: string;
  image?: string;
};

export function buildMetadata({
  title,
  description,
  canonicalPath,
  image
}: BuildMetadataArgs = {}): Metadata {
  const resolvedTitle = title ? `${title}` : DEFAULT_SEO_TITLE;
  const resolvedDescription = description || siteConfig.description;
  const canonicalUrl = canonicalPath
    ? new URL(canonicalPath, siteConfig.url).toString()
    : siteConfig.url;
  const ogImage = image || siteConfig.logo;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: {
      canonical: canonicalUrl
    },
    keywords: keywordList,
    openGraph: {
      ...(baseMetadata.openGraph || {}),
      url: canonicalUrl,
      title: resolvedTitle,
      description: resolvedDescription,
      images: [
        {
          url: ogImage,
          width: 800,
          height: 600,
          alt: title ? `${title} - ${siteConfig.name}` : siteConfig.name
        }
      ]
    },
    twitter: {
      ...(baseMetadata.twitter || {}),
      title: resolvedTitle,
      description: resolvedDescription,
      images: [ogImage]
    }
  };
}

export function absoluteUrl(pathname: string): string {
  return new URL(pathname, siteConfig.url).toString();
}
