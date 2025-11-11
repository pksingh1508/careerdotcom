"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";
import { fontInter } from "@/fonts";
import { faqContent, someFaqContent } from "@/data/faqData";

export function SomeFAQ() {
  const { heading, description } = someFaqContent;
  const { questions } = faqContent;

  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6">
            <h2
              className={`text-xl font-bold text-gray-800 mb-3 md:mb-4 ${fontInter.className}`}
            >
              {heading}
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              {description}
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-0">
            <Accordion type="single" className="w-full space-y-3">
              {questions.map((item, index) => (
                <AccordionItem
                  key={item.key}
                  value={`faq-${item.key}`}
                  className="border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <AccordionTrigger
                    className={`text-left text-base cursor-pointer ${fontInter.className}`}
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent
                    className={`text-sm ${fontInter.className}`}
                  >
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
