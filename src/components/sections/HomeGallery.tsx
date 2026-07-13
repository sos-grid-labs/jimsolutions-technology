import Image from 'next/image';
import Link from 'next/link';
import FramedImage from '../ui/FramedImage';
import SectionHeading from '../ui/SectionHeading';

/**
 * HomeGallery — REDESIGN-PROMPT design system
 *
 * 4-item photo grid using FramedImage — corner brackets on every image.
 * Hairline-bordered grid, no rounded corners, no drop shadows.
 * Mono category tag replaces the rounded pill.
 */
const items = [
  {
    src: '/img/projects/solar-system.jpg',
    alt: 'High Voltage Solar Inverter Setup',
    caption: 'FIG. 05 — SOLAR & INVERTER, LEKKI',
    tag: 'Solar & Inverter',
  },
  {
    src: '/img/projects/electrical-upgrade.jpg',
    alt: 'Safety Compliant Main Breaker Panel',
    caption: 'FIG. 06 — ELECTRICAL PANEL, IKEJA',
    tag: 'Electrical',
  },
  {
    src: '/img/projects/kitchen-integration.jpg',
    alt: 'Integrated Oven and Island Hob',
    caption: 'FIG. 07 — KITCHEN FIT-OUT, VICTORIA ISLAND',
    tag: 'Kitchen',
  },
  {
    src: '/img/projects/laundry-setup.jpg',
    alt: 'Clean Stacked Washer and Dryer Setup',
    caption: 'FIG. 08 — LAUNDRY SETUP, IKOYI',
    tag: 'Laundry',
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

        {/* 4-up hairline grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ border: '1px solid var(--line)' }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              style={{
                borderRight: idx < items.length - 1 ? '1px solid var(--line)' : undefined,
              }}
            >
              <FramedImage
                src={item.src}
                alt={item.alt}
                caption={item.caption}
                aspect="aspect-square"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--graphite)',
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
