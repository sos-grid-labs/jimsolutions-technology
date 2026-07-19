import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { SERVICES } from '@/data/services';
import SectionHeading from '../ui/SectionHeading';

/**
 * ServicesGrid — REDESIGN-PROMPT.md §4
 *
 * Icon-badge-led cards in a hairline-bordered grid.
 * No photo headers, no rounded corners, no drop shadows.
 * Icons in solid-color square badges (alternating navy/orange).
 * Numbered mono index per card.
 * One-line "Learn more →" CTA in mono.
 */
export default function ServicesGrid() {
  return (
    <section
      className="w-full"
      style={{
        background: 'var(--paper)',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="What We Do"
            index={`0${SERVICES.length} DISCIPLINES`}
            title="Core Services"
            subtitle="End-to-end technical solutions designed and implemented for safety and longevity."
            align="left"
          />
        </div>

        {/* Hairline-bordered grid — no gaps, borders act as dividers */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ border: '1px solid var(--line)' }}
        >
          {SERVICES.map((service, idx) => {
            const badgeBg = idx % 2 === 0 ? 'var(--panel-ink)' : 'var(--orange)';
            const num = String(idx + 1).padStart(2, '0');

            return (
              <div
                key={service.slug}
                className="service-card flex flex-col p-7 lg:p-8"
                style={{
                  borderRight: (idx + 1) % 3 !== 0 ? '1px solid var(--line)' : undefined,
                  borderBottom: idx < SERVICES.length - 3 ? '1px solid var(--line)' : undefined,
                }}
              >
                {/* Row: badge + index */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{ width: '40px', height: '40px', background: badgeBg }}
                  >
                    <FontAwesomeIcon
                      icon={service.icon}
                      style={{ width: '18px', height: '18px', color: '#ffffff' }}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      letterSpacing: '0.1em',
                      color: 'var(--line)',
                    }}
                  >
                    {num}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-black uppercase leading-tight mb-3"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                    color: 'var(--panel-ink)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed flex-1 mb-6"
                  style={{ color: 'var(--graphite)' }}
                >
                  {service.shortDesc}
                </p>

                {/* Learn more */}
                <Link
                  href={`/services/${service.slug}`}
                  className="service-learn-more"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--orange)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  Learn more
                  <span aria-hidden="true" style={{ fontFamily: 'sans-serif' }}>
                    →
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
