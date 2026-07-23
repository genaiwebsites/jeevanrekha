import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium Kacchi Ghani Mustard Oil',
  description: 'Pure cold-pressed kacchi ghani mustard oil with authentic pungency, natural MUFA/PUFA, and antioxidants. FSSAI and NABL certified cooking oil.',
  openGraph: {
    title: 'Premium Kacchi Ghani Mustard Oil | Jeevan Rekha',
    description: 'Pure cold-pressed kacchi ghani mustard oil with authentic pungency, natural MUFA/PUFA, and antioxidants. FSSAI and NABL certified cooking oil.',
    url: 'https://jeevanrekhafoods.com/products/mustard-oil',
    siteName: 'Jeevan Rekha',
    type: 'website',
    images: [
      {
        url: 'https://jeevanrekhafoods.com/jr_kgmo.png',
        secureUrl: 'https://jeevanrekhafoods.com/jr_kgmo.png',
        width: 1200,
        height: 1200,
        type: 'image/png',
        alt: 'Jeevan Rekha Kacchi Ghani Mustard Oil Pack',
      },
      {
        url: 'https://jeevanrekhafoods.com/banners/product_banner_kgmo.jpeg',
        secureUrl: 'https://jeevanrekhafoods.com/banners/product_banner_kgmo.jpeg',
        width: 1200,
        height: 600,
        type: 'image/jpeg',
        alt: 'Jeevan Rekha Kacchi Ghani Mustard Oil Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Kacchi Ghani Mustard Oil | Jeevan Rekha',
    description: 'Pure cold-pressed kacchi ghani mustard oil with authentic pungency, natural MUFA/PUFA, and antioxidants.',
    images: ['https://jeevanrekhafoods.com/jr_kgmo.png'],
  },
};

export default function MustardOilLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
