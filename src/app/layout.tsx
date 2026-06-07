import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";
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
  title: "Jeevan Rekha Foods — Purity. Health. Happiness.",
  description: "A brand of AB Udyog Pvt. Ltd. Bringing 40+ years of industry expertise to every household. Manufactured in Burdwan. Proudly made in India.",
  icons: {
    icon: "https://jeevanrekhafoods.com/wp-content/uploads/2025/04/cropped-Fav-Icon-270x270.png",
  },
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
