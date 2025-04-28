/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'scontent-fra5-2.xx.fbcdn.net',
      'd33wubrfki0l68.cloudfront.net',
      'storage.googleapis.com',
      'developer.apple.com',
      'kotlinlang.org',
      'firebase.google.com',
      'upload.wikimedia.org'
    ],
  },
  // Add performance optimizations
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: true,
    optimizeImages: true,
    scrollRestoration: true,
  },
}

export default nextConfig;