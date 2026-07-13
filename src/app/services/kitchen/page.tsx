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
  title: 'Modern Kitchen Cabinets & Cooktop Installation Lagos | Jimsolutions Technology',
  description:
    'Get high-end kitchen layout plans, modern cabinets, downdraft extractors, and built-in appliance setup in Lagos. Handcrafted quality designs.',
  path: '/services/kitchen',
});

export default function KitchenServicePage() {
  const serviceSchema = getServiceSchema(
    'Kitchen Installation',
    'Custom kitchen layouts, premium cabinets configuration, and smart appliance integration.',
    '/services/kitchen',
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Kitchen Installation', url: '/services/kitchen' },
  ]);

  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I would like to get a quote for kitchen cabinets and island cooktop installation. My location is Lagos.',
  );

  const checklist = [
    'Custom cabinet alignment and professional installation',
    'Island kitchen cooktops and induction hobs setup',
    'Downdraft and canopy extractor fans mounting',
    'Flush integration of master cool refrigerators and built-in ovens',
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
                src="/img/services/kitchens.jpg"
                alt="Kitchen cabinet and built-in cooktop installation"
                caption="FIG. 14 — KITCHEN INSTALLATION, LEKKI"
                aspect="aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>

            {/* Text panel */}
            <div className="lg:col-span-7 space-y-8">
              <SectionHeading
                eyebrow="Kitchen Installation"
                title="Sleek Cabinet Layouts & High-End Cooktop Integration"
                align="left"
              />

              <div
                className="text-base leading-relaxed space-y-6"
                style={{ color: 'var(--graphite)', fontFamily: 'var(--font-body)' }}
              >
                <p>
                  A modern kitchen should balance workflow logic with premium style. Jimsolutions
                  Technology plans, installs, and finishes custom kitchen spaces featuring built-in
                  appliances and custom cabinet configurations.
                </p>
                <p>
                  We focus on precise layout measurements, ensuring completely flush joints for
                  island cooktops, installing downdraft extractors, and routing plumbing and gas
                  connections safely out of sight.
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
                  Request Kitchen Quote
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
