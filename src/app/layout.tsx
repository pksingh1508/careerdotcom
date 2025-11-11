import type { Metadata } from "next";
import "./globals.css";
import { ReactLenis } from "@/utils/lenis";
import { fontSans, fontMono } from "@/fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

const fonts = `${fontSans.variable} ${fontMono.variable}`;

export const metadata: Metadata = {
  title: "Best European Recruitment Agency",
  description:
    "EU Career Serwis is a trusted recruitment agency in Poland, connecting European employers with qualified unskilled and semi-skilled workers from non-EU countries."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={fonts}>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-right" reverseOrder={false} />
        </body>
      </ReactLenis>
    </html>
  );
}
