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
        url: 'https://jeevanrekhafoods.com/og/og_mustard_oil.jpg',
        secureUrl: 'https://jeevanrekhafoods.com/og/og_mustard_oil.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Jeevan Rekha Kacchi Ghani Mustard Oil Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Kacchi Ghani Mustard Oil | Jeevan Rekha',
    description: 'Pure cold-pressed kacchi ghani mustard oil with authentic pungency, natural MUFA/PUFA, and antioxidants.',
    images: ['https://jeevanrekhafoods.com/og/og_mustard_oil.jpg'],
  },
};

export default function MustardOilLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
