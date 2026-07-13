import { Metadata } from 'next';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faHourglassHalf, faMapPin, faClock } from '@fortawesome/free-solid-svg-icons';
import { createMetadata } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';
import { BUSINESS_DETAILS, getWhatsappLink } from '@/lib/constants';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = createMetadata({
  title: 'About Jimsolutions Technology | Trusted Electrical and Solar Experts',
  description:
    'Learn about Jimsolutions Technology, our core values, and our commitment to clean workmanship, solar energy, and home solutions in Lagos and nationwide.',
  path: '/about',
});

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ]);

  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I would like to make an inquiry after reading about your business.',
  );

  const values = [
    {
      title: 'Neat Workmanship',
      description: 'Clean cable management, flush alignment, and safe load distribution setups.',
      icon: faTools,
    },
    {
      title: 'Reliable Durability',
      description:
        'Quality tested solar/inverter batteries and robust electrical wiring that lasts.',
      icon: faHourglassHalf,
    },
    {
      title: 'Lagos & Nationwide Service',
      description: 'Serving residential and commercial clients across Lagos and nationwide.',
      icon: faMapPin,
    },
    {
      title: '8am to 10pm Daily Support',
      description: 'Available every day for custom sizing calculations and installer support.',
      icon: faClock,
    },
  ];

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />

      {/* Page Header */}
      <section className="bg-navy py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="mx-auto max-w-7xl px-4 relative">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">About Our Company</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Technical expertise, clean execution, and professional standards since day one.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-navy/5 shadow-md">
              <Image
                src="/img/services/solar.jpg"
                alt="Jimsolutions Inverter Installation"
                fill
                sizes="(max-w-1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <SectionHeading
                badge="Who We Are"
                title="Building Stable Power Backups & Modern Homes"
                align="left"
              />
              <p className="text-navy/70 leading-7">
                Jimsolutions Technology is based in Lagos, Nigeria. We provide high-quality
                engineering services, electrical installations, custom cabinet kitchen designs, and
                utility setup layouts.
              </p>
              <p className="text-navy/70 leading-7">
                We believe that clients deserve clean, safe, and beautiful workmanship. That is why
                our team handles every wire connection, inverter sizing calculation, and appliance
                setup with precision.
              </p>

              <div className="pt-4">
                <Button href={whatsappUrl} variant="primary" size="lg" external>
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50 border-t border-b border-navy/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Values"
            title="What Drives Jimsolutions Technology"
            subtitle="Our commitment to safety, compliance, and aesthetic integration in every project."
            className="mb-16"
          />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((val, idx) => (
              <Card key={idx} className="flex flex-col items-center text-center p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange/10 text-orange mb-6">
                  <FontAwesomeIcon icon={val.icon} className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-navy">{val.title}</h3>
                <p className="mt-3 text-sm text-navy/70 leading-6">{val.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
