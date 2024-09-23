/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/portfolio',
    assetPrefix: '/portfolio',
    output: "export",
    reactStrictMode: true,
    images: {
        unoptimized: true
    }
};

export default nextConfig;
