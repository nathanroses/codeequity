/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: "codeequity.vercel.app"
      }
    ]
  }
}

module.exports = nextConfig
