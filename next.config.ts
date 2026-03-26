import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // <--- This is the "Magic Switch"
  images: {
    unoptimized: true, // <--- Required for Static Exports
  },
};

export default nextConfig;