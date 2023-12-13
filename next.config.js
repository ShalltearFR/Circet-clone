/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/candidats',
        permanent: true,
      },
    ]
  },

}

module.exports = nextConfig
