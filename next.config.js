/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // necessary for static hosting (next export)
  },
};

module.exports = nextConfig;
