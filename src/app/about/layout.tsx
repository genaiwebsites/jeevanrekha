import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Heritage & Story',
  description: 'AB Udyog Pvt. Ltd. combines 40+ years of rice bran industry expertise with modern refining technology at our Burdwan plant to deliver Purity, Health, and Happiness.',
  openGraph: {
    title: 'Our Heritage & Story | Jeevan Rekha',
    description: 'AB Udyog Pvt. Ltd. combines 40+ years of rice bran industry expertise with modern refining technology at our Burdwan plant to deliver Purity, Health, and Happiness.',
    url: 'https://jeevanrekhafoods.com/about',
    images: [
      {
        url: '/product_range.jpeg',
        width: 1200,
        height: 600,
        alt: 'Jeevan Rekha Corporate Heritage and Story',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Heritage & Story | Jeevan Rekha',
    description: 'AB Udyog Pvt. Ltd. combines 40+ years of rice bran industry expertise with modern refining technology.',
    images: ['/product_range.jpeg'],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
