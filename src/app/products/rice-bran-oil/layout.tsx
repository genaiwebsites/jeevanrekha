import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Physically Refined Rice Bran Oil',
  description: '100% physically refined rice bran oil with 14,000 PPM Gamma-Oryzanol and Vitamin E. Perfect heart-healthy cooking oil with a high smoke point (232°C).',
  openGraph: {
    title: 'Physically Refined Rice Bran Oil | Jeevan Rekha',
    description: '100% physically refined rice bran oil with 14,000 PPM Gamma-Oryzanol and Vitamin E. Perfect heart-healthy cooking oil with a high smoke point (232°C).',
    url: 'https://jeevanrekhafoods.com/products/rice-bran-oil',
    images: [
      {
        url: '/banners/product_banner_rbo.jpeg',
        width: 1200,
        height: 600,
        alt: 'Jeevan Rekha Physically Refined Rice Bran Oil Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Physically Refined Rice Bran Oil | Jeevan Rekha',
    description: '100% physically refined rice bran oil with 14,000 PPM Gamma-Oryzanol and Vitamin E.',
    images: ['/banners/product_banner_rbo.jpeg'],
  },
};

export default function RiceBranOilLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
