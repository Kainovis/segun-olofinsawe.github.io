import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "segun-olofinsawe.github.io";
const isUserPagesRepo = repoName.endsWith(".github.io");
const basePath = isProd && !isUserPagesRepo ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
