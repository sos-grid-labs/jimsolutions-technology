import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faWrench, faClock, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import SectionHeading from '../ui/SectionHeading';

/**
 * WhyChooseUs — REDESIGN-PROMPT design system
 *
 * Four discipline columns in a hairline-bordered grid.
 * Each column: icon badge (alternating navy/orange) + title + description.
 * No rounded cards, no drop shadows. Light grey panel background.
 */
export default function WhyChooseUs() {
  const values = [
    {
      title: 'Safety Standards',
      description:
        'We follow NERC guidelines, conduit cable separation, and certified safety changeover limits on every project.',
      icon: faShieldHalved,
    },
    {
      title: 'Experienced Execution',
      description:
        'Handcrafted cabinet placements, flush island hob joints, and battery calculations. No shortcuts.',
      icon: faWrench,
    },
    {
      title: 'Daily Availability',
      description:
        'Active from 8:00 AM to 10:00 PM daily on WhatsApp and direct line. We respond within 2 hours.',
      icon: faClock,
    },
    {
      title: 'Nationwide Reach',
      description:
        'Lagos-based diagnostics with equipment delivery and managed installation crews active nationwide.',
      icon: faTruckFast,
    },
  ];

  return (
    <section
      className="w-full"
      style={{ background: '#f8f9fc', borderBottom: '1px solid var(--line)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <SectionHeading
          eyebrow="Engineering Standards"
          index="04 DISCIPLINES"
          title="Why Choose Jimsolutions"
          subtitle="Bridging certified technical compliance with clean, visual integration."
          align="left"
          className="mb-16"
        />

        {/* 4-column bordered grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ border: '1px solid var(--line)' }}
        >
          {values.map((val, i) => {
            const badgeBg = i % 2 === 0 ? 'var(--panel-ink)' : 'var(--orange)';

            return (
              <div
                key={i}
                className="p-8 lg:p-10 flex flex-col"
                style={{
                  background: '#ffffff',
                  borderRight: i < values.length - 1 ? '1px solid var(--line)' : undefined,
                }}
              >
                {/* Icon badge */}
                <div
                  className="flex items-center justify-center flex-shrink-0 mb-7"
                  style={{ width: '44px', height: '44px', background: badgeBg, alignSelf: 'flex-start' }}
                >
                  <FontAwesomeIcon
                    icon={val.icon}
                    style={{ width: '20px', height: '20px', color: '#ffffff' }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="font-black uppercase leading-tight mb-4"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                    color: 'var(--panel-ink)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {val.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--graphite)' }}
                >
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
