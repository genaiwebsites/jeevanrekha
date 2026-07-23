import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us & Trade Enquiries',
  description: 'Get in touch with AB Udyog Pvt. Ltd. regarding retail distribution, trade enquiries, bulk orders, or customer support. Offices in Kolkata, factory in Burdwan.',
  openGraph: {
    title: 'Contact Us & Trade Enquiries | Jeevan Rekha',
    description: 'Get in touch with AB Udyog Pvt. Ltd. regarding retail distribution, trade enquiries, bulk orders, or customer support. Offices in Kolkata, factory in Burdwan.',
    url: 'https://jeevanrekhafoods.com/contact',
    siteName: 'Jeevan Rekha',
    type: 'website',
    images: [
      {
        url: 'https://jeevanrekhafoods.com/factory_top_view.jpg',
        secureUrl: 'https://jeevanrekhafoods.com/factory_top_view.jpg',
        width: 1200,
        height: 675,
        type: 'image/jpeg',
        alt: 'Jeevan Rekha Burdwan Production Facility',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us & Trade Enquiries | Jeevan Rekha',
    description: 'Get in touch with AB Udyog Pvt. Ltd. regarding retail distribution, trade enquiries, or bulk orders.',
    images: ['https://jeevanrekhafoods.com/factory_top_view.jpg'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
