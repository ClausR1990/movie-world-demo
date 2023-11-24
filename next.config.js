/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.tmdb.org",
      },
    ],
  },
}

module.exports = nextConfig
