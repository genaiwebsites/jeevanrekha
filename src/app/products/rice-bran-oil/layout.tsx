import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Physically Refined Rice Bran Oil',
  description: '100% physically refined rice bran oil with 14,000 PPM Gamma-Oryzanol and Vitamin E. Perfect heart-healthy cooking oil with a high smoke point (232°C).',
  openGraph: {
    title: 'Physically Refined Rice Bran Oil | Jeevan Rekha',
    description: '100% physically refined rice bran oil with 14,000 PPM Gamma-Oryzanol and Vitamin E. Perfect heart-healthy cooking oil with a high smoke point (232°C).',
    url: 'https://jeevanrekhafoods.com/products/rice-bran-oil',
    siteName: 'Jeevan Rekha',
    type: 'website',
    images: [
      {
        url: 'https://jeevanrekhafoods.com/og/og_rice_bran_oil.jpg',
        secureUrl: 'https://jeevanrekhafoods.com/og/og_rice_bran_oil.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Jeevan Rekha Physically Refined Rice Bran Oil Banner',
      },
      {
        url: 'https://jeevanrekhafoods.com/og/square/sq_rice_bran_oil.jpg',
        secureUrl: 'https://jeevanrekhafoods.com/og/square/sq_rice_bran_oil.jpg',
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'Jeevan Rekha Physically Refined Rice Bran Oil Thumbnail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Physically Refined Rice Bran Oil | Jeevan Rekha',
    description: '100% physically refined rice bran oil with 14,000 PPM Gamma-Oryzanol and Vitamin E.',
    images: [
      {
        url: 'https://jeevanrekhafoods.com/og/og_rice_bran_oil.jpg',
        secureUrl: 'https://jeevanrekhafoods.com/og/og_rice_bran_oil.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Jeevan Rekha Physically Refined Rice Bran Oil Banner',
      },
      {
        url: 'https://jeevanrekhafoods.com/og/square/sq_rice_bran_oil.jpg',
        secureUrl: 'https://jeevanrekhafoods.com/og/square/sq_rice_bran_oil.jpg',
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'Jeevan Rekha Physically Refined Rice Bran Oil Thumbnail',
      },
    ],
  },
  alternates: {
    canonical: 'https://jeevanrekhafoods.com/products/rice-bran-oil',
  },
};

export default function RiceBranOilLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
