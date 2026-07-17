import { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { createMetadata } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';
import { getWhatsappLink } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';
import FramedImage from '@/components/ui/FramedImage';

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
      tag: 'Renewable Energy',
    },
    {
      src: '/img/gallery/electrical-panel-installation.jpg',
      alt: 'Luxury Residential Electrical Distribution Board',
      tag: 'Premium Appliance Solutions',
    },
    {
      src: '/img/projects/electrical-upgrade.jpg',
      alt: 'Safety Compliant Main Breaker Panel',
      tag: 'Premium Appliance Solutions',
    },
    {
      src: '/img/projects/kitchen-integration.jpg',
      alt: 'Integrated Oven and Island Hob',
      tag: 'Kitchen Engineering',
    },
    {
      src: '/img/services/luxury-laundry-room.png',
      alt: 'Premium Stacked Miele Washer & Dryer Utility Setup',
      tag: 'Laundry Solutions',
    },
    {
      src: '/img/projects/laundry-setup.jpg',
      alt: 'Clean Stacked Washer and Dryer Setup',
      tag: 'Laundry Solutions',
    },
    {
      src: '/img/gallery/laundry-ironer.jpg',
      alt: 'Rotary Ironer and Laundry Storage',
      tag: 'Laundry Solutions',
    },
    {
      src: '/img/gallery/downdraft-extractor.jpg',
      alt: 'Induction Hob with Downdraft Extractor',
      tag: 'Kitchen Engineering',
    },
    {
      src: '/img/gallery/master-fridge.jpg',
      alt: 'Flush Integrated Refrigeration Unit',
      tag: 'Refrigeration Systems',
    },
    {
      src: '/img/gallery/outdoor-cooktop.jpg',
      alt: 'Stainless Steel Outdoor Cooktop Placement',
      tag: 'Kitchen Engineering',
    },
    {
      src: '/img/gallery/island-cooktop.jpg',
      alt: 'Neat Island Induction Cooktop',
      tag: 'Kitchen Engineering',
    },
    {
      src: '/img/gallery/laundry-ironer.jpg',
      alt: 'Laundry Ironer',
      tag: 'Laundry Solutions',
    },
  ];

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />

      {/* Page Header */}
      <section
        className="py-20 lg:py-24 text-center relative overflow-hidden"
        style={{ background: 'var(--panel-ink)', borderBottom: '2px solid var(--orange)' }}
      >
        <div className="mx-auto max-w-7xl px-4 relative space-y-4">
          <p
            className="uppercase"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.18em',
              color: 'var(--orange)',
            }}
          >
            PROJECT PORTFOLIO
          </p>
          <h1
            className="font-black uppercase leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              color: '#ffffff',
              letterSpacing: '-0.01em',
            }}
          >
            Work Gallery
          </h1>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-body)' }}
          >
            Visual highlights of our neat installations and finished details on-site.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="On-Site Photos"
            index={`${String(galleryItems.length).padStart(2, '0')} EXHIBITS`}
            title="Clean Details. Beautiful Finishes."
            subtitle="Real photos showing the standard of our cable layouts, appliance flush mountings, and solar alignments."
            className="mb-16"
          />

          {/* Grid with hairline dividers */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[var(--line)] border border-[var(--line)]"
          >
            {galleryItems.map((item, idx) => {
              const whatsappUrl = getWhatsappLink();
              const figLabel = `FIG. ${String(idx + 1).padStart(2, '0')} — ${item.tag.toUpperCase()}`;

              return (
                <div
                  key={idx}
                  className="flex flex-col bg-white"
                >
                  <FramedImage
                    src={item.src}
                    alt={item.alt}
                    caption={figLabel}
                    aspect="aspect-[4/3]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="p-6 flex flex-col flex-1 justify-between gap-4 bg-white">
                    <h3
                      className="font-bold text-sm"
                      style={{ color: 'var(--panel-ink)', fontFamily: 'var(--font-body)' }}
                    >
                      {item.alt}
                    </h3>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 project-cta text-xs uppercase tracking-wider font-semibold py-2.5 px-4"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        border: '1px solid var(--line)',
                        color: 'var(--panel-ink)',
                        transition: 'all 200ms',
                      }}
                    >
                      <FontAwesomeIcon icon={faWhatsapp} style={{ width: '13px', height: '13px', color: '#25D366' }} />
                      Ask About This Design
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
