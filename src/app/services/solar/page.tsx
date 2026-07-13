import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import { getBreadcrumbSchema, getServiceSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';

export const metadata: Metadata = createMetadata({
  title: 'Solar & Inverter System Installation Lagos | Jimsolutions Technology',
  description:
    'Get stable electricity with custom solar power and inverter installation services in Lagos. Quality backup battery systems and load calculations. Quote on WhatsApp.',
  path: '/services/solar',
});

export default function SolarServicePage() {
  const serviceSchema = getServiceSchema(
    'Solar & Inverter Systems',
    'Solar panel array setup, inverter assembly, and backup battery power systems.',
    '/services/solar'
  );
  
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Solar & Inverters', url: '/services/solar' },
  ]);

  return (
    <>
      <SchemaScript schema={serviceSchema} />
      <SchemaScript schema={breadcrumbSchema} />
      <div className="flex flex-1 flex-col items-center justify-center p-8 text-center min-h-[60vh]">
        <h1 className="text-4xl font-bold tracking-tight text-navy mb-4">Solar & Inverter Systems</h1>
        <p className="text-xl text-navy/70 max-w-2xl mb-8">
          Load-calculated energy designs, solar arrays, battery backups, and clean energy configuration.
        </p>
        <span className="inline-flex items-center rounded-md bg-orange/10 px-3 py-1 text-sm font-medium text-orange ring-1 ring-inset ring-orange/20">
          Solar Service Page Placeholder
        </span>
      </div>
    </>
  );
}
