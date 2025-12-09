import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",               // <— REQUIRED for static export
  trailingSlash: true,            // optional but recommended for SWA
};

export default nextConfig;
