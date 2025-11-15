/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Transpile toolbar packages
  transpilePackages: ['@21st-extension/toolbar', '@21st-extension/toolbar-next', '@21st-extension/toolbar-react'],
  // Only use static export for production builds
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    images: { unoptimized: true }
  }),
  webpack: (config, { isServer }) => {
    // Fix module resolution for toolbar packages
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
      
      // Prefer ESM modules via package exports (import condition)
      config.resolve.conditionNames = ['import', 'require', 'default'];
    }
    
    return config;
  },
};

module.exports = nextConfig;
