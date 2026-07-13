import { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { createMetadata } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';
import ServicesGrid from '@/components/sections/ServicesGrid';
import { BUSINESS_DETAILS, getWhatsappLink } from '@/lib/constants';
import Button from '@/components/ui/Button';

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
      <section className="bg-navy py-20 lg:py-28 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="mx-auto max-w-7xl px-4 relative space-y-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-heading leading-tight">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Professional technical execution for power, kitchens, laundry, and interior upgrades.
          </p>
        </div>
      </section>

      {/* Services Grid Component */}
      <ServicesGrid />

      {/* Load Sizing Advisory Callout */}
      <section className="py-24 bg-navy text-white relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative text-center space-y-8">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#F97316]/10 text-orange mb-2">
            <FontAwesomeIcon icon={faCalculator} className="h-6 w-6" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight font-heading">
            Need a Custom Load Sizing Assessment?
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Avoid inverter overload and wiring failures. We run standard engineering load
            assessments to determine your exact energy requirements (solar arrays, inverter
            capacities, and cable sizing).
          </p>
          <div className="pt-4">
            <Button href={whatsappUrl} variant="primary" size="lg" external>
              Book Sizing Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
