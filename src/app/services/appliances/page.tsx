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
  title: 'Home Appliance Supply & Professional Setup Lagos | Jimsolutions Technology',
  description:
    'We supply and set up washing machines, built-in ovens, high-end refrigerators, and home theater setups with neat wiring. Serving Lagos and nationwide.',
  path: '/services/appliances',
});

export default function AppliancesServicePage() {
  const serviceSchema = getServiceSchema(
    'Home Appliances Supply & Setup',
    'Supply, placement, assembly, and neat configuration of major home appliances.',
    '/services/appliances',
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Home Appliances', url: '/services/appliances' },
  ]);

  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I would like to get a quote for Home Appliances supply and installation. My location is Lagos.',
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
                src="/img/services/appliances.jpg"
                alt="Washing units and refrigerator installation setup"
                fill
                sizes="(max-w-1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Text panel */}
            <div className="space-y-8">
              <SectionHeading
                badge="Home Appliances"
                title="Premium Appliance Supply, Placement & Safe Connection"
                align="left"
              />

              <div className="text-lg text-[#374151] leading-relaxed space-y-6 font-medium">
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
                <p className="font-bold text-navy text-lg font-heading">What we cover:</p>
                <ul className="space-y-3 pl-1">
                  {[
                    'Supply of premium appliances from verified brands',
                    'Built-in oven, microwave, and hob installation',
                    'Washing machine and clothes dryer placement and utility connections',
                    'Neat power cabling and safety switch integration',
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
                  Request Appliance Quote
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
