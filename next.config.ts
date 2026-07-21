import type { NextConfig } from "next";
import path from "path";
import { WORDPRESS_REDIRECTS } from "./lib/wordpress-migration";

const nextConfig: NextConfig = {
  /** Match WordPress permalink style (e.g. /kitchens/). */
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aihomerenovations.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return WORDPRESS_REDIRECTS
  },
};

export default nextConfig;
