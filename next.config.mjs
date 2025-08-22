/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.usercontent.google.com",
      },
    ],
  },
};

export default nextConfig;
