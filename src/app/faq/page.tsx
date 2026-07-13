import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';
import { FAQS } from '@/data/faqs';

export const metadata: Metadata = createMetadata({
  title: 'Frequently Asked Questions | Jimsolutions Technology',
  description:
    'Got questions? Read FAQ about our solar capacity requirements, appliance installations, service hours, and Lagos and nationwide coverage options.',
  path: '/faq',
});

export default function FAQPage() {
  const faqSchema = getFAQSchema(FAQS);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'FAQ', url: '/faq' },
  ]);

  return (
    <>
      <SchemaScript schema={faqSchema} />
      <SchemaScript schema={breadcrumbSchema} />
      <div className="flex flex-1 flex-col items-center justify-center p-8 text-center min-h-[60vh]">
        <h1 className="text-4xl font-bold tracking-tight text-navy mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-navy/70 max-w-2xl mb-8">
          Answers to common questions about solar setup, appliance connection, service areas, and operations.
        </p>
        <span className="inline-flex items-center rounded-md bg-orange/10 px-3 py-1 text-sm font-medium text-orange ring-1 ring-inset ring-orange/20">
          FAQ Page Placeholder
        </span>
      </div>
    </>
  );
}
