import "./globals.css";
import { ReactLenis } from "@/utils/lenis";
import { fontSans, fontMono } from "@/fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import { baseMetadata } from "@/lib/seo";
import { organizationSchema } from "@/lib/schema";

const fonts = `${fontSans.variable} ${fontMono.variable}`;

export const metadata = baseMetadata;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <ReactLenis root>
        <body className={fonts}>
          {gaId && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                strategy="afterInteractive"
              />
              <Script id="ga4-script" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `}
              </Script>
            </>
          )}
          <Script
            id="organization-schema"
            type="application/ld+json"
            strategy="afterInteractive"
          >
            {JSON.stringify(organizationSchema)}
          </Script>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-right" reverseOrder={false} />
        </body>
      </ReactLenis>
    </html>
  );
}
