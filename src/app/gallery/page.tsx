import { Metadata } from 'next';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { createMetadata } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';
import { getWhatsappLink } from '@/lib/constants';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export const metadata: Metadata = createMetadata({
  title: 'Gallery | Jimsolutions Technology Visual Showcase',
  description:
    'View real product and project images representing our kitchen cooker placements, washer setups, power cabinets, and clean interior improvements in Lagos.',
  path: '/gallery',
});

export default function GalleryPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Gallery', url: '/gallery' },
  ]);

  const galleryItems = [
    {
      src: '/img/projects/solar-system.jpg',
      alt: 'High Voltage Solar Inverter Setup',
      tag: 'Solar & Inverter',
    },
    {
      src: '/img/projects/electrical-upgrade.jpg',
      alt: 'Safety Compliant Main Breaker Panel',
      tag: 'Electrical',
    },
    {
      src: '/img/projects/kitchen-integration.jpg',
      alt: 'Integrated Oven and Island Hob',
      tag: 'Kitchen',
    },
    {
      src: '/img/projects/laundry-setup.jpg',
      alt: 'Clean Stacked Washer and Dryer Setup',
      tag: 'Laundry',
    },
    {
      src: '/img/gallery/laundry-ironer.jpg',
      alt: 'Rotary Ironer and Laundry Storage',
      tag: 'Laundry',
    },
    {
      src: '/img/gallery/downdraft-extractor.jpg',
      alt: 'Induction Hob with Downdraft Extractor',
      tag: 'Kitchen',
    },
    {
      src: '/img/gallery/master-fridge.jpg',
      alt: 'Flush Integrated Refrigeration Unit',
      tag: 'Home Appliances',
    },
    {
      src: '/img/gallery/outdoor-cooktop.jpg',
      alt: 'Stainless Steel Outdoor Cooktop Placement',
      tag: 'Kitchen',
    },
    {
      src: '/img/gallery/island-cooktop.jpg',
      alt: 'Neat Island Induction Cooktop',
      tag: 'Kitchen',
    },
  ];

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />

      {/* Page Header */}
      <section className="bg-navy py-20 lg:py-28 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="mx-auto max-w-7xl px-4 relative space-y-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-heading leading-tight">
            Work Gallery
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Visual highlights of our neat installations and finished details on-site.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="On-Site Photos"
            title="Clean Details, Beautiful Finishes"
            subtitle="Real photos showing the standard of our cable layouts, appliance flush mountings, and solar alignments."
            className="mb-16"
          />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, idx) => {
              const whatsappUrl = getWhatsappLink(
                `Hello Jimsolutions Technology, I saw this gallery photo: ${item.alt}. I would like to get a quote for a similar installation.`,
              );

              return (
                <Card
                  key={idx}
                  className="p-0 overflow-hidden flex flex-col justify-between group rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-w-768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center rounded-full bg-navy/95 text-white px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-lg font-bold text-navy font-heading">{item.alt}</h3>
                    <Button
                      href={whatsappUrl}
                      variant="outline"
                      size="sm"
                      className="w-full text-xs"
                      external
                    >
                      <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-4 w-4 text-[#25D366]" />
                      Ask About This Design
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
