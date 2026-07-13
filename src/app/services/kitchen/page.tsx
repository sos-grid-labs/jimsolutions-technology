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
                src="/img/services/kitchens.jpg"
                alt="Kitchen cabinet and built-in cooktop installation"
                fill
                sizes="(max-w-1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Text panel */}
            <div className="space-y-8">
              <SectionHeading
                badge="Kitchen Installation"
                title="Sleek Cabinet Layouts & High-End Cooktop Integration"
                align="left"
              />

              <div className="text-lg text-[#374151] leading-relaxed space-y-6 font-medium">
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
                <p className="font-bold text-navy text-lg font-heading">What we cover:</p>
                <ul className="space-y-3 pl-1">
                  {[
                    'Custom cabinet alignment and professional installation',
                    'Island kitchen cooktops and induction hobs setup',
                    'Downdraft and canopy extractor fans mounting',
                    'Flush integration of master cool refrigerators and built-in ovens',
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
                  Request Kitchen Quote
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
