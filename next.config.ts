import type { NextConfig } from 'next'
import createPWA from '@ducanh2912/next-pwa'

const withPWA = createPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
})

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.pdf$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/assets/[hash][ext]',
      },
    })
    return config
  },
}

export default withPWA(nextConfig)
