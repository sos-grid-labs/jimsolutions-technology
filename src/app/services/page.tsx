import { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { createMetadata } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';
import ServicesGrid from '@/components/sections/ServicesGrid';
import { getWhatsappLink } from '@/lib/constants';

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

  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I need a technical consultation/load assessment for my property.',
  );

  return (
    <>
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
            OUR EXPERTISE
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
            Our Services
          </h1>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-body)' }}
          >
            Professional technical execution for power, kitchens, laundry, and interior upgrades.
          </p>
        </div>
      </section>

      {/* Services Grid Component */}
      <ServicesGrid />

      {/* Load Sizing Advisory Callout */}
      <section
        className="py-20 lg:py-24 text-center relative overflow-hidden animate-fade-in"
        style={{ background: 'var(--panel-ink)', borderTop: '2px solid var(--orange)' }}
      >
        <div className="mx-auto max-w-4xl px-4 relative space-y-6">
          <div
            className="inline-flex items-center justify-center mb-2"
            style={{ width: '48px', height: '48px', background: 'var(--orange)' }}
          >
            <FontAwesomeIcon
              icon={faCalculator}
              style={{ width: '22px', height: '22px', color: '#ffffff' }}
            />
          </div>
          <h2
            className="font-black uppercase leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: '#ffffff',
              letterSpacing: '-0.01em',
            }}
          >
            Need a Custom Load Sizing Assessment?
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Avoid inverter overload and wiring failures. We run standard engineering load
            assessments to determine your exact energy requirements (hybrid solar inverter systems, inverter
            capacities, and cable sizing).
          </p>
          <div className="pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 font-bold uppercase tracking-wider text-sm text-white"
              style={{ background: 'var(--orange)', border: '1px solid var(--orange)' }}
            >
              Book Sizing Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
