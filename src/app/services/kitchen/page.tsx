import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import { getBreadcrumbSchema, getServiceSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';

export const metadata: Metadata = createMetadata({
  title: 'Modern Kitchen Cabinets & Cooktop Installation Lagos | Jimsolutions Technology',
  description:
    'Get high-end kitchen layout plans, modern cabinets, downdraft extractors, and built-in appliance setup in Lagos. Handcrafted quality designs.',
  path: '/services/kitchen',
});

export default function KitchenServicePage() {
  const serviceSchema = getServiceSchema(
    'Kitchen Installation',
    'Custom kitchen layouts, premium cabinets configuration, and smart appliance integration.',
    '/services/kitchen'
  );
  
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Kitchen Installation', url: '/services/kitchen' },
  ]);

  return (
    <>
      <SchemaScript schema={serviceSchema} />
      <SchemaScript schema={breadcrumbSchema} />
      <div className="flex flex-1 flex-col items-center justify-center p-8 text-center min-h-[60vh]">
        <h1 className="text-4xl font-bold tracking-tight text-navy mb-4">Kitchen Installation</h1>
        <p className="text-xl text-navy/70 max-w-2xl mb-8">
          Cabinet layout planning, island cooktops configuration, and integrated appliances.
        </p>
        <span className="inline-flex items-center rounded-md bg-orange/10 px-3 py-1 text-sm font-medium text-orange ring-1 ring-inset ring-orange/20">
          Kitchen Service Page Placeholder
        </span>
      </div>
    </>
  );
}
