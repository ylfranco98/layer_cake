import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // experimental: {
  //   turbo: false, // ✅ Disables TurboPack
  // },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
