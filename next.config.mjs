/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Removed invalid 'eslint' key
  // Headers are disabled for static export mode 'output: export'
  // if you move to a serverless environment, you can re-enable these.
};


export default nextConfig;
