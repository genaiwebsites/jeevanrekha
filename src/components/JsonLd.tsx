export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Jeevan Rekha Foods',
    alternateName: 'AB Udyog Pvt. Ltd.',
    url: 'https://jeevanrekhafoods.com',
    logo: '/jr_logo_transparent.png',
    description:
      'Premium edible oil manufacturer with 40+ years of expertise. Producing NABL-certified Rice Bran Oil, Kacchi Ghani Mustard Oil, and Soyabean Oil.',
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
        },
        {
          '@type': 'Product',
          name: 'Kacchi Ghani Mustard Oil',
          description: 'Traditional cold-pressed from premium black mustard seeds. No heat, no chemicals, just pure nature.',
          brand: { '@type': 'Brand', name: 'Jeevan Rekha' },
          category: 'Edible Oil',
        },
        {
          '@type': 'Product',
          name: 'Refined Soyabean Oil',
          description: 'Light, neutral-flavoured and packed with Omega-3 fatty acids. A versatile all-purpose oil.',
          brand: { '@type': 'Brand', name: 'Jeevan Rekha' },
          category: 'Edible Oil',
        },
      ],
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Jeevan Rekha Foods',
    url: 'https://jeevanrekhafoods.com',
    publisher: {
      '@type': 'Organization',
      name: 'Jeevan Rekha Foods',
      logo: {
        '@type': 'ImageObject',
        url: '/jr_logo_transparent.png',
      },
    },
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://jeevanrekhafoods.com/#business',
    name: 'Jeevan Rekha Foods — AB Udyog Pvt. Ltd.',
    image: '/jr_logo_transparent.png',
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
