import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "api.eucareerserwis.pl",
        port: "",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
