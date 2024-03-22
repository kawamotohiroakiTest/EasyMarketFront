/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    typedRoutes: false,
    swcMinify: false,
  },
  images: {
    domains: ['easymarket.s3.ap-northeast-1.amazonaws.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'test.laravel-matching.com',
        port: '',
        pathname: '/storage/images/**',
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/easymarket/api/:path*',
        destination: '/api/:path*', // Proxy to Backend
      },
    ]
  },
};

module.exports = nextConfig;
