import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldHalved,
  faWrench,
  faAward,
  faCogs,
  faBoxes,
  faCalculator,
  faHeadset,
  faBolt,
} from '@fortawesome/free-solid-svg-icons';
import SectionHeading from '../ui/SectionHeading';

export default function WhyChooseUs() {
  const values = [
    {
      title: 'Certified Engineering',
      description:
        'Technical solutions designed and executed by certified engineers to protect your property systems.',
      icon: faAward,
    },
    {
      title: 'Premium Appliance Specialists',
      description:
        'Dedicated expertise in high-end luxury brands like Miele, Gaggenau, Bosch, and Siemens.',
      icon: faWrench,
    },
    {
      title: 'Professional Diagnostics',
      description: 'High-end analyzer diagnostics to isolate errors and prevent system failures.',
      icon: faCogs,
    },
    {
      title: 'Genuine Parts Support',
      description:
        'Direct procurement and installation of authentic components from official brand channels.',
      icon: faBoxes,
    },
    {
      title: 'Transparent Pricing',
      description:
        'Itemized, competitive proposals with clear technical deliverables and zero surprises.',
      icon: faCalculator,
    },
    {
      title: 'After Sales Support',
      description:
        'Comprehensive warranty follow-ups, scheduled check-ins, and priority remote help.',
      icon: faHeadset,
    },
    {
      title: 'Fast Response Time',
      description:
        'Rapid response times with dedicated technicians ready for critical support calls.',
      icon: faBolt,
    },
    {
      title: 'Preventive Maintenance',
      description: 'Scheduled multi-point safety audits and tuning to prolong equipment lifespan.',
      icon: faShieldHalved,
    },
  ];

  return (
    <section className="w-full bg-[#f8f9fc]" style={{ borderBottom: '1px solid var(--line)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <SectionHeading
          eyebrow="Engineering Standards"
          index="08 PILARS"
          title="Why Choose Jimsolutions"
          subtitle="Bridging certified technical compliance with clean, visual integration."
          align="left"
          className="mb-16"
        />

        {/* 8-column bordered grid using CSS gap hairline borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[var(--line)] border border-[var(--line)]">
          {values.map((val, i) => {
            const badgeBg = i % 2 === 0 ? 'var(--panel-ink)' : 'var(--orange)';

            return (
              <div
                key={i}
                className="p-8 lg:p-10 flex flex-col bg-white hover:bg-[#f8f9fc] transition-colors duration-200"
              >
                {/* Icon badge */}
                <div
                  className="flex items-center justify-center flex-shrink-0 mb-7"
                  style={{
                    width: '44px',
                    height: '44px',
                    background: badgeBg,
                    alignSelf: 'flex-start',
                  }}
                >
                  <FontAwesomeIcon
                    icon={val.icon}
                    style={{ width: '20px', height: '20px', color: '#ffffff' }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="font-black uppercase leading-tight mb-4 text-base"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'var(--panel-ink)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {val.title}
                </h3>

                {/* Description */}
                <p className="text-xs leading-relaxed text-graphite">{val.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
