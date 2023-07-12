/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: [],
    },
    images: {
        domains: ["lh3.googleusercontent.com"],
    },
}

module.exports = nextConfig