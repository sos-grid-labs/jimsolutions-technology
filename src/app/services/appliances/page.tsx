import { Metadata } from 'next';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faChevronLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { createMetadata } from '@/lib/seo';
import { getBreadcrumbSchema, getServiceSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';
import { BUSINESS_DETAILS, getWhatsappLink } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';
import FramedImage from '@/components/ui/FramedImage';

export const metadata: Metadata = createMetadata({
  title: 'Premium Appliance Solutions Lagos | Jimsolutions Technology',
  description:
    'Professional installation, preventive maintenance, diagnostics, repairs, and service contracts for Miele, Gaggenau, Bosch, and Siemens appliances in Lagos.',
  path: '/services/appliances',
});

export default function AppliancesServicePage() {
  const serviceSchema = getServiceSchema(
    'Premium Appliance Solutions',
    'Installation, preventive maintenance, fault diagnosis, repairs, and service contracts for luxury appliances.',
    '/services/appliances',
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Premium Appliance Solutions', url: '/services/appliances' },
  ]);

  const whatsappUrl = getWhatsappLink();

  const checklist = [
    'Installation — professional, safety-compliant placement and testing',
    'Preventive Maintenance — custom cleaning, seal checks, and calibrations',
    'Emergency Repairs — rapid response for luxury equipment faults',
    'Fault Diagnosis — high-end digital analyzer troubleshooting',
    'Annual Service Contracts — priority support and scheduled audits',
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
                src="/img/services/appliances.jpg"
                alt="Washing units and refrigerator installation setup"
                caption="FIG. 11 — APPLIANCE SETUP, LEKKI"
                aspect="aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>

            {/* Text panel */}
            <div className="lg:col-span-7 space-y-8">
              <SectionHeading
                eyebrow="Premium Appliance Solutions"
                title="Luxury Appliance Care. Expert Technical Support."
                align="left"
              />

              <div
                className="text-base leading-relaxed space-y-6"
                style={{ color: 'var(--graphite)', fontFamily: 'var(--font-body)' }}
              >
                <p>
                  Get your new appliances set up correctly from day one. At Jimsolutions Technology,
                  we handle the safe supply, proper placement, and neat cable routing of all major
                  home appliances.
                </p>
                <p>
                  We coordinate with your interior designer or layout plans to ensure flush cabinet
                  integration, proper air ventilation clearances, and correct water supply/drainage
                  configurations for utility units.
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
                  Request Appliance Quote
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
