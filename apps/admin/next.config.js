/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui","@repo/shadcn","@repo/store","@repo/prisma","@repo/zod"],
  experimental: {
    serverActions:true,
  }
};
