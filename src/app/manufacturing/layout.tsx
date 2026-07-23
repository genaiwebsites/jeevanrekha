import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'State-of-the-Art Oil Refining & Extraction',
  description: 'Inside our Burdwan manufacturing facility: 300 TPD Solvent Extraction and 150 TPD Physical Refining. Powered by physical purity standards, scientific engineering, and NABL-accredited labs.',
  openGraph: {
    title: 'State-of-the-Art Oil Refining & Extraction | Jeevan Rekha',
    description: 'Inside our Burdwan manufacturing facility: 300 TPD Solvent Extraction and 150 TPD Physical Refining. Powered by physical purity standards, scientific engineering, and NABL-accredited labs.',
    url: 'https://jeevanrekhafoods.com/manufacturing',
    siteName: 'Jeevan Rekha',
    type: 'website',
    images: [
      {
        url: 'https://jeevanrekhafoods.com/factory_top_view.jpg',
        secureUrl: 'https://jeevanrekhafoods.com/factory_top_view.jpg',
        width: 1200,
        height: 675,
        type: 'image/jpeg',
        alt: 'Jeevan Rekha Burdwan Manufacturing Plant Top View',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'State-of-the-Art Oil Refining & Extraction | Jeevan Rekha',
    description: 'Inside our Burdwan manufacturing facility: 300 TPD Solvent Extraction and 150 TPD Physical Refining.',
    images: ['https://jeevanrekhafoods.com/factory_top_view.jpg'],
  },
};

export default function ManufacturingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
