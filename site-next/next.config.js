/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@notes/ui'],
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
