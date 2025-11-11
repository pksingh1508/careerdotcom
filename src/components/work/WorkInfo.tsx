"use client";

import { fontInter, fontPoppins } from "@/fonts";

export default function WorkInfo() {
  return (
    <section className="py-8 px-4 bg-white">
      <div className="max-w-6xl mx-auto p-2">
        {/* Main Heading */}
        <h1
          className={`text-3xl text-center font-bold text-gray-900 mb-4 ${fontPoppins.className}`}
        >
          EU Career Serwis Works
        </h1>

        {/* Underline decoration */}
        <div className="w-24 h-1 bg-linear-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>

        {/* Subheading/Title */}
        <h2
          className={`text-xl text-center md:text-2xl font-semibold text-gray-800 mb-6 ${fontPoppins.className}`}
        >
          Safe and Legal Non-Skilled Job Opportunities in Europe
        </h2>

        {/* Description */}
        <p
          className={`text-gray-600 leading-relaxed max-w-6xl text-base text-justify hyphens-auto ${fontInter.className}`}
        >
          At EU Career Serwis, we provide safe and legal non-skilled job
          opportunities in many European countries. No advanced qualifications
          are needed—only your willingness to work and grow. To make the process
          stress-free, we manage contracts, permits, and relocation assistance.
          For your comfort and security, accommodations and direction are set
          up. Truck drivers, taxi drivers, delivery drivers (food, packages,
          courier), warehouse workers, forklift operators, loading and unloading
          workers, movers and packers, assembly line workers, machine operators
          (basic level), packaging workers, quality control assistants,
          production workers, textile workers, electricians, plumbers,
          carpenters, painters and decorators, road construction workers,
          cleaning and janitorial workers, gardening and landscaping workers,
          fruit and vegetable pickers, greenhouse workers, farm assistants
          (animals & crops), hotel housekeeping staff, laundry assistants, care
          home assistants, and security personnel are among the jobs that are
          available.
        </p>
      </div>
    </section>
  );
}
