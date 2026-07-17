import { Metadata } from 'next';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faChevronLeft, faCheck, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { createMetadata } from '@/lib/seo';
import { getBreadcrumbSchema, getServiceSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';
import { BUSINESS_DETAILS, getWhatsappLink } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';
import FramedImage from '@/components/ui/FramedImage';

export const metadata: Metadata = createMetadata({
  title: 'Wine Coolers & Built-in Refrigeration Setup Lagos | Jimsolutions Technology',
  description:
    'Premium setup, preventive maintenance, and repairs for luxury wine coolers, built-in dual-compressor refrigerators, and commercial cooling units in Lagos.',
  path: '/services/refrigeration',
});

export default function RefrigerationServicePage() {
  const serviceSchema = getServiceSchema(
    'Refrigeration Systems',
    'Wine coolers, built-in refrigerators, and commercial refrigeration setups.',
    '/services/refrigeration',
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Refrigeration Systems', url: '/services/refrigeration' },
  ]);

  const whatsappUrl = getWhatsappLink();

  const checklist = [
    'Wine Coolers — precise temperature and humidity cabinet calibration',
    'Built-in Refrigerators — dual-compressor and flush-integrated setups',
    'Commercial Refrigeration — walk-in chillers and display units maintenance',
    'Regular seal verification, gas checks, and condenser coil cleaning',
  ];

  return (
    <>
      <SchemaScript schema={serviceSchema} />
      <SchemaScript schema={breadcrumbSchema} />

      {/* Detail section */}
      <section className="py-20 lg:py-28 bg-white border-b border-gray-100 animate-fade-in">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-orange hover:text-navy transition-colors mb-8"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="mr-2 h-3.5 w-3.5" />
            Back to All Services
          </Link>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            {/* Image panel */}
            <div className="lg:col-span-5">
              <FramedImage
                src="/img/services/electrical.jpg"
                alt="Luxury integrated wine cooler refrigerator setup"
                caption="FIG. 12 — REFRIGERATION CALIBRATION, LAGOS"
                aspect="aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>

            {/* Text panel */}
            <div className="lg:col-span-7 space-y-8">
              <SectionHeading
                eyebrow="Refrigeration Systems"
                title="Premium Cooling Care. Precise Temperature Control."
                align="left"
              />

              <div
                className="text-base leading-relaxed space-y-6"
                style={{ color: 'var(--graphite)', fontFamily: 'var(--font-body)' }}
              >
                <p>
                  Protect your high-end wine collections and fresh produce. At Jimsolutions Technology,
                  we provide specialized installation, preventative maintenance, and repair services
                  for luxury built-in refrigerators, dual-compressor systems, and specialized wine coolers.
                </p>
                <p>
                  We ensure completely flush cabinetry alignments, optimal rear ventilation clearances
                  to protect compressor lifespan, clean water feed line connections for built-in ice makers,
                  and professional temperature diagnostics.
                </p>
                <p
                  className="font-black uppercase tracking-tight"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    color: 'var(--panel-ink)',
                  }}
                >
                  What we cover:
                </p>

                {/* Hairline bordered checklist */}
                <div style={{ border: '1px solid var(--line)' }}>
                  {checklist.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 px-5 py-4"
                      style={{ borderBottom: i < checklist.length - 1 ? '1px solid var(--line)' : undefined }}
                    >
                      <div
                        className="flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          width: '22px',
                          height: '22px',
                          background: i % 2 === 0 ? 'var(--orange)' : 'var(--panel-ink)',
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ width: '10px', height: '10px', color: '#ffffff' }}
                        />
                      </div>
                      <span className="text-sm font-medium" style={{ color: 'var(--panel-ink)' }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 flex flex-wrap gap-4 items-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 font-bold uppercase tracking-wider text-sm text-white"
                  style={{ background: 'var(--panel-ink)', border: '1px solid var(--panel-ink)' }}
                >
                  <FontAwesomeIcon icon={faWhatsapp} style={{ width: '15px', height: '15px' }} />
                  Request Setup Quote
                </a>
                <a
                  href={`tel:${BUSINESS_DETAILS.phone}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 font-bold uppercase tracking-wider text-sm"
                  style={{ color: 'var(--panel-ink)', border: '1px solid var(--line)' }}
                >
                  <FontAwesomeIcon icon={faPhone} style={{ width: '13px', height: '13px', color: 'var(--orange)' }} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
