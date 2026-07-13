import { MetadataRoute } from 'next';
import { BUSINESS_DETAILS } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS_DETAILS.website;
  const routes = [
    '',
    '/about',
    '/services',
    '/services/electrical',
    '/services/solar',
    '/services/appliances',
    '/services/kitchen',
    '/services/interior-design',
    '/services/laundry',
    '/projects',
    '/gallery',
    '/faq',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
