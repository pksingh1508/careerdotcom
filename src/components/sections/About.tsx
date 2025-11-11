"use client";

import { fontInter, fontPoppins } from "@/fonts";
import { TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function About() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Placeholder for the consulting image */}
                <Image
                  src="https://ik.imagekit.io/eucareerserwis/home/about.webp"
                  alt="Consulting"
                  width={600}
                  height={400}
                  className="w-full h-[70vh] md:h-[80vh] object-cover"
                />
              </div>

              {/* Trusted by Thousands Badge */}
              <Link
                href={`/company-certificate`}
                className="absolute -bottom-2 left-6 bg-linear-to-r from-amber-400 to-orange-400 text-white px-6 py-4 rounded-2xl shadow-lg transform rotate-0 hover:rotate-3 transition-transform duration-300"
              >
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  <span
                    className={`font-bold text-sm md:text-base ${fontInter.className}`}
                  >
                    Certificate
                  </span>
                </div>
              </Link>
            </div>

            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <p className="text-lg text-amber-600 mb-4">
                  About EU Career Serwis
                </p>
                <h2
                  className={`text-2xl md:text-3xl font-bold text-gray-900 mb-6 ${fontPoppins.className}`}
                >
                  Europe’s Leading Immigration and International Employment
                  Consultancy.
                </h2>

                <div className="space-y-6 text-gray-600">
                  <p
                    className={`text-base text-gray-600 leading-relaxed ${fontInter.className}`}
                  >
                    EU Career Serwis is a reputable European consultancy that
                    focuses on international recruitment, career counseling, and
                    employment visas. For people and companies, we offer
                    customized immigration and workforce solutions that cover
                    skilled, semi-skilled, and unskilled placements throughout
                    Europe.
                  </p>

                  <p
                    className={`text-base text-gray-600 leading-relaxed ${fontInter.className}`}
                  >
                    Under the direction of skilled Polish attorneys, we
                    guarantee professionalism, legal compliance, and openness in
                    each case. Our purpose is to assist people in achieving
                    their professional aspirations overseas while assisting
                    companies in effectively and morally hiring the best staff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
