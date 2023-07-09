import { withContentlayer } from "next-contentlayer"

import "./env.mjs"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "images.unsplash.com",
      "picsum.photos",
      "ts1.cn.mm.bing.net",
    ],
  },
  experimental: {
    appDir: true,
  },
}

export default withContentlayer(nextConfig)
