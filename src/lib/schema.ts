import { BUSINESS_DETAILS } from './constants';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BUSINESS_DETAILS.website}/#organization`,
    name: BUSINESS_DETAILS.name,
    url: BUSINESS_DETAILS.website,
    logo: `${BUSINESS_DETAILS.website}/img/logo/logo.jpg`,
    email: BUSINESS_DETAILS.email,
    telephone: BUSINESS_DETAILS.phone,
    sameAs: [BUSINESS_DETAILS.instagramUrl, BUSINESS_DETAILS.tiktokUrl],
  };
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${BUSINESS_DETAILS.website}/#localbusiness`,
    name: BUSINESS_DETAILS.name,
    url: BUSINESS_DETAILS.website,
    logo: `${BUSINESS_DETAILS.website}/img/logo/logo.jpg`,
    image: `${BUSINESS_DETAILS.website}/img/logo/logo.jpg`,
    telephone: BUSINESS_DETAILS.phone,
    email: BUSINESS_DETAILS.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lagos',
      addressLocality: 'Lagos',
      addressRegion: 'Lagos State',
      addressCountry: 'NG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 6.5244,
      longitude: 3.3792,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Lagos',
      },
      {
        '@type': 'Country',
        name: 'Nigeria',
      },
    ],
  };
}

export function getServiceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: name,
    description: description,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS_DETAILS.name,
      telephone: BUSINESS_DETAILS.phone,
    },
    url: `${BUSINESS_DETAILS.website}${url}`,
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BUSINESS_DETAILS.website}${item.url}`,
    })),
  };
}
