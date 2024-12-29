/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // port: '',
        // search: '',
        // pathname: 'images',
      },
    ],
  },
}

export default nextConfig