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
          Use EU Career Serwis to Fulfill All of Your Legal Workforce
          Requirements
        </h1>

        {/* Underline decoration */}
        <div className="w-24 h-1 bg-linear-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>

        {/* Description */}
        <p
          className={`text-gray-600 leading-relaxed max-w-6xl text-base text-justify hyphens-auto ${fontInter.className}`}
        >
          Based in Poland, EU Career Serwis is a licensed recruitment
          consultancy that specializes in offshore staffing and outsourcing for
          European businesses. In order to help businesses throughout Europe
          effectively address labor shortages while maintaining complete legal
          compliance, we supply both skilled and unskilled workers from Asia,
          Africa, and other regions.
        </p>
        <p
          className={`text-gray-600 leading-relaxed max-w-6xl text-base text-justify hyphens-auto ${fontInter.className}`}
        >
          Our services are open, affordable, and compliant with European and
          Polish labor regulations. Since we use fair and moral hiring
          procedures that benefit both businesses and candidates, employers are
          not subject to any unstated costs. We cover a variety of industries,
          including manufacturing, logistics, construction, hospitality,
          agriculture, and transportation, thanks to our extensive talent pool.
        </p>
        <p
          className={`text-gray-600 leading-relaxed max-w-6xl text-base text-justify hyphens-auto ${fontInter.className}`}
        >
          We manage the entire hiring process from beginning to end. This covers
          managing work permits, visa applications, and relocation support in
          addition to candidate sourcing, background checks, and documentation
          support. Experienced Polish attorneys oversee all legal processes,
          guaranteeing that each placement is secure, dependable, and completely
          compliant with employment and immigration laws.
        </p>
        <p
          className={`text-gray-600 leading-relaxed max-w-6xl text-base text-justify hyphens-auto ${fontInter.className}`}
        >
          At EU Career Serwis, we prioritize creating enduring relationships
          with employers by providing workforce solutions that are timely,
          professional, and customized to meet the needs of each business. We
          are a reputable recruitment partner for companies in major European
          cities because of our commitment to quality, integrity, and legal
          compliance.
        </p>
        <p
          className={`text-gray-600 leading-relaxed max-w-6xl text-base text-justify hyphens-auto ${fontInter.className}`}
        >
          We offer a smooth hiring process that guarantees workforce stability,
          saves time, and lessens the administrative load, regardless of whether
          you need seasonal or permanent staff. You can be sure that EU Career
          Serwis will handle your staffing needs effectively and ethically.
        </p>
      </div>
    </section>
  );
}
