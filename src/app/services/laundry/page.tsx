import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import { getBreadcrumbSchema, getServiceSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';

export const metadata: Metadata = createMetadata({
  title: 'Custom Utility & Laundry Space Setup Lagos | Jimsolutions Technology',
  description:
    'Professional laundry room setups with washer/dryer hookups, built-in cabinets, ventilation routing, and laundry equipment supply in Lagos. Free quote.',
  path: '/services/laundry',
});

export default function LaundryServicePage() {
  const serviceSchema = getServiceSchema(
    'Laundry Space Setup',
    'Procuring, plumbing, and arranging efficient utility room setups for washers, dryers, and ironers.',
    '/services/laundry'
  );
  
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Laundry Setup', url: '/services/laundry' },
  ]);

  return (
    <>
      <SchemaScript schema={serviceSchema} />
      <SchemaScript schema={breadcrumbSchema} />
      <div className="flex flex-1 flex-col items-center justify-center p-8 text-center min-h-[60vh]">
        <h1 className="text-4xl font-bold tracking-tight text-navy mb-4">Laundry Space Setup</h1>
        <p className="text-xl text-navy/70 max-w-2xl mb-8">
          Utility room configurations, washer-dryer stacks, ventilation line connections, and plumbing setups.
        </p>
        <span className="inline-flex items-center rounded-md bg-orange/10 px-3 py-1 text-sm font-medium text-orange ring-1 ring-inset ring-orange/20">
          Laundry Service Page Placeholder
        </span>
      </div>
    </>
  );
}
