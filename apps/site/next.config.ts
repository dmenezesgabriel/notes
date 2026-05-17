import type { NextConfig } from 'next';

const SITE_BASE_PATH = '/notes';
const shouldStaticExport = process.env['NODE_ENV'] === 'production';

const nextConfig: NextConfig = {
  ...(shouldStaticExport ? { output: 'export' } : {}),
  // The site's public contract is always `/notes/...`. Using a real basePath
  // keeps Next's export mode and dev server aligned without relying on
  // rewrites that are unsupported for `output: 'export'`.
  basePath: SITE_BASE_PATH,
  trailingSlash: true,
  experimental: {
    // allow imports from outside apps/site (e.g. packages/*)
    externalDir: true,
  },
  transpilePackages: ['@notes/components'],

  // Use 'cheap-source-map' during production builds to trade map detail for
  // much lower peak memory — full source maps on 480 SSG routes push Node
  // over the default 1.5 GB heap.
  productionBrowserSourceMaps: false,

  webpack(config) {
    // Keep dev/build memory flat by preventing webpack from fanning out too
    // many expensive module initialisations at once (notably Shiki + large
    // note route graphs during Next.js compilation).
    config.parallelism = 1;
    return config;
  },
};

export default nextConfig;
