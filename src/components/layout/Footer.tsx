"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import { fontInter, fontPoppins } from "@/fonts";

export function Footer() {
  const solutionLinks = [
    { href: "/work", label: "Work" },
    { href: "/migrate", label: "Migrate" },
    { href: "/employer", label: "Employer" },
    { href: "/recruiter", label: "Recruiter" },
    { href: "/jobseeker", label: "JobSeeker" }
  ];

  const governmentLinks = [
    { href: "https://gov.pl", label: "Government of Poland" },
    { href: "https://migri.fi", label: "Finnish Immigration Service" },
    { href: "https://bamf.de", label: "German Federal Office" },
    { href: "https://europa.eu", label: "European Union" },
    { href: "https://stat.gov.pl/en/", label: "Statistics Poland" }
  ];

  const updatedLinks = [
    { href: "/blog", label: "Blogs" },
    { href: "/immigration-news", label: "Immigration News" }
  ];

  const companyInfoLinks = [
    { href: "#1", label: "NIP Number - 70112281130" },
    { href: "#2", label: "KRS Number - 0001133506" },
    { href: "#3", label: "REGON Number - 529955956" }
  ];

  const successStoryLinks = [
    { href: "/success-stories", label: "Success Story" },
    { href: "/work-permit", label: "Work Permit" },
    { href: "/visa-stamp", label: "Visa Stamp" }
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/eucareerserwis/",
      icon: Facebook,
      label: "Facebook"
    },
    { href: "https://x.com/eucareerserwis", icon: Twitter, label: "Twitter" },
    {
      href: "https://instagram.com/eucareerserwis",
      icon: Instagram,
      label: "Instagram"
    },
    {
      href: "https://www.linkedin.com/company/eu-career-serwis",
      icon: Linkedin,
      label: "LinkedIn"
    }
  ];

  const termsLinks = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/refund-policy", label: "Refund Policy" },
    { href: "/terms-conditions", label: "Terms of Service" },
    { href: "/antiFraud-policy", label: "Anti-Fraud Policy" }
  ];

  return (
    <footer className="mt-auto bg-gray-100 text-gray-800 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-8 lg:px-16 py-8">
        <div className="max-w-7xl mx-auto p-0 lg:pl-4">
          {/* First Row - 4 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1: Logo and Description */}
            <div className="">
              <div className="mb-8">
                <Image
                  src="/EU-logo.jpeg"
                  alt="Logo"
                  width={180}
                  height={54}
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p
                className={`text-gray-600 leading-relaxed text-sm pr-4 ${fontInter.className}`}
              >
                Your reliable partner for international investment, migration,
                and educational opportunities. With professional advice and
                individualized support, we help you realize your global
                aspirations.
              </p>
            </div>

            {/* Column 2: Our Solution */}
            <div className="">
              <div className="mb-6">
                <h4
                  className={`text-lg font-semibold text-gray-900 mb-2 ${fontPoppins.className}`}
                >
                  Our Solutions
                </h4>
                <div className="h-1 w-16 bg-yellow-400 rounded-full"></div>
              </div>
              <ul className="space-y-3">
                {solutionLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={`/${link.href}`}
                      className={`text-gray-600 hover:text-yellow-500 transition-colors duration-200 text-sm ${fontInter.className}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Government Links */}
            <div className="">
              <div className="mb-6">
                <h4
                  className={`text-lg font-semibold text-gray-900 mb-2 ${fontPoppins.className}`}
                >
                  Government Links
                </h4>
                <div className="h-1 w-16 bg-yellow-400 rounded-full"></div>
              </div>
              <ul className="space-y-3">
                {governmentLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-600 hover:text-yellow-500 transition-colors duration-200 text-sm ${fontInter.className}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Updated */}
            <div className="">
              <div className="mb-6">
                <h4
                  className={`text-lg font-semibold text-gray-900 mb-2 ${fontPoppins.className}`}
                >
                  Exclusive Updates
                </h4>
                <div className="h-1 w-16 bg-yellow-400 rounded-full"></div>
              </div>
              <ul className="space-y-3">
                {updatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={`/${link.href}`}
                      className={`text-gray-600 hover:text-yellow-500 transition-colors duration-200 text-sm ${fontInter.className}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Second Row - 4 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1: Company Info */}
            <div className="">
              <div className="mb-6">
                <h4
                  className={`text-lg font-semibold text-gray-900 mb-2 ${fontPoppins.className}`}
                >
                  Company Info
                </h4>
                <div className="h-1 w-16 bg-yellow-400 rounded-full"></div>
              </div>
              <ul className="space-y-3">
                {companyInfoLinks.map((link, index) => (
                  <li key={index}>
                    <p
                      className={`text-gray-600 hover:text-yellow-500 transition-colors duration-200 text-sm ${fontInter.className}`}
                    >
                      {link.label}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Our Success Story */}
            <div className="">
              <div className="mb-6">
                <h4
                  className={`text-lg font-semibold text-gray-900 mb-2 ${fontPoppins.className}`}
                >
                  Our Success Story
                </h4>
                <div className="h-1 w-16 bg-yellow-400 rounded-full"></div>
              </div>
              <ul className="space-y-3">
                {successStoryLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={`/${link.href}`}
                      className={`text-gray-600 hover:text-yellow-500 transition-colors duration-200 text-sm ${fontInter.className}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Our Social Media */}
            <div className="">
              <div className="mb-6">
                <h4
                  className={`text-lg font-semibold text-gray-900 mb-2 ${fontPoppins.className}`}
                >
                  Our Social Media
                </h4>
                <div className="h-1 w-16 bg-yellow-400 rounded-full"></div>
              </div>
              <div className="flex flex-col space-y-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Link
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-600 hover:text-yellow-500 transition-colors duration-200 group"
                      title={social.label}
                    >
                      <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-white transition-all duration-200">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className={`text-sm ${fontInter.className}`}>
                        {social.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Column 4: Terms & Conditions */}
            <div className="">
              <div className="mb-6">
                <h4
                  className={`text-lg font-semibold text-gray-900 mb-2 ${fontPoppins.className}`}
                >
                  Our Policy
                </h4>
                <div className="h-1 w-16 bg-yellow-400 rounded-full"></div>
              </div>
              <ul className="space-y-3">
                {termsLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={`/${link.href}`}
                      className={`text-gray-600 hover:text-yellow-500 transition-colors duration-200 text-sm ${fontInter.className}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="text-center">
              <p className={`text-gray-500 text-sm ${fontInter.className}`}>
                &copy; {new Date().getFullYear()} EU Careers Serwis. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
