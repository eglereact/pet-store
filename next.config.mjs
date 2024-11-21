/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "honey-paws-theme.myshopify.com" },
      {
        protocol: "https",
        hostname: "cywxalgkhtpdyzufkytn.supabase.co",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
};

export default nextConfig;
