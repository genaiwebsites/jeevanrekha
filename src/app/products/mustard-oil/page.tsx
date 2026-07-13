import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kacchi Ghani Mustard Oil | Jeevan Rekha",
  description:
    "Jeevan Rekha Kacchi Ghani Mustard Oil — cold-pressed from premium black mustard seeds for maximum pungency, omega-3 richness, and authentic Indian flavour. FSSAI certified. Made in West Bengal.",
  keywords: [
    "Kacchi Ghani Mustard Oil",
    "cold pressed mustard oil",
    "Jeevan Rekha mustard oil",
    "sarso ka tel",
    "mustard oil cooking",
    "omega-3 mustard oil",
    "AB Udyog mustard oil",
    "FSSAI certified mustard oil",
  ],
  alternates: {
    canonical: "https://jeevanrekhafoods.com/products/mustard-oil",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jeevanrekhafoods.com/products/mustard-oil",
    siteName: "Jeevan Rekha",
    title: "Kacchi Ghani Mustard Oil | Jeevan Rekha",
    description:
      "Cold-pressed from premium black mustard seeds. Rich in omega-3, antioxidants, and authentic Indian pungency. Ideal for cooking, pickling, and hair care.",
    images: [
      {
        url: "/jr_kgmo.png",
        width: 1200,
        height: 630,
        alt: "Jeevan Rekha Kacchi Ghani Mustard Oil bottle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kacchi Ghani Mustard Oil | Jeevan Rekha",
    description:
      "Cold-pressed from premium black mustard seeds. Rich in omega-3 and antioxidants.",
    images: ["/jr_kgmo.png"],
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
  name: "Jeevan Rekha Kacchi Ghani Mustard Oil",
  image: "https://jeevanrekhafoods.com/jr_kgmo.png",
  description:
    "Cold-pressed from premium black mustard seeds, retaining natural omega-3 fatty acids, allyl isothiocyanate, and antioxidants without heat damage. FSSAI certified.",
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
    url: "https://jeevanrekhafoods.com/products/mustard-oil",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jeevanrekhafoods.com" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://jeevanrekhafoods.com/products" },
    { "@type": "ListItem", position: 3, name: "Kacchi Ghani Mustard Oil", item: "https://jeevanrekhafoods.com/products/mustard-oil" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Kacchi Ghani mustard oil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kacchi Ghani refers to cold-pressing mustard seeds at low temperature, preserving natural omega-3 fatty acids, allyl isothiocyanate, and antioxidants without heat damage.",
      },
    },
    {
      "@type": "Question",
      name: "Is Jeevan Rekha mustard oil safe for cooking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Jeevan Rekha Kacchi Ghani Mustard Oil is FSSAI certified and traditionally used across Indian cuisine for frying, tempering, and marinades.",
      },
    },
    {
      "@type": "Question",
      name: "What are the health benefits of mustard oil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mustard oil is rich in monounsaturated and polyunsaturated fats, omega-3 alpha-linolenic acid, and allyl isothiocyanate, which have anti-inflammatory and antimicrobial properties.",
      },
    },
  ],
};

export default function KgmoPage() {
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
          background: "#FEFAF5",
        }}
      >
        <iframe
          src="/standalone/kgmo/index.html"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            margin: 0,
            padding: 0,
            display: "block",
          }}
          title="Jeevan Rekha Kacchi Ghani Mustard Oil — Product Details"
          loading="lazy"
          aria-label="Kacchi Ghani Mustard Oil product page"
        />
      </div>
    </>
  );
}
