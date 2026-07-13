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
  title: 'Custom Utility & Laundry Space Setup Lagos | Jimsolutions Technology',
  description:
    'Professional laundry room setups with washer/dryer hookups, built-in cabinets, ventilation routing, and laundry equipment supply in Lagos. Free quote.',
  path: '/services/laundry',
});

export default function LaundryServicePage() {
  const serviceSchema = getServiceSchema(
    'Laundry Space Setup',
    'Procuring, plumbing, and arranging efficient utility room setups for washers, dryers, and ironers.',
    '/services/laundry',
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Laundry Setup', url: '/services/laundry' },
  ]);

  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I would like to get a quote for laundry space setup with stacked washer/dryer. My location is Lagos.',
  );

  return (
    <>
      <SchemaScript schema={serviceSchema} />
      <SchemaScript schema={breadcrumbSchema} />

      {/* Detail section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-semibold text-navy hover:text-orange transition-colors mb-8"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="mr-2 h-3 w-3" />
            Back to All Services
          </Link>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            {/* Image panel */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-navy/5 shadow-md">
              <Image
                src="/img/services/laundry.jpg"
                alt="Stacked washing machine and clothes dryer laundry room layout"
                fill
                sizes="(max-w-1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Text panel */}
            <div className="space-y-6">
              <SectionHeading
                badge="Laundry Setup"
                title="Ergonomic Laundry Layouts, Water Lines & Ventilation Hooks"
                align="left"
              />

              <div className="text-navy/70 leading-7 space-y-4">
                <p>
                  An organized laundry space makes utility work quick and efficient. Jimsolutions
                  Technology plans and builds dedicated home utility rooms, stacked washing/drying
                  units, and ironing counters.
                </p>
                <p>
                  We coordinate the complete workflow connection—handling electrical loads, plumbing
                  water feeds, drainage outlets connection, and hot air venting duct routes to keep
                  your space fresh and free of dampness.
                </p>
                <p className="font-semibold text-navy">What we cover:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Stacked washing machine and dryer structural placements</li>
                  <li>Dedicated plumbing feeds and wastewater drainage routing</li>
                  <li>Ventilation lines and hot air exhaust duct setups</li>
                  <li>Built-in cabinets, sorting bins, and rotary ironer counters</li>
                </ul>
              </div>

              <div className="pt-6 flex flex-wrap gap-4 items-center">
                <Button href={whatsappUrl} variant="secondary" size="lg" external>
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-5 w-5" />
                  Request Laundry Quote
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
