/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://openapi.naver.com/v1/search/local.json/:path*",
        // destination: "https://openapi.naver.com/v1/search/local.json/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
module.exports = {
  crossOrigin: "anonymous",
  images: {
    domains: ["search.pstatic.net"],
  },
};
