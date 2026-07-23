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
        url: 'https://jeevanrekhafoods.com/og/og_contact.jpg',
        secureUrl: 'https://jeevanrekhafoods.com/og/og_contact.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Jeevan Rekha Contact Us & Trade Enquiries Banner',
      },
      {
        url: 'https://jeevanrekhafoods.com/og/square/sq_contact.jpg',
        secureUrl: 'https://jeevanrekhafoods.com/og/square/sq_contact.jpg',
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'Jeevan Rekha Contact Us & Trade Enquiries Thumbnail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us & Trade Enquiries | Jeevan Rekha',
    description: 'Get in touch with AB Udyog Pvt. Ltd. regarding retail distribution, trade enquiries, or bulk orders.',
    images: [
      {
        url: 'https://jeevanrekhafoods.com/og/og_contact.jpg',
        secureUrl: 'https://jeevanrekhafoods.com/og/og_contact.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Jeevan Rekha Contact Us & Trade Enquiries Banner',
      },
      {
        url: 'https://jeevanrekhafoods.com/og/square/sq_contact.jpg',
        secureUrl: 'https://jeevanrekhafoods.com/og/square/sq_contact.jpg',
        width: 800,
        height: 800,
        type: 'image/jpeg',
        alt: 'Jeevan Rekha Contact Us & Trade Enquiries Thumbnail',
      },
    ],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
