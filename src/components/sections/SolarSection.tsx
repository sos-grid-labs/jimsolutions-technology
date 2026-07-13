import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSolarPanel, faBatteryFull } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { getWhatsappLink } from '@/lib/constants';
import SectionHeading from '../ui/SectionHeading';
import FramedImage from '../ui/FramedImage';

const keySpecs = [
  { label: 'Inverter Capacities', value: '3.5kVA / 5kVA / 10kVA+' },
  { label: 'Battery Options', value: 'Lithium-ion & Tubular Gel' },
  { label: 'Panel Type', value: 'Monocrystalline Tier-1' },
  { label: 'Typical Load Coverage', value: 'Fridges, lighting, pumps, TVs' },
];

export default function SolarSection() {
  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I would like to request a solar load assessment and quote.',
  );

  return (
    <section
      className="w-full"
      style={{ background: '#f8f9fc', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Content left */}
          <div className="lg:col-span-7 space-y-8">
            <SectionHeading
              eyebrow="Solar & Inverter Systems"
              title="Zero Downtime. Clean Energy."
              subtitle="Nigeria's grid is unpredictable. We design custom solar and inverter backup systems load-balanced to secure your home. No generator noise, no fuel costs."
              align="left"
            />

            {/* Spec grid — 2×2 hairline bordered */}
            <div
              className="grid grid-cols-2"
              style={{ border: '1px solid var(--line)' }}
            >
              {keySpecs.map((spec, i) => {
                const badgeBg = i % 2 === 0 ? 'var(--panel-ink)' : 'var(--orange)';
                return (
                  <div
                    key={i}
                    className="p-5"
                    style={{
                      borderRight: i % 2 === 0 ? '1px solid var(--line)' : undefined,
                      borderBottom: i < 2 ? '1px solid var(--line)' : undefined,
                      background: '#ffffff',
                    }}
                  >
                    <div
                      className="flex items-center justify-center mb-3 flex-shrink-0"
                      style={{ width: '28px', height: '28px', background: badgeBg }}
                    >
                      <FontAwesomeIcon
                        icon={i < 2 ? faSolarPanel : faBatteryFull}
                        style={{ width: '12px', height: '12px', color: '#ffffff' }}
                      />
                    </div>
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '9px',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--graphite)',
                        marginBottom: '4px',
                      }}
                    >
                      {spec.label}
                    </p>
                    <p className="text-sm font-semibold" style={{ color: 'var(--panel-ink)' }}>
                      {spec.value}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 font-bold uppercase tracking-wider text-sm text-white"
                style={{ background: 'var(--orange)', border: '1px solid var(--orange)' }}
              >
                <FontAwesomeIcon icon={faWhatsapp} style={{ width: '15px', height: '15px' }} />
                Get Solar Sizing Quote
              </a>
              <a
                href="/services/solar"
                className="inline-flex items-center px-6 py-3.5 font-bold uppercase tracking-wider text-sm"
                style={{ color: 'var(--panel-ink)', border: '1px solid var(--line)' }}
              >
                View Full Solar Specs
              </a>
            </div>
          </div>

          {/* Image right */}
          <div className="lg:col-span-5">
            <FramedImage
              src="/img/projects/solar-system.jpg"
              alt="Premium Solar Inverter Array"
              caption="FIG. 02 — SOLAR ARRAY, LEKKI"
              aspect="aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
