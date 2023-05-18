/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'BambuStudio Kasm Workspace',
    description: 'Repository containing Kasm Workspace for Bambu Studio.',
    icon: '/img/logo.svg',
    listUrl: 'https://michaeljones32.github.io/kasm-repository/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
