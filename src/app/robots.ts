import { MetadataRoute } from 'next';
import { BUSINESS_DETAILS } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BUSINESS_DETAILS.website}/sitemap.xml`,
  };
}
