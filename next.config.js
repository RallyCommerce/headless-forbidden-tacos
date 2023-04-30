/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.schema.io', 'cdn.swell.store'],
  },
}

module.exports = nextConfig
