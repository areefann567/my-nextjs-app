import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // REQUIRED: Static export for Azure Static Web Apps
  output: 'export',
  
  // Better routing for static exports
  trailingSlash: true,
  
  // REQUIRED: Disable image optimization for static export
  images: {
    unoptimized: true
  },
  
  // Enable App Router features
  experimental: {
    appDir: true
  },
  
  // Better React development experience
  reactStrictMode: true,
  
  // Improve bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;