import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rice Bran Oil — Purity, Health & Happiness | Jeevan Rekha",
  description:
    "Jeevan Rekha Rice Bran Oil — physically refined with a 232°C smoke point, rich in Gamma-Oryzanol and Vitamin E. India's healthiest choice for high-heat cooking. FSSAI certified, made in West Bengal.",
  keywords: [
    "Rice Bran Oil",
    "Jeevan Rekha Rice Bran Oil",
    "physically refined rice bran oil",
    "gamma oryzanol oil",
    "high smoke point cooking oil",
    "heart healthy cooking oil",
    "AB Udyog rice bran oil",
    "FSSAI certified edible oil",
  ],
  alternates: {
    canonical: "https://jeevanrekhafoods.com/products/rice-bran-oil",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jeevanrekhafoods.com/products/rice-bran-oil",
    siteName: "Jeevan Rekha",
    title: "Rice Bran Oil — Purity, Health & Happiness | Jeevan Rekha",
    description:
      "Physically refined with a 232°C smoke point, rich in Gamma-Oryzanol and Vitamin E. India's healthiest choice for high-heat frying and daily cooking.",
    images: [
      {
        url: "/jr_rbo.png",
        width: 1200,
        height: 630,
        alt: "Jeevan Rekha Rice Bran Oil bottle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rice Bran Oil — Purity, Health & Happiness | Jeevan Rekha",
    description:
      "232°C smoke point. Rich in Gamma-Oryzanol and Vitamin E. India's healthiest cooking oil.",
    images: ["/jr_rbo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Jeevan Rekha Rice Bran Oil",
  image: "https://jeevanrekhafoods.com/jr_rbo.png",
  description:
    "Physically refined rice bran oil with a 232°C smoke point. Rich in Gamma-Oryzanol, Vitamin E tocotrienols, and natural antioxidants. FSSAI certified.",
  brand: { "@type": "Brand", name: "Jeevan Rekha" },
  manufacturer: {
    "@type": "Organization",
    name: "AB Udyog Private Limited",
    url: "https://jeevanrekhafoods.com",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "INR",
    url: "https://jeevanrekhafoods.com/products/rice-bran-oil",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jeevanrekhafoods.com" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://jeevanrekhafoods.com/products" },
    { "@type": "ListItem", position: 3, name: "Rice Bran Oil", item: "https://jeevanrekhafoods.com/products/rice-bran-oil" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why is rice bran oil considered healthy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rice bran oil contains Gamma-Oryzanol, Vitamin E tocotrienols, and a balanced fatty-acid profile that may help maintain healthy cholesterol levels and support cardiovascular health.",
      },
    },
    {
      "@type": "Question",
      name: "What is the smoke point of Jeevan Rekha Rice Bran Oil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It has a high smoke point of approximately 232°C (450°F), making it excellent for high-heat frying, stir-frying, and deep-frying without producing harmful compounds.",
      },
    },
    {
      "@type": "Question",
      name: "What is physical refining in rice bran oil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Physical refining uses steam distillation instead of chemical solvents to remove free fatty acids, preserving more of the natural antioxidants like Gamma-Oryzanol and Vitamin E.",
      },
    },
  ],
};

export default function RboPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div
        style={{
          width: "100%",
          height: "calc(100dvh - 0px)",
          margin: 0,
          padding: 0,
          overflow: "hidden",
          background: "#FBF8FF",
        }}
      >
        <iframe
          src="/standalone/rbo/index.html"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            margin: 0,
            padding: 0,
            display: "block",
          }}
          title="Jeevan Rekha Rice Bran Oil — Product Details"
          loading="lazy"
          aria-label="Rice Bran Oil product page"
        />
      </div>
    </>
  );
}
