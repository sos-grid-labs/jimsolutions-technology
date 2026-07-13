import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import { getBreadcrumbSchema, getServiceSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';

export const metadata: Metadata = createMetadata({
  title: 'Professional Electrical Services in Lagos | Jimsolutions Technology',
  description:
    'Need a reliable electrician in Lagos? We provide electrical wiring, fault diagnostics, circuit repairs, and custom home automation setups. Contact us today!',
  path: '/services/electrical',
});

export default function ElectricalServicePage() {
  const serviceSchema = getServiceSchema(
    'Electrical Services',
    'Comprehensive electrical services including wiring, troubleshooting, repairs, and installations.',
    '/services/electrical'
  );
  
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Electrical', url: '/services/electrical' },
  ]);

  return (
    <>
      <SchemaScript schema={serviceSchema} />
      <SchemaScript schema={breadcrumbSchema} />
      <div className="flex flex-1 flex-col items-center justify-center p-8 text-center min-h-[60vh]">
        <h1 className="text-4xl font-bold tracking-tight text-navy mb-4">Electrical Services</h1>
        <p className="text-xl text-navy/70 max-w-2xl mb-8">
          Complete wiring/rewiring, fault diagnostics, breaker fixes, and safety audits.
        </p>
        <span className="inline-flex items-center rounded-md bg-orange/10 px-3 py-1 text-sm font-medium text-orange ring-1 ring-inset ring-orange/20">
          Electrical Service Page Placeholder
        </span>
      </div>
    </>
  );
}
