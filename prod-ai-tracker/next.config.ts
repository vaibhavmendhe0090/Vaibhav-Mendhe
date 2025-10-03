import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Ignore ESLint during production builds to avoid blocking on generated code
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
