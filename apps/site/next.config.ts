import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // allow imports from outside apps/site (e.g. packages/*)
    externalDir: true,
  },
  transpilePackages: ['@notes/components'],

  // Use 'cheap-source-map' during production builds to trade map detail for
  // much lower peak memory — full source maps on 480 SSG routes push Node
  // over the default 1.5 GB heap.
  productionBrowserSourceMaps: false,

  webpack(config, { isServer }) {
    if (isServer) {
      // Node's default heap is ~1.5 GB.  Heavy plugin initialisations (Shiki
      // WASM) can spike well above that when webpack evaluates many modules
      // in parallel.  Limit parallelism to keep memory flat.
      config.parallelism = 1;
    }
    return config;
  },
};

export default nextConfig;
