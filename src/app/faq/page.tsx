import { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { createMetadata } from '@/lib/seo';
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';
import { FAQS } from '@/data/faqs';
import { getWhatsappLink } from '@/lib/constants';
import FAQAccordion from '@/components/sections/FAQAccordion';
import Button from '@/components/ui/Button';

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

  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I have a question that is not covered in your FAQ section.',
  );

  return (
    <>
      <SchemaScript schema={faqSchema} />
      <SchemaScript schema={breadcrumbSchema} />

      {/* Page Header */}
      <section className="bg-navy py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="mx-auto max-w-7xl px-4 relative">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Everything you need to know about our workflow, service coverage, and installations.
          </p>
        </div>
      </section>

      {/* Interactive FAQ Accordion Component */}
      <FAQAccordion />

      {/* Conversion Banner */}
      <section className="py-16 bg-navy text-white text-center border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="mx-auto max-w-3xl px-4 relative space-y-6">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Still Have Questions?</h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            Get in touch directly with our engineering team. We are available daily from 8:00 AM to
            10:00 PM on WhatsApp.
          </p>
          <div className="pt-4">
            <Button href={whatsappUrl} variant="secondary" size="lg" external>
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-5 w-5" />
              Chat with an Engineer
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
