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
  title: 'Premium Interior Design & Space Planning Nigeria | Jimsolutions Technology',
  description:
    'Create clean, practical interior upgrades with custom styling, custom partitions, and lighting solutions. Home and office renovations in Lagos.',
  path: '/services/interior-design',
});

export default function InteriorDesignServicePage() {
  const serviceSchema = getServiceSchema(
    'Interior Design Support',
    'Creative styling, partition panel setups, and lighting configurations for clean spaces.',
    '/services/interior-design',
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Interior Design', url: '/services/interior-design' },
  ]);

  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I would like to get a quote for partition boards and custom media console interior work. My location is Lagos.',
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
                src="/img/services/interiors.jpg"
                alt="Interior design partition wall and custom lighting installation"
                fill
                sizes="(max-w-1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Text panel */}
            <div className="space-y-6">
              <SectionHeading
                badge="Interior Design"
                title="Functional Space Planning, Partition Boards & Accent Lighting"
                align="left"
              />

              <div className="text-navy/70 leading-7 space-y-4">
                <p>
                  Interior styling is about creating spaces that are both visual and practical.
                  Jimsolutions Technology builds interior enhancements including gypsum board
                  drywalls, TV media consoles, and custom wall accent lighting panels.
                </p>
                <p>
                  We coordinate material textures and color systems to fit your desired branding or
                  home theme. Our design support focuses on structural partitions that segment
                  spaces cleanly without blocking natural workflows.
                </p>
                <p className="font-semibold text-navy">What we cover:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Drywall partitions and POP ceiling layouts</li>
                  <li>Custom media consoles and floating shelves installations</li>
                  <li>Neat placement of LED strip panels and spot fixtures</li>
                  <li>Space optimization renovations for homes and offices</li>
                </ul>
              </div>

              <div className="pt-6 flex flex-wrap gap-4 items-center">
                <Button href={whatsappUrl} variant="secondary" size="lg" external>
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-5 w-5" />
                  Request Interior Quote
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
