import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import { getBreadcrumbSchema, getServiceSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';

export const metadata: Metadata = createMetadata({
  title: 'Premium Interior Design & Space Planning Nigeria | Jimsolutions Technology',
  description:
    'Create clean, practical interior upgrades with custom styling, custom partitions, and lighting solutions. Home and office renovations in Lagos.',
  path: '/services/interior-design',
});

export default function InteriorDesignServicePage() {
  const serviceSchema = getServiceSchema(
    'Interior Design Support',
    'Creative styling, partition panel setups, and lighting configurations for clean spaces.',
    '/services/interior-design'
  );
  
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Interior Design', url: '/services/interior-design' },
  ]);

  return (
    <>
      <SchemaScript schema={serviceSchema} />
      <SchemaScript schema={breadcrumbSchema} />
      <div className="flex flex-1 flex-col items-center justify-center p-8 text-center min-h-[60vh]">
        <h1 className="text-4xl font-bold tracking-tight text-navy mb-4">Interior Design</h1>
        <p className="text-xl text-navy/70 max-w-2xl mb-8">
          Drywall setups, custom media setups, custom lighting integration, and space design.
        </p>
        <span className="inline-flex items-center rounded-md bg-orange/10 px-3 py-1 text-sm font-medium text-orange ring-1 ring-inset ring-orange/20">
          Interior Design Service Page Placeholder
        </span>
      </div>
    </>
  );
}
