import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Premium Cooking Oils',
  description: 'Explore the Jeevan Rekha range of premium edible oils: cold-pressed Kacchi Ghani Mustard Oil, physically refined Rice Bran Oil, and neutral Soybean Oil.',
  openGraph: {
    title: 'Our Premium Cooking Oils | Jeevan Rekha',
    description: 'Explore the Jeevan Rekha range of premium edible oils: cold-pressed Kacchi Ghani Mustard Oil, physically refined Rice Bran Oil, and neutral Soybean Oil.',
    url: 'https://jeevanrekhafoods.com/products',
    siteName: 'Jeevan Rekha',
    type: 'website',
    images: [
      {
        url: 'https://jeevanrekhafoods.com/og/og_products.jpg',
        secureUrl: 'https://jeevanrekhafoods.com/og/og_products.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Jeevan Rekha Premium Cooking Oils Banner',
      },
      {
        url: 'https://jeevanrekhafoods.com/og/square/sq_products.jpg',
        secureUrl: 'https://jeevanrekhafoods.com/og/square/sq_products.jpg',
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'Jeevan Rekha Premium Cooking Oils Thumbnail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Premium Cooking Oils | Jeevan Rekha',
    description: 'Explore the Jeevan Rekha range of premium edible oils: cold-pressed Kacchi Ghani Mustard Oil, physically refined Rice Bran Oil, and neutral Soybean Oil.',
    images: [
      {
        url: 'https://jeevanrekhafoods.com/og/og_products.jpg',
        secureUrl: 'https://jeevanrekhafoods.com/og/og_products.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Jeevan Rekha Premium Cooking Oils Banner',
      },
      {
        url: 'https://jeevanrekhafoods.com/og/square/sq_products.jpg',
        secureUrl: 'https://jeevanrekhafoods.com/og/square/sq_products.jpg',
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'Jeevan Rekha Premium Cooking Oils Thumbnail',
      },
    ],
  },
  alternates: {
    canonical: 'https://jeevanrekhafoods.com/products',
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
