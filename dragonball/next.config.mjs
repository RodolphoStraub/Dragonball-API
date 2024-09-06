/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  basePath: "/dragonball",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
