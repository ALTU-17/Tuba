/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  turbopack: { root: process.cwd() },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
