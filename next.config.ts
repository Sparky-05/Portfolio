import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Enable static export for GitHub Pages
  output: "export",

  // ✅ Ignore build-time TypeScript/ESLint errors
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
