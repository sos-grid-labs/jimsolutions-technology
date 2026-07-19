import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv, faCogs, faBoxes, faPlug } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { getWhatsappLink } from '@/lib/constants';
import SectionHeading from '../ui/SectionHeading';
import FramedImage from '../ui/FramedImage';

const capabilities = [
  {
    label: 'Flush Mounting',
    desc: 'Seamless cabinet integration for refrigerators, ovens, and cooktops.',
    icon: faBoxes,
  },
  {
    label: 'Utility Connections',
    desc: 'Water inlets, ventilation ducts, and hidden power conduits.',
    icon: faPlug,
  },
  {
    label: 'Load Balancing',
    desc: 'Appliance circuits sized to avoid overloading distribution boards.',
    icon: faCogs,
  },
  {
    label: 'Smart Integration',
    desc: 'TV brackets, media units, and AV cable management included.',
    icon: faTv,
  },
];

export default function AppliancesSection() {
  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I saw your appliance supply and integration setup and would like to request a quote.',
  );

  return (
    <section
      className="w-full"
      style={{
        background: '#f8f9fc',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image left */}
          <div className="lg:col-span-5">
            <FramedImage
              src="/img/services/kitchen-cooktop.jpg"
              alt="High-end Kitchen Appliances Integration"
              caption="APPLIANCE SETUP, LEKKI"
              aspect="aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          {/* Content right */}
          <div className="lg:col-span-7 space-y-8">
            <SectionHeading
              eyebrow="Premium Appliance Solutions"
              title="Premium Appliance Setup. Seamless Integration."
              subtitle="Installing high-end home appliances is an architectural task. We handle procurement, structural placement, utility hookups, and cable management for a completely flush result."
              align="left"
            />

            {/* 2×2 capability grid */}
            <div className="grid grid-cols-2" style={{ border: '1px solid var(--line)' }}>
              {capabilities.map((item, i) => (
                <div
                  key={i}
                  className="p-5"
                  style={{
                    background: '#ffffff',
                    borderRight: i % 2 === 0 ? '1px solid var(--line)' : undefined,
                    borderBottom: i < 2 ? '1px solid var(--line)' : undefined,
                  }}
                >
                  <div
                    className="flex items-center justify-center mb-3"
                    style={{
                      width: '28px',
                      height: '28px',
                      background: i % 2 === 0 ? 'var(--orange)' : 'var(--panel-ink)',
                      flexShrink: 0,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      style={{ width: '12px', height: '12px', color: '#ffffff' }}
                    />
                  </div>
                  <p className="font-semibold text-xs mb-1" style={{ color: 'var(--panel-ink)' }}>
                    {item.label}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--graphite)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 font-bold uppercase tracking-wider text-sm text-white"
                style={{ background: 'var(--panel-ink)', border: '1px solid var(--panel-ink)' }}
              >
                <FontAwesomeIcon icon={faWhatsapp} style={{ width: '15px', height: '15px' }} />
                Request Appliance Setup
              </a>
              <a
                href="/services/appliances"
                className="inline-flex items-center px-6 py-3.5 font-bold uppercase tracking-wider text-sm"
                style={{ color: 'var(--panel-ink)', border: '1px solid var(--line)' }}
              >
                View Full Scope
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
