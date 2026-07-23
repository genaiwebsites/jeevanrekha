export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Jeevan Rekha',
    alternateName: 'AB Udyog Pvt. Ltd.',
    url: 'https://jeevanrekhafoods.com',
    logo: '/jeevan-rekha-logo.png',
    description:
      'Premium edible oil manufacturer with 40+ years of expertise. Producing NABL-certified Rice Bran Oil, Kacchi Ghani Mustard Oil, and Soybean Oil.',
    foundingDate: '2019',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Satgachia, Memari',
      addressLocality: 'Burdwan',
      addressRegion: 'West Bengal',
      postalCode: '713146',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9434400789',
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Bengali'],
    },
    sameAs: [
      'https://jeevanrekhafoods.com',
      'https://www.indiamart.com/abudyog/',
      'https://www.flipkart.com/jeevanrekha-premium-kacchi-ghani-pure-mustard-oil-pouch/p/itmdf9320ba020dc?pid=EDOHNCJQRZPPFJJN',
      'https://www.flipkart.com/jeevanrekha-refined-rice-bran-oil-12000-ppm-oryzanol-pouch-daily-cooking/p/itmaf945e60600db?pid=EDOHNCJRF6CXDCY4',
      'https://www.flipkart.com/jeevanrekha-premium-kacchi-ghani-pure-mustard-oil-5-litre-jar/p/itme5ca42178f49c?pid=EDOHNMWAXPY4HCF8',
      'https://www.flipkart.com/jeevanrekha-refined-jar-12000-ppm-oryzanol-daily-cooking-rice-bran-oil/p/itmb4215dac74f13?pid=EDOHNCJRTN9QZYYY',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Edible Oils',
      itemListElement: [
        {
          '@type': 'Product',
          name: 'Physically Refined Rice Bran Oil',
          description: 'Physically refined to retain natural antioxidants with a 232°C smoke point. Rich in Gamma-Oryzanol and Vitamin E.',
          brand: { '@type': 'Brand', name: 'Jeevan Rekha' },
          category: 'Edible Oil',
          url: 'https://jeevanrekhafoods.com/products/rice-bran-oil',
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'INR',
            lowPrice: '165.00',
            highPrice: '780.00',
            offerCount: '2',
            offers: [
              {
                '@type': 'Offer',
                name: '1-Litre Pouch',
                price: '165.00',
                priceCurrency: 'INR',
                availability: 'https://schema.org/InStock',
                url: 'https://www.flipkart.com/jeevanrekha-refined-rice-bran-oil-12000-ppm-oryzanol-pouch-daily-cooking/p/itmaf945e60600db?pid=EDOHNCJRF6CXDCY4',
                seller: { '@type': 'Organization', name: 'Flipkart' },
              },
              {
                '@type': 'Offer',
                name: '5-Litre Jar',
                price: '780.00',
                priceCurrency: 'INR',
                availability: 'https://schema.org/InStock',
                url: 'https://www.flipkart.com/jeevanrekha-refined-jar-12000-ppm-oryzanol-daily-cooking-rice-bran-oil/p/itmb4215dac74f13?pid=EDOHNCJRTN9QZYYY',
                seller: { '@type': 'Organization', name: 'Flipkart' },
              },
            ],
          },
        },
        {
          '@type': 'Product',
          name: 'Kacchi Ghani Mustard Oil',
          description: 'Traditional cold-pressed from premium black mustard seeds. No heat, no chemicals, just pure nature.',
          brand: { '@type': 'Brand', name: 'Jeevan Rekha' },
          category: 'Edible Oil',
          url: 'https://jeevanrekhafoods.com/products/mustard-oil',
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'INR',
            lowPrice: '155.00',
            highPrice: '750.00',
            offerCount: '2',
            offers: [
              {
                '@type': 'Offer',
                name: '1-Litre Pouch',
                price: '155.00',
                priceCurrency: 'INR',
                availability: 'https://schema.org/InStock',
                url: 'https://www.flipkart.com/jeevanrekha-premium-kacchi-ghani-pure-mustard-oil-pouch/p/itmdf9320ba020dc?pid=EDOHNCJQRZPPFJJN',
                seller: { '@type': 'Organization', name: 'Flipkart' },
              },
              {
                '@type': 'Offer',
                name: '5-Litre Jar',
                price: '750.00',
                priceCurrency: 'INR',
                availability: 'https://schema.org/InStock',
                url: 'https://www.flipkart.com/jeevanrekha-premium-kacchi-ghani-pure-mustard-oil-5-litre-jar/p/itme5ca42178f49c?pid=EDOHNMWAXPY4HCF8',
                seller: { '@type': 'Organization', name: 'Flipkart' },
              },
            ],
          },
        },
        {
          '@type': 'Product',
          name: 'Refined Soybean Oil',
          description: 'Light, neutral-flavoured and packed with Omega-3 fatty acids. A versatile all-purpose oil.',
          brand: { '@type': 'Brand', name: 'Jeevan Rekha' },
          category: 'Edible Oil',
          url: 'https://jeevanrekhafoods.com/products/soybean-oil',
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            url: 'https://jeevanrekhafoods.com/contact',
          },
        },
      ],
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Jeevan Rekha',
    url: 'https://jeevanrekhafoods.com',
    publisher: {
      '@type': 'Organization',
      name: 'Jeevan Rekha',
      logo: {
        '@type': 'ImageObject',
        url: '/jeevan-rekha-logo.png',
      },
    },
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://jeevanrekhafoods.com/#business',
    name: 'Jeevan Rekha — AB Udyog Pvt. Ltd.',
    image: '/jeevan-rekha-logo.png',
    telephone: '+91-9434400789',
    email: 'info@jeevanrekhafoods.com',
    url: 'https://jeevanrekhafoods.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Satgachia, Memari',
      addressLocality: 'Burdwan',
      addressRegion: 'West Bengal',
      postalCode: '713146',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 23.1752,
      longitude: 88.1074,
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  )
}

