import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import { getBreadcrumbSchema, getServiceSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';

export const metadata: Metadata = createMetadata({
  title: 'Home Appliance Supply & Professional Setup Lagos | Jimsolutions Technology',
  description:
    'We supply and set up washing machines, built-in ovens, high-end refrigerators, and home theater setups with neat wiring. Serving Lagos and nationwide.',
  path: '/services/appliances',
});

export default function AppliancesServicePage() {
  const serviceSchema = getServiceSchema(
    'Home Appliances Supply & Setup',
    'Supply, placement, assembly, and neat configuration of major home appliances.',
    '/services/appliances'
  );
  
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Home Appliances', url: '/services/appliances' },
  ]);

  return (
    <>
      <SchemaScript schema={serviceSchema} />
      <SchemaScript schema={breadcrumbSchema} />
      <div className="flex flex-1 flex-col items-center justify-center p-8 text-center min-h-[60vh]">
        <h1 className="text-4xl font-bold tracking-tight text-navy mb-4">Home Appliances</h1>
        <p className="text-xl text-navy/70 max-w-2xl mb-8">
          Supply and setup of washing units, kitchen cooktops, built-in refrigeration units, and custom smart appliances.
        </p>
        <span className="inline-flex items-center rounded-md bg-orange/10 px-3 py-1 text-sm font-medium text-orange ring-1 ring-inset ring-orange/20">
          Appliances Service Page Placeholder
        </span>
      </div>
    </>
  );
}
