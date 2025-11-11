"use client";

import { motion } from "framer-motion";
import { refundPolicyContent } from "@/data/policyContent";

export function Refund_Policy() {
  const { mainHeading, sections } = refundPolicyContent;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-red-50">
      <motion.div
        className="container mx-auto px-4 py-12 max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {mainHeading}
          </h1>
          <div className="w-32 h-2 bg-linear-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full mb-6"></div>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => {
            // Determine card color based on content type
            let cardColor = "border-gray-200";

            return (
              <motion.div
                key={section.title}
                className={`bg-white rounded-xl shadow-lg p-8 border-2 ${cardColor} hover:shadow-xl transition-all duration-300`}
                variants={itemVariants}
                whileHover={{ scale: 1.01, y: -2 }}
              >
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                        <span className="text-gray-700 font-bold text-lg">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="grow">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">
                      {section.title}
                    </h2>
                  </div>
                </div>

                {/* Points List */}
                <div className="ml-20">
                  <ul className="space-y-3">
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
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
