/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/shopify' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/shopify' : '',
}

export default nextConfig
