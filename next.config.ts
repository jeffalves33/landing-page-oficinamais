import type { NextConfig } from "next";

const embeddedBuild = process.env.LANDING_EMBEDDED_BUILD === "true";

const nextConfig: NextConfig = {
  output: "export",
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(embeddedBuild ? { assetPrefix: "/landing-build" } : {}),
  experimental: {
    optimizePackageImports: ["@fontsource-variable/manrope"],
  },
};

export default nextConfig;
