import { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { createMetadata } from '@/lib/seo';
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';
import { FAQS } from '@/data/faqs';
import { getWhatsappLink } from '@/lib/constants';
import FAQAccordion from '@/components/sections/FAQAccordion';

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
      <section
        className="py-20 lg:py-24 text-center relative overflow-hidden"
        style={{ background: 'var(--panel-ink)', borderBottom: '2px solid var(--orange)' }}
      >
        <div className="mx-auto max-w-7xl px-4 relative space-y-4">
          <p
            className="uppercase"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.18em',
              color: 'var(--orange)',
            }}
          >
            RESOURCE CENTRE
          </p>
          <h1
            className="font-black uppercase leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              color: '#ffffff',
              letterSpacing: '-0.01em',
            }}
          >
            Frequently Asked Questions
          </h1>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-body)' }}
          >
            Everything you need to know about our workflow, service coverage, and installations.
          </p>
        </div>
      </section>

      {/* Interactive FAQ Accordion Component */}
      <FAQAccordion />

      {/* Conversion Banner */}
      <section
        className="py-20 lg:py-24 text-center relative overflow-hidden"
        style={{ background: 'var(--panel-ink)', borderTop: '2px solid var(--orange)' }}
      >
        <div className="mx-auto max-w-3xl px-4 relative space-y-6">
          <p
            className="uppercase"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.18em',
              color: 'var(--orange)',
            }}
          >
            DIRECT Operational Channels
          </p>
          <h2
            className="font-black uppercase leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: '#ffffff',
              letterSpacing: '-0.01em',
            }}
          >
            Still Have Questions?
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Get in touch directly with our engineering team. We are available Monday to Friday, 9:00 AM to
            5:00 PM on WhatsApp.
          </p>
          <div className="pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 font-bold uppercase tracking-wider text-sm text-white"
              style={{ background: 'var(--orange)', border: '1px solid var(--orange)' }}
            >
              <FontAwesomeIcon icon={faWhatsapp} style={{ width: '15px', height: '15px' }} />
              Chat with an Engineer
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
