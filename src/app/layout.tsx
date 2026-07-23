import type { Metadata } from "next";
import { Lora, Kumbh_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import "./products/mustard-oil/mustard-oil.css";
import "./products/rice-bran-oil/rice-bran-oil.css";
import "./products/soybean-oil/soybean-oil.css";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";
import JsonLd from "@/components/JsonLd";
import { cn } from "@/lib/utils";
import { Analytics } from '@vercel/analytics/next';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const kumbhSans = Kumbh_Sans({
  variable: "--font-kumbh-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'https://jeevanrekhafoods.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Jeevan Rekha | Purity. Health. Happiness.',
    template: '%s | Jeevan Rekha',
  },
  description: 'Jeevan Rekha, a brand of AB Udyog Pvt. Ltd., brings 40+ years of expertise in producing premium Rice Bran Oil, Kacchi Ghani Mustard Oil, and Soybean Oil. Manufactured in Burdwan, West Bengal. NABL-certified quality. Proudly made in India.',
  keywords: [
    'Jeevan Rekha', 'Rice Bran Oil', 'Kacchi Ghani Mustard Oil', 'Soybean Oil',
    'edible oil', 'cooking oil', 'cold pressed oil', 'physically refined oil',
    'AB Udyog', 'Burdwan', 'West Bengal', 'Indian cooking oil', 'healthy cooking oil',
    'NABL certified', 'Gamma Oryzanol', 'heart healthy oil',
  ],
  authors: [{ name: 'AB Udyog Pvt. Ltd.', url: 'https://jeevanrekhafoods.com' }],
  creator: 'AB Udyog Pvt. Ltd.',
  publisher: 'Jeevan Rekha',
  icons: {
    icon: [
      { url: '/jeevan-rekha-favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/jeevan-rekha-apple-icon.png', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://jeevanrekhafoods.com',
    siteName: 'Jeevan Rekha',
    title: 'Jeevan Rekha | Purity. Health. Happiness.',
    description: 'Premium edible oils crafted with 40+ years of expertise. Rice Bran Oil, Kacchi Ghani Mustard Oil, and Soybean Oil. Quality is NABL-certified, and our products are proudly made in India.',
    images: [
      {
        url: 'https://jeevanrekhafoods.com/jeevan-rekha-product-range.jpeg',
        secureUrl: 'https://jeevanrekhafoods.com/jeevan-rekha-product-range.jpeg',
        width: 1200,
        height: 526,
        type: 'image/jpeg',
        alt: 'Jeevan Rekha Premium Edible Oils Product Range Showcase Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeevan Rekha | Purity. Health. Happiness.',
    description: 'Premium edible oils crafted with 40+ years of expertise. Rice Bran Oil, Kacchi Ghani Mustard Oil, and Soybean Oil.',
    images: ['https://jeevanrekhafoods.com/jeevan-rekha-product-range.jpeg'],
  },
  alternates: {
    canonical: 'https://jeevanrekhafoods.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Food & Beverages',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(lora.variable, kumbhSans.variable, ibmPlexMono.variable)}
    >
      <head>
        <JsonLd />
      </head>
      <body>
        {/* Universal SVG Marker for all Pipeline Arrows */}
        <svg style={{ width: 0, height: 0, position: 'absolute' }} aria-hidden="true">
          <defs>
            <marker id="arrow-oil" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 2 L 6 5 L 0 8 z" fill="var(--c-oil)" />
            </marker>
          </defs>
        </svg>

        <CustomCursor />
        <Navbar />
        <ScrollRevealObserver />
        <main id="app">
          {children}
        </main>
        <Footer />
        <Analytics />
        <GoogleTagManager gtmId="GTM-NNPQ73JP" />
        <GoogleAnalytics gaId="G-ZZHTK4M9DW" />
      </body>
    </html>
  );
}
