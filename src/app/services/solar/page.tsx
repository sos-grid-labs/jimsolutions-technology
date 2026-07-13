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
  title: 'Solar & Inverter System Installation Lagos | Jimsolutions Technology',
  description:
    'Get stable electricity with custom solar power and inverter installation services in Lagos. Quality backup battery systems and load calculations. Quote on WhatsApp.',
  path: '/services/solar',
});

export default function SolarServicePage() {
  const serviceSchema = getServiceSchema(
    'Solar & Inverter Systems',
    'Solar panel array setup, inverter assembly, and backup battery power systems.',
    '/services/solar',
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Solar', url: '/services/solar' },
  ]);

  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I would like to get a quote for Solar & Inverter System installation. My location is Lagos.',
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
                src="/img/services/solar.jpg"
                alt="Solar panels array setup and battery bank installation"
                fill
                sizes="(max-w-1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Text panel */}
            <div className="space-y-6">
              <SectionHeading
                badge="Solar & Inverter Systems"
                title="Stable Power Backups Built Around Your Daily Energy Needs"
                align="left"
              />

              <div className="text-navy/70 leading-7 space-y-4">
                <p>
                  Ensure zero power downtime for your home or office. Jimsolutions Technology
                  designs, supplies, and installs premium solar panel systems and inverter battery
                  backup configurations across Lagos and nationwide.
                </p>
                <p>
                  We conduct standard technical load assessments to calculate your peak consumption,
                  recommend the correct number of panels and batteries, and implement hybrid wiring
                  paths that separate high-load appliances from your backup circuit.
                </p>
                <p className="font-semibold text-navy">What we cover:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Detailed load assessments and energy auditing</li>
                  <li>Monocrystalline/Polycrystalline solar panels assembly</li>
                  <li>Inverter battery bank sizing and connection</li>
                  <li>Hybrid changeover switches configuration</li>
                </ul>
              </div>

              <div className="pt-6 flex flex-wrap gap-4 items-center">
                <Button href={whatsappUrl} variant="secondary" size="lg" external>
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-5 w-5" />
                  Get Solar Quote
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
