/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Helps identify potential problems in the app
  swcMinify: true, // Uses the faster SWC compiler for minification
  images: {
    domains: ["polytechub.vercel.app"], // Allow external images from your domain
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/", // Redirect /home to the homepage
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)", // Applies to all routes
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
