import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";
import JsonLd from "@/components/JsonLd";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jeevanrekhafoods.com'),
  title: {
    default: 'Jeevan Rekha Foods | Purity. Health. Happiness.',
    template: '%s | Jeevan Rekha Foods',
  },
  description: 'Jeevan Rekha Foods, a brand of AB Udyog Pvt. Ltd., brings 40+ years of expertise in producing premium Rice Bran Oil, Kacchi Ghani Mustard Oil, and Soyabean Oil. Manufactured in Burdwan, West Bengal. NABL-certified quality. Proudly made in India.',
  keywords: [
    'Jeevan Rekha Foods', 'Rice Bran Oil', 'Kacchi Ghani Mustard Oil', 'Soyabean Oil',
    'edible oil', 'cooking oil', 'cold pressed oil', 'physically refined oil',
    'AB Udyog', 'Burdwan', 'West Bengal', 'Indian cooking oil', 'healthy cooking oil',
    'NABL certified', 'Gamma Oryzanol', 'heart healthy oil',
  ],
  authors: [{ name: 'AB Udyog Pvt. Ltd.', url: 'https://jeevanrekhafoods.com' }],
  creator: 'AB Udyog Pvt. Ltd.',
  publisher: 'Jeevan Rekha Foods',
  icons: {
    icon: 'https://jeevanrekhafoods.com/wp-content/uploads/2025/04/cropped-Fav-Icon-270x270.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://jeevanrekhafoods.com',
    siteName: 'Jeevan Rekha Foods',
    title: 'Jeevan Rekha Foods | Purity. Health. Happiness.',
    description: 'Premium edible oils crafted with 40+ years of expertise. Rice Bran Oil, Kacchi Ghani Mustard Oil, and Soyabean Oil. Quality is NABL-certified, and our products are proudly made in India.',
    images: [
      {
        url: 'https://jeevanrekhafoods.com/wp-content/uploads/2024/05/JR-New-Logo-e1744100437370.png',
        width: 1200,
        height: 630,
        alt: 'Jeevan Rekha Foods Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeevan Rekha Foods | Purity. Health. Happiness.',
    description: 'Premium edible oils crafted with 40+ years of expertise. Rice Bran Oil, Kacchi Ghani Mustard Oil, and Soyabean Oil.',
    images: ['https://jeevanrekhafoods.com/wp-content/uploads/2024/05/JR-New-Logo-e1744100437370.png'],
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
      className={cn(fraunces.variable, instrumentSans.variable, jetbrainsMono.variable, "font-sans", geist.variable)}
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
      </body>
    </html>
  );
}
