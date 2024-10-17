/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "honey-paws-theme.myshopify.com" },
    ],
  },
};

export default nextConfig;
