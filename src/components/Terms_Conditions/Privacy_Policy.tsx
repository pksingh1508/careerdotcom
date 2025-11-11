"use client";
import { privacyPolicyContent } from "@/data/policyContent";

export default function Privacy_Policy() {
  const { mainHeading, sections } = privacyPolicyContent;

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Main Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {mainHeading}
          </h1>
          <div className="w-28 h-2 bg-linear-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={section.title}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Section Number & Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className="shrink-0">
                  <div className="w-10 h-10 bg-linear-to-br from-yellow-500 to-yellow-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <div className="grow">
                  <h2 className="text-2xl font-bold text-gray-800 leading-tight">
                    {section.title}
                  </h2>
                </div>
              </div>

              {/* Points List */}
              {section.points.length > 0 && (
                <div className="ml-14">
                  <ul className="space-y-4">
                    {section.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex items-start gap-3 text-gray-700 leading-relaxed"
                      >
                        <div className="shrink-0 mt-2">
                          <div className="w-2 h-2 bg-linear-to-br from-yellow-500 to-yellow-600 rounded-full"></div>
                        </div>
                        <span className="text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
