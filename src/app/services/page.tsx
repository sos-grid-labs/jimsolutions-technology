import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';

export const metadata: Metadata = createMetadata({
  title: 'Services | Electrical, Solar, Appliances, Kitchens & Interiors',
  description:
    'Explore our top-tier services including electrical wiring, high-voltage solar panels setup, kitchen appliances integration, cabinet designs, and laundry spaces.',
  path: '/services',
});

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ]);

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <div className="flex flex-1 flex-col items-center justify-center p-8 text-center min-h-[60vh]">
        <h1 className="text-4xl font-bold tracking-tight text-navy mb-4">Our Services</h1>
        <p className="text-xl text-navy/70 max-w-2xl mb-8">
          We offer electrical wiring, solar inverter backup power, appliance installations, cabinet designs, interior upgrades, and utility rooms.
        </p>
        <span className="inline-flex items-center rounded-md bg-orange/10 px-3 py-1 text-sm font-medium text-orange ring-1 ring-inset ring-orange/20">
          Services Page Placeholder
        </span>
      </div>
    </>
  );
}
