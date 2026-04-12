/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/3d_portfolio',
  assetPrefix: '/3d_portfolio',
  images: {
    unoptimized: true,
  },
  // Removed invalid 'eslint' key
};



export default nextConfig;
