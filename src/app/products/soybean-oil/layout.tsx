import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pure Soybean Oil',
  description: 'Light, neutral-flavoured pure soybean oil enriched with Omega-3 fatty acids and Vitamin A & D2. Perfect for everyday light cooking and baking.',
  openGraph: {
    title: 'Pure Soybean Oil | Jeevan Rekha',
    description: 'Light, neutral-flavoured pure soybean oil enriched with Omega-3 fatty acids and Vitamin A & D2. Perfect for everyday light cooking and baking.',
    url: 'https://jeevanrekhafoods.com/products/soybean-oil',
    siteName: 'Jeevan Rekha',
    type: 'website',
    images: [
      {
        url: 'https://jeevanrekhafoods.com/og/og_soybean_oil.jpg',
        secureUrl: 'https://jeevanrekhafoods.com/og/og_soybean_oil.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Jeevan Rekha Pure Soybean Oil Banner',
      },
      {
        url: 'https://jeevanrekhafoods.com/og/square/sq_soybean_oil.jpg',
        secureUrl: 'https://jeevanrekhafoods.com/og/square/sq_soybean_oil.jpg',
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'Jeevan Rekha Pure Soybean Oil Thumbnail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pure Soybean Oil | Jeevan Rekha',
    description: 'Light, neutral-flavoured pure soybean oil enriched with Omega-3 fatty acids.',
    images: [
      {
        url: 'https://jeevanrekhafoods.com/og/og_soybean_oil.jpg',
        secureUrl: 'https://jeevanrekhafoods.com/og/og_soybean_oil.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Jeevan Rekha Pure Soybean Oil Banner',
      },
      {
        url: 'https://jeevanrekhafoods.com/og/square/sq_soybean_oil.jpg',
        secureUrl: 'https://jeevanrekhafoods.com/og/square/sq_soybean_oil.jpg',
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'Jeevan Rekha Pure Soybean Oil Thumbnail',
      },
    ],
  },
};

export default function SoybeanOilLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
