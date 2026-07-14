import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Premium Cooking Oils',
  description: 'Explore the Jeevan Rekha range of premium edible oils: cold-pressed Kacchi Ghani Mustard Oil, physically refined Rice Bran Oil, and neutral Soybean Oil.',
  openGraph: {
    title: 'Our Premium Cooking Oils | Jeevan Rekha',
    description: 'Explore the Jeevan Rekha range of premium edible oils: cold-pressed Kacchi Ghani Mustard Oil, physically refined Rice Bran Oil, and neutral Soybean Oil.',
    url: 'https://jeevanrekhafoods.com/products',
    images: [
      {
        url: '/product_range.jpeg',
        width: 1200,
        height: 600,
        alt: 'Jeevan Rekha Premium Cooking Oils Product Range',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Premium Cooking Oils | Jeevan Rekha',
    description: 'Explore the Jeevan Rekha range of premium edible oils: cold-pressed Kacchi Ghani Mustard Oil, physically refined Rice Bran Oil, and neutral Soybean Oil.',
    images: ['/product_range.jpeg'],
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
