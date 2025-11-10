import { HeroCustomSection } from "@/components/hero/HeroCustomSection";
import { NewsSection } from "@/components/immigration_faq/NewsSection";
import { About } from "@/components/sections/About";
import { GovernmentLinks } from "@/components/sections/GovernmentLinks";
import { Hero } from "@/components/sections/Hero";
import { RecentBlog } from "@/components/sections/RecentBlog";
import { RecentTestimonials } from "@/components/sections/RecentTestimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <HeroCustomSection />
      <RecentTestimonials />
      <RecentBlog />
      <NewsSection />
      <GovernmentLinks />
    </main>
  );
}
