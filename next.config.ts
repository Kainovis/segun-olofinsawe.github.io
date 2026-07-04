import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "segun-olofinsawe.github.io";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // For GitHub Pages org repos: assets must be served from /<repo-name>/
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
