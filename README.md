# EU Career Serwis Website

> Modern recruitment-and-immigration marketing site for **EU Career Serwis** built with the Next.js App Router. The app presents employer/jobseeker services, immigration news, testimonials, and policy pages while pulling live slugs & content from Strapi.

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Key Features](#key-features)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Environment Variables](#environment-variables)
6. [SEO & Performance Highlights](#seo--performance-highlights)
7. [Available Scripts](#available-scripts)
8. [Contributing](#contributing)
9. [License](#license)

---

## Tech Stack

- **Framework**: [Next.js 14+ (App Router)](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, custom gradients, Framer Motion micro-interactions
- **CMS**: Strapi (REST API) for blogs, news, testimonials, visa/work-permit galleries
- **UI Components**: Custom design system + shadcn/ui primitives
- **Deployment Target**: Vercel / Node 18+

## Key Features

- **Dynamic content**: Blog & Immigration News pages fetch Strapi slugs at build/runtime and render detail pages with rich markdown + media.
- **Policy & Legal pages**: Anti-fraud, privacy, refund, and T&C sections using structured data sourced from `policydata.txt`.
- **Recruitment funnels**: Dedicated experiences for jobseekers, employers, recruiters, and migration assistance with reusable hero sections, CTAs, and testimonials.
- **Media galleries**: Visa stamp & work permit galleries with paginated Strapi images.
- **Contact & lead forms**: Multi-channel contact cards, embedded location map, and WhatsApp/social CTAs.
- **Accessibility-first**: Semantic headings, aria-friendly accordions, responsive typography.

## Project Structure

```
src/
├── app/                # App Router pages & API routes
├── components/         # UI widgets & feature sections
├── data/               # Static data (FAQ, policies)
├── hooks/              # Custom hooks
├── lib/                # Strapi SDK, SEO helpers, schema utilities
└── styles/             # Global styles & markdown overrides
```

## Getting Started

```bash
# 1. Install dependencies
pnpm install

# 2. Run locally
pnpm dev

# 3. Lint before commits
pnpm lint

# 4. Build & preview
pnpm build
pnpm start
```

Visit `http://localhost:3000` once the dev server boots.

## Environment Variables

Create a `.env.local` file and define:

| Variable                         | Description                                                                 |
| -------------------------------- | --------------------------------------------------------------------------- |
| `STRAPI_ACCESS_TOKEN`            | API token for fetching blogs/news/testimonials/permits from Strapi          |
| `NEXT_PUBLIC_CMS_URL`            | Public URL of the Strapi asset host (e.g., `https://api.eucareerserwis.pl`) |
| `NEXT_PUBLIC_GA_ID` _(optional)_ | Google Analytics 4 Measurement ID for tracking                              |

> The sitemap and metadata generators rely on `STRAPI_ACCESS_TOKEN`. Without it, dynamic pages will still render but won’t include OG images pulled from Strapi.

## SEO & Performance Highlights

- Centralized metadata builder (`src/lib/seo.ts`) ensures uniform titles, descriptions, OG/Twitter tags, and canonical URLs.
- Automated sitemap & robots outputs (`src/app/sitemap.ts`, `src/app/robots.ts`) with live Strapi slug ingestion.
- Organization + FAQ JSON-LD schema embedded site-wide for richer search snippets.
- Trailing slashes disabled to prevent duplicate canonical issues.
- Optimized media handling through `next/image` remote patterns for Unsplash, ImageKit, and Strapi domains.

## Available Scripts

| Command      | Description             |
| ------------ | ----------------------- |
| `pnpm dev`   | Start local dev server  |
| `pnpm build` | Create production build |
| `pnpm start` | Run production server   |
| `pnpm lint`  | Run ESLint              |

## Contributing

1. NOTE - This repo is not for Contributing.

Please make sure linting/build checks pass locally before submitting PRs.

## License

This project is proprietary to **EU Career Serwis**. No redistribution without written permission.
