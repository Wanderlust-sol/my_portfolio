/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    reactStrictMode: true,
  },
  // Prefer loading of ES Modules over CommonJS
  experimental: { esmExternals: true },
};

module.exports = nextConfig;
