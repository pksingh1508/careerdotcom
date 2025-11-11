import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
        hostname: "determined-unity-de531adc95.media.strapiapp.com",
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
