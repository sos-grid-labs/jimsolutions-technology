import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/services/electrical',
        destination: '/services/refrigeration',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
