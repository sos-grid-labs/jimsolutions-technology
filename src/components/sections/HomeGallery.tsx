import Image from 'next/image';
import Link from 'next/link';
import FramedImage from '../ui/FramedImage';
import SectionHeading from '../ui/SectionHeading';

const items = [
  {
    src: '/img/projects/solar-system.jpg',
    alt: 'High Voltage Solar Inverter Setup',
    caption: 'FIG. 05 — RENEWABLE ENERGY, LEKKI',
    tag: 'Renewable Energy',
  },
  {
    src: '/img/gallery/electrical-panel-installation.jpg',
    alt: 'Luxury Residential Electrical Distribution Board',
    caption: 'FIG. 06 — APPLIANCE SOLUTIONS, IKEJA',
    tag: 'Premium Appliance Solutions',
  },
  {
    src: '/img/projects/kitchen-integration.jpg',
    alt: 'Integrated Oven and Island Hob',
    caption: 'FIG. 07 — KITCHEN ENGINEERING, VICTORIA ISLAND',
    tag: 'Kitchen Engineering',
  },
  {
    src: '/img/services/luxury-laundry-room.png',
    alt: 'Premium Stacked Miele Washer & Dryer Utility Setup',
    caption: 'FIG. 08 — LAUNDRY SOLUTIONS, IKOYI',
    tag: 'Laundry Solutions',
  },
  {
    src: '/img/gallery/master-fridge.jpg',
    alt: 'Flush Integrated Refrigeration Unit',
    caption: 'FIG. 09 — REFRIGERATION SYSTEMS, LEKKI',
    tag: 'Refrigeration Systems',
  },
  {
    src: '/img/gallery/island-cooktop.jpg',
    alt: 'Neat Island Induction Cooktop',
    caption: 'FIG. 10 — KITCHEN ENGINEERING, IKOYI',
    tag: 'Kitchen Engineering',
  },
];

export default function HomeGallery() {
  return (
    <section
      className="w-full"
      style={{ background: 'var(--paper)', borderBottom: '1px solid var(--line)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <SectionHeading
            eyebrow="On-Site Photos"
            index={`0${items.length} INSTALLATIONS`}
            title="Project Gallery"
            subtitle="Real installation finishes executed on site. No templates, no shortcuts."
            align="left"
          />
          <Link
            href="/gallery"
            className="self-start lg:self-end flex-shrink-0"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--orange)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              paddingBottom: '2px',
              borderBottom: '1px solid var(--orange)',
            }}
          >
            View Full Gallery <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* 6-up responsive hairline grid using grid gap */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[var(--line)] border border-[var(--line)]"
        >
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col bg-white">
              <FramedImage
                src={item.src}
                alt={item.alt}
                caption={item.caption}
                aspect="aspect-square"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Mono tag below image */}
              <div
                className="px-4 py-3"
                style={{
                  borderTop: '1px solid var(--line)',
                  background: '#ffffff',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--orange)',
                    fontWeight: 700,
                  }}
                >
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
