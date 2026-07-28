import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/about-us/',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/contact-us/',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/recipes',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/recipes/',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/recipes/:slug',
        destination: '/blogs/recipes/:slug',
        permanent: true,
      },
      {
        source: '/recipes/:slug/',
        destination: '/blogs/recipes/:slug',
        permanent: true,
      },
      {
        source: '/product/rice-bran-oil-lite',
        destination: '/products/rice-bran-oil',
        permanent: true,
      },
      {
        source: '/product/rice-bran-oil-lite/',
        destination: '/products/rice-bran-oil',
        permanent: true,
      },
      {
        source: '/product/:slug',
        destination: '/products/:slug',
        permanent: true,
      },
      {
        source: '/product/:slug/',
        destination: '/products/:slug',
        permanent: true,
      },
      {
        source: '/pricing.md',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: '/',
        permanent: true,
      },
      {
        source: '/privacy-policy/',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
