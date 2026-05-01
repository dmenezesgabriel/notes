import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // allow imports from outside apps/site (e.g. packages/*)
    externalDir: true,
  },
  transpilePackages: ['@notes/components'],
};

export default nextConfig;
