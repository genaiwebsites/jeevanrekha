import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium Kacchi Ghani Mustard Oil',
  description: 'Pure cold-pressed kacchi ghani mustard oil with authentic pungency, natural MUFA/PUFA, and antioxidants. FSSAI and NABL certified cooking oil.',
  openGraph: {
    title: 'Premium Kacchi Ghani Mustard Oil | Jeevan Rekha',
    description: 'Pure cold-pressed kacchi ghani mustard oil with authentic pungency, natural MUFA/PUFA, and antioxidants. FSSAI and NABL certified cooking oil.',
    url: 'https://jeevanrekhafoods.com/products/mustard-oil',
    images: [
      {
        url: '/banners/product_banner_kgmo.jpeg',
        width: 1200,
        height: 600,
        alt: 'Jeevan Rekha Kacchi Ghani Mustard Oil Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Kacchi Ghani Mustard Oil | Jeevan Rekha',
    description: 'Pure cold-pressed kacchi ghani mustard oil with authentic pungency, natural MUFA/PUFA, and antioxidants.',
    images: ['/banners/product_banner_kgmo.jpeg'],
  },
};

export default function MustardOilLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
