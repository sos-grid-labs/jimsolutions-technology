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
      src: '/img/gallery/Premium-Wine-Chiller-and-Fridge.jpg',
      alt: 'Premium Wine Chiller and Fridge',
      tag: 'Premium Wine Chiller and Fridge',
    },
    {
      src: '/img/gallery/Stacked-Washer-and-Dryer-Setup.jpg',
      alt: 'Stacked Washer and Dryer Setup',
      tag: 'Stacked Washer and Dryer Setup',
    },
    {
      src: '/img/gallery/Ergonomic-Laundry-Layout.jpg',
      alt: 'Ergonomic Laundry Layout',
      tag: 'Ergonomic Laundry Layout',
    },
    {
      src: '/img/gallery/Island-Kitchen-Cooktop.jpg',
      alt: 'Island Kitchen Cooktop',
      tag: 'Island Kitchen Cooktop',
    },
    {
      src: '/img/gallery/Master-Cool-Fridge-Freezer.jpg',
      alt: 'Master Cool Fridge Freezer',
      tag: 'Master Cool Fridge Freezer',
    },
    {
      src: '/img/gallery/Outdoor-Stainless-Grill-Hob.jpg',
      alt: 'Outdoor Stainless Grill Hob',
      tag: 'Outdoor Stainless Grill Hob',
    },
    {
      src: '/img/gallery/Premium-Fridge-Freezer-Setup.jpg',
      alt: 'Premium Fridge Freezer Setup',
      tag: 'Premium Fridge Freezer Setup',
    },
    {
      src: '/img/gallery/Downdraft-Extractor.jpg',
      alt: 'Downdraft Extractor',
      tag: 'Downdraft Extractor',
    },
    {
      src: '/img/gallery/Electrical-Panel-Installation.jpg',
      alt: 'Inverter Project Installation',
      tag: 'Inverter Project Installation',
    },
    {
      src: '/img/gallery/Hybrid-Solar-Inverter-Wiring.jpg',
      alt: 'Hybrid Solar Inverter Wiring',
      tag: 'Hybrid Solar Inverter Wiring',
    },
    {
      src: '/img/gallery/Integrated-Fridge-Freezer.jpg',
      alt: 'Integrated Fridge Freezer',
      tag: 'Integrated Fridge Freezer',
    },
    {
      src: '/img/gallery/Flush-Mount-Cooktop-Installation.jpg',
      alt: 'Flush Mount Cooktop Installation',
      tag: 'Flush Mount Cooktop Installation',
    },
    {
      src: '/img/gallery/Integrated-Kitchen-Appliances.jpg',
      alt: 'Integrated Kitchen Appliances',
      tag: 'Integrated Kitchen Appliances',
    },
    {
      src: '/img/gallery/Premium-Kitchen-Hob-Setup.jpg',
      alt: 'Premium Kitchen Hob Setup',
      tag: 'Premium Kitchen Hob Setup',
    },
    {
      src: '/img/gallery/Bespoke-Kitchen-Appliances-Fitting.jpg',
      alt: 'Bespoke Kitchen Appliances Fitting',
      tag: 'Bespoke Kitchen Appliances Fitting',
    },
    {
      src: '/img/gallery/Built-In-Oven-and-Gas-Hob.jpg',
      alt: 'Built In Oven and Gas Hob',
      tag: 'Built In Oven and Gas Hob',
    },
    {
      src: '/img/gallery/Stainless-Steel-Extractor-and-Hob.jpg',
      alt: 'Stainless Steel Extractor and Hob',
      tag: 'Stainless Steel Extractor and Hob',
    },
    {
      src: '/img/gallery/Flush-Alignment-Kitchen-Appliance.jpg',
      alt: 'Flush Alignment Kitchen Appliance',
      tag: 'Flush Alignment Kitchen Appliance',
    },
    {
      src: '/img/gallery/Luxury-Kitchen-Cabinetry-Integration.jpg',
      alt: 'Luxury Kitchen Cabinetry Integration',
      tag: 'Luxury Kitchen Cabinetry Integration',
    },
    {
      src: '/img/gallery/Rotary-Laundry-Ironer-Setup.jpg',
      alt: 'Rotary Laundry Ironer Setup',
      tag: 'Rotary Laundry Ironer Setup',
    },
    {
      src: '/img/gallery/Solar-Panel-Array-Installation.jpg',
      alt: 'Solar Panel Array Installation',
      tag: 'Solar Panel Array Installation',
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[var(--line)] border border-[var(--line)]">
            {galleryItems.map((item, idx) => {
              const whatsappUrl = getWhatsappLink();
              const figLabel = item.tag.toUpperCase();

              return (
                <div key={idx} className="flex flex-col bg-white">
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
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        style={{ width: '13px', height: '13px', color: '#25D366' }}
                      />
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
