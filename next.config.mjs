/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    
    domains: [
      'scontent.fdac177-1.fna.fbcdn.net',
      'img.freepik.com'
    ],

  },
}

export default nextConfig
