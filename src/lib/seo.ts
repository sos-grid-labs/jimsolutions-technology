import { Metadata } from 'next';
import { BUSINESS_DETAILS } from './constants';

interface MetadataInput {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function createMetadata({
  title,
  description,
  path,
  ogImage = '/img/logo/logo.jpg',
  noIndex = false,
}: MetadataInput): Metadata {
  const url = `${BUSINESS_DETAILS.website}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${BUSINESS_DETAILS.name}`,
      description,
      url,
      images: [
        {
          url: ogImage,
          width: 800,
          height: 800,
          alt: BUSINESS_DETAILS.name,
        },
      ],
    },
    twitter: {
      title: `${title} | ${BUSINESS_DETAILS.name}`,
      description,
      images: [ogImage],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
