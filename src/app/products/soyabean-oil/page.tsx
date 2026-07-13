import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soyabean Oil — Heart of Every Healthy Meal | Jeevan Rekha",
  description:
    "Jeevan Rekha Soyabean Oil — light, neutral, and rich in omega-6, Vitamin E, and phytosterols. Versatile for frying, baking, and everyday cooking. FSSAI certified, made in West Bengal.",
  keywords: [
    "Soyabean Oil",
    "Jeevan Rekha Soyabean Oil",
    "refined soybean oil",
    "omega-6 cooking oil",
    "Vitamin E cooking oil",
    "neutral cooking oil",
    "AB Udyog soyabean oil",
    "FSSAI certified soyabean oil",
  ],
  alternates: {
    canonical: "https://jeevanrekhafoods.com/products/soyabean-oil",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jeevanrekhafoods.com/products/soyabean-oil",
    siteName: "Jeevan Rekha",
    title: "Soyabean Oil — Heart of Every Healthy Meal | Jeevan Rekha",
    description:
      "Light and neutral soyabean oil rich in omega-6, Vitamin E, and phytosterols. Versatile for frying, baking, and everyday Indian cooking.",
    images: [
      {
        url: "/jr_sbo.png",
        width: 1200,
        height: 630,
        alt: "Jeevan Rekha Soyabean Oil pouch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soyabean Oil — Heart of Every Healthy Meal | Jeevan Rekha",
    description:
      "Light, neutral, rich in omega-6 and Vitamin E. Versatile for all cooking needs.",
    images: ["/jr_sbo.png"],
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
  name: "Jeevan Rekha Soyabean Oil",
  image: "https://jeevanrekhafoods.com/jr_sbo.png",
  description:
    "Light and neutral soyabean oil rich in omega-6 linoleic acid, Vitamin E, and phytosterols. Versatile for frying, baking, and everyday cooking. FSSAI certified.",
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
    url: "https://jeevanrekhafoods.com/products/soyabean-oil",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jeevanrekhafoods.com" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://jeevanrekhafoods.com/products" },
    { "@type": "ListItem", position: 3, name: "Soyabean Oil", item: "https://jeevanrekhafoods.com/products/soyabean-oil" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Jeevan Rekha Soyabean Oil suitable for deep frying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. With a smoke point around 232°C, Jeevan Rekha Soyabean Oil handles high-heat frying without breaking down into harmful compounds.",
      },
    },
    {
      "@type": "Question",
      name: "What are the nutritional benefits of soyabean oil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Soyabean oil is high in omega-6 linoleic acid, Vitamin E tocopherols, and phytosterols, which together support cardiovascular health and healthy cholesterol levels.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Jeevan Rekha Soyabean Oil different?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jeevan Rekha Soyabean Oil is produced under FSSAI-certified processes by AB Udyog Pvt. Ltd., a manufacturer with 40+ years of expertise in edible oil production in West Bengal.",
      },
    },
  ],
};

export default function SboPage() {
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
          background: "#F6FBF7",
        }}
      >
        <iframe
          src="/standalone/sbo/index.html"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            margin: 0,
            padding: 0,
            display: "block",
          }}
          title="Jeevan Rekha Soyabean Oil — Product Details"
          loading="lazy"
          aria-label="Soyabean Oil product page"
        />
      </div>
    </>
  );
}
