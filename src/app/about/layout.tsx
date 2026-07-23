import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Heritage & Story',
  description: 'AB Udyog Pvt. Ltd. combines 40+ years of rice bran industry expertise with modern refining technology at our Burdwan plant to deliver Purity, Health, and Happiness.',
  openGraph: {
    title: 'Our Heritage & Story | Jeevan Rekha',
    description: 'AB Udyog Pvt. Ltd. combines 40+ years of rice bran industry expertise with modern refining technology at our Burdwan plant to deliver Purity, Health, and Happiness.',
    url: 'https://jeevanrekhafoods.com/about',
    siteName: 'Jeevan Rekha',
    type: 'website',
    images: [
      {
        url: 'https://jeevanrekhafoods.com/og/og_about.jpg',
        secureUrl: 'https://jeevanrekhafoods.com/og/og_about.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Jeevan Rekha Burdwan Refinery Plant Entry',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Heritage & Story | Jeevan Rekha',
    description: 'AB Udyog Pvt. Ltd. combines 40+ years of rice bran industry expertise with modern refining technology.',
    images: ['https://jeevanrekhafoods.com/og/og_about.jpg'],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
