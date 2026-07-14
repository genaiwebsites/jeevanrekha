import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pure Soybean Oil',
  description: 'Light, neutral-flavoured pure soybean oil enriched with Omega-3 fatty acids and Vitamin A & D2. Perfect for everyday light cooking and baking.',
  openGraph: {
    title: 'Pure Soybean Oil | Jeevan Rekha',
    description: 'Light, neutral-flavoured pure soybean oil enriched with Omega-3 fatty acids and Vitamin A & D2. Perfect for everyday light cooking and baking.',
    url: 'https://jeevanrekhafoods.com/products/soybean-oil',
    images: [
      {
        url: '/product_range.jpeg',
        width: 1200,
        height: 600,
        alt: 'Jeevan Rekha Soybean Oil Product Range',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pure Soybean Oil | Jeevan Rekha',
    description: 'Light, neutral-flavoured pure soybean oil enriched with Omega-3 fatty acids.',
    images: ['/product_range.jpeg'],
  },
};

export default function SoybeanOilLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
