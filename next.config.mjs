/** @type {import("next").NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/agenda",
        permanent: false,
      },
    ]
  },
}

export default nextConfig
