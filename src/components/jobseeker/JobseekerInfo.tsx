"use client";

import { fontInter, fontPoppins } from "@/fonts";

export default function JobseekerInfo() {
  return (
    <section className="py-8 px-4 bg-white">
      <div className="max-w-6xl mx-auto p-2 text-center">
        {/* Main Heading */}
        <h1
          className={`text-3xl text-center font-bold text-gray-900 mb-4 ${fontPoppins.className}`}
        >
          Start Your European Career accompanying EU Career Serwis –
          Opportunities Await in Poland
        </h1>

        {/* Underline decoration */}
        <div className="w-24 h-1 bg-linear-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>

        {/* Subheading/Title */}
        <h2
          className={`text-xl text-center md:text-2xl font-semibold text-gray-800 mb-6 ${fontPoppins.className}`}
        >
          Secure Your Job in Poland accompanying Complete Support from EU Career
          Serwis
        </h2>

        {/* Description */}
        <p
          className={`text-gray-600 leading-relaxed max-w-6xl text-base ${fontInter.className}`}
        >
          EU Career Serwis helps task applicants find permissible enrollment
          excuse across Poland in two together skillful and non-skillful parts.
        </p>
        <p
          className={`text-gray-600 leading-relaxed max-w-6xl text-base ${fontInter.className}`}
        >
          We guide contestants through the complete process, containing work
          permits, authorization requests, and document development.
        </p>
        <p
          className={`text-gray-600 leading-relaxed max-w-6xl text-base ${fontInter.className}`}
        >
          Our crew assists accompanying travel plans, appearance, and local
          enrollment, containing PESEL numbers and bank reports.
        </p>
        <p
          className={`text-gray-600 leading-relaxed max-w-6xl text-base ${fontInter.className}`}
        >
          We guarantee that each installation is sufficiently obedient
          accompanying Polish labor societies and supplies a smooth start.
        </p>
        <p
          className={`text-gray-600 leading-relaxed max-w-6xl text-base ${fontInter.className}`}
        >
          With our support, nominees can devote effort to something construction
          their course in Europe harmlessly and positively.
        </p>
      </div>
    </section>
  );
}
