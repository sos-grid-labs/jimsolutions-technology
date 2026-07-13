import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { createMetadata } from '@/lib/seo';
import { getBreadcrumbSchema, getServiceSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';
import { BUSINESS_DETAILS, getWhatsappLink } from '@/lib/constants';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';

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
    '/services/electrical',
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Electrical', url: '/services/electrical' },
  ]);

  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I would like to get a quote for Electrical Services.',
  );

  return (
    <>
      <SchemaScript schema={serviceSchema} />
      <SchemaScript schema={breadcrumbSchema} />

      {/* Detail section */}
      <section className="py-24 bg-white border-b border-gray-100 animate-fade-in">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-bold text-navy hover:text-orange transition-colors mb-8"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="mr-2 h-3 w-3" />
            Back to All Services
          </Link>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            {/* Image panel */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 shadow-md bg-gray-50">
              <Image
                src="/img/services/electrical.jpg"
                alt="Electrical wiring assessment and troubleshooting"
                fill
                sizes="(max-w-1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Text panel */}
            <div className="space-y-8">
              <SectionHeading
                badge="Electrical Services"
                title="Neat Wiring, Compliant Repairs & Safety Audits"
                align="left"
              />

              <div className="text-lg text-[#374151] leading-relaxed space-y-6 font-medium">
                <p>
                  Electrical safety is the core of any functional space. At Jimsolutions Technology,
                  we provide comprehensive electrical services for residential and commercial
                  properties in Lagos and nationwide.
                </p>
                <p>
                  Our certified technical team handles complete electrical wiring/rewiring, fault
                  finding, circuit breaker repairs, power outlets installation, and light fixture
                  upgrades.
                </p>
                <p className="font-bold text-navy text-lg font-heading">What we cover:</p>
                <ul className="space-y-3 pl-1">
                  {[
                    'Full property wiring/rewiring with clean conduit paths',
                    'Fault diagnostics and circuit breaker troubleshooting',
                    'Safety compliance assessments and grounding audits',
                    'Neat installation of switches, sockets, and accent light panels',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange/10 text-orange text-xs font-bold mt-0.5">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 flex flex-wrap gap-4 items-center">
                <Button href={whatsappUrl} variant="primary" size="lg" external>
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-5 w-5" />
                  Request Electrical Quote
                </Button>
                <Button href={`tel:${BUSINESS_DETAILS.phone}`} variant="outline" size="lg">
                  <FontAwesomeIcon icon={faPhone} className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
