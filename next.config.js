/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  generateEtags: false,
  images: {
    domains: ["i.ibb.co"],
  },
};

module.exports = nextConfig;
