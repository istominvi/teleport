import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
// My repository name is "teleport"
const repoName = 'teleport';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only add the basePath when deploying to GitHub Pages (production)
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}` : '',
};

export default nextConfig;
