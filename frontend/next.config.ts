import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.10.1.10"],
  output: "standalone",
};

export default nextConfig;
