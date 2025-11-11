"use client";

import { fontInter, fontPoppins } from "@/fonts";

export default function RecruiterInfo() {
  return (
    <section className="py-8 px-4 bg-white">
      <div className="max-w-6xl mx-auto p-2">
        {/* Main Heading */}
        <h1
          className={`text-3xl text-center font-bold text-gray-900 mb-4 ${fontPoppins.className}`}
        >
          How EU Career Serwis Supports Our International Recruitment Partners
        </h1>

        {/* Underline decoration */}
        <div className="w-24 h-1 bg-linear-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>

        {/* Description */}
        <p
          className={`text-gray-600 leading-relaxed max-w-6xl text-base text-justify hyphens-auto mb-6 ${fontInter.className}`}
        >
          EU Career Serwis everything help-in-help accompanying conscription
          instrumentalities across Asia and Africa to constitutionally and
          capably place laborers in Poland. As a authorized consultancy, we
          accomplish the complete process—from acquiring work permits and visas
          to providing post-appearance support.
        </p>

        {/* Bullet Points */}
        <div className="space-y-2">
          <div className="flex items-start">
            <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2.5 mr-2 shrink-0"></div>
            <p
              className={`text-gray-600 leading-relaxed text-base text-justify hyphens-auto ${fontInter.className}`}
            >
              Legal Authorization – We are a authorized conscription consultancy
              in Poland, guaranteeing all your applicants are treated under
              Polish labor and emigration standard.
            </p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2.5 mr-2 shrink-0"></div>
            <p
              className={`text-gray-600 leading-relaxed text-base text-justify hyphens-auto ${fontInter.className}`}
            >
              Work Permit & Visa Processing – We handle the complete filing,
              containing work permits, residence arrangement, and authorization
              approvals for your competitors.
            </p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2.5 mr-2 shrink-0"></div>
            <p
              className={`text-gray-600 leading-relaxed text-base text-justify hyphens-auto ${fontInter.className}`}
            >
              Transparent Collaboration – We determine clear contracts,
              concurred timelines, and open ideas to build trust and general
              participations.
            </p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2.5 mr-2 shrink-0"></div>
            <p
              className={`text-gray-600 leading-relaxed text-base text-justify hyphens-auto ${fontInter.className}`}
            >
              Candidate Support in Poland – Once laborers appear, we assist
              bureaucracy accompanying reconciliation, PESEL enrollment, bank
              reports, and adjustment for a smooth start.
            </p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2.5 mr-2 shrink-0"></div>
            <p
              className={`text-gray-600 leading-relaxed text-base text-justify hyphens-auto ${fontInter.className}`}
            >
              Access to Employers in Poland – We link your contenders
              accompanying confirmed Polish parties in subdivisions like
              management, building, production, neighborliness, and farming.
            </p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2.5 mr-2 shrink-0"></div>
            <p
              className={`text-gray-600 leading-relaxed text-base text-justify hyphens-auto ${fontInter.className}`}
            >
              Ongoing Partnership Growth – We profit worldwide allies and
              support ruling class in extending their trade through moral,
              trustworthy, and obedient conscription.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
