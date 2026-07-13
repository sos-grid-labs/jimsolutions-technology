import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';

export const metadata: Metadata = createMetadata({
  title: 'Contact Jimsolutions Technology | WhatsApp, Call, Email',
  description:
    'Reach Jimsolutions Technology for electrical wiring, solar quotes, and appliance supply setups. Contact via WhatsApp, call, or email from 8am to 10pm.',
  path: '/contact',
});

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ]);

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <div className="flex flex-1 flex-col items-center justify-center p-8 text-center min-h-[60vh]">
        <h1 className="text-4xl font-bold tracking-tight text-navy mb-4">Contact Us</h1>
        <p className="text-xl text-navy/70 max-w-2xl mb-8">
          Send us a message on WhatsApp, call, or email us. We are available daily from 8:00 AM to 10:00 PM.
        </p>
        <span className="inline-flex items-center rounded-md bg-orange/10 px-3 py-1 text-sm font-medium text-orange ring-1 ring-inset ring-orange/20">
          Contact Page Placeholder
        </span>
      </div>
    </>
  );
}
