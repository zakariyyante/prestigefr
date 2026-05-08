import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.mtd-api.com',
      },
      {
        protocol: 'https',
        hostname: 'qokbynptuwcxxogg.public.blob.vercel-storage.com',
      }
    ],
  },
};

export default nextConfig;
