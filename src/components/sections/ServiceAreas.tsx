import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { getWhatsappLink } from '@/lib/constants';
import SectionHeading from '../ui/SectionHeading';

/**
 * ServiceAreas — REDESIGN-PROMPT design system
 *
 * Two-panel layout: narrative left, coverage list right.
 * Coverage list: hairline-bordered rows, no rounded cards.
 * Alternating check badge colours.
 */
export default function ServiceAreas() {
  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I would like to check if you serve my area. My location is [location].',
  );

  const primaryAreas = [
    'Lekki Phase 1, 2 & environs',
    'Victoria Island (VI) & Ikoyi',
    'Ikeja GRA & Mainland centres',
    'Surulere & Yaba properties',
    'Ajah & Sangotedo corridor',
  ];

  return (
    <section
      className="w-full"
      style={{ background: '#f8f9fc', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Text panel */}
          <div className="lg:col-span-7 space-y-8">
            <SectionHeading
              eyebrow="Coverage"
              title="Lagos & Nationwide"
              subtitle="Based in Lagos, we provide on-site engineering, sizing, and safety audits across all local districts. For clients outside Lagos, we offer equipment supply and managed technicians."
              align="left"
            />

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 font-bold uppercase tracking-wider text-sm text-white"
              style={{ background: 'var(--panel-ink)', border: '1px solid var(--panel-ink)' }}
            >
              <FontAwesomeIcon icon={faWhatsapp} style={{ width: '16px', height: '16px', color: '#25D366' }} />
              Check Area Availability
            </a>
          </div>

          {/* Coverage list */}
          <div
            className="lg:col-span-5"
            style={{ border: '1px solid var(--line)', background: '#ffffff' }}
          >
            {/* Header row */}
            <div
              className="px-6 py-4 flex items-center gap-3"
              style={{ borderBottom: '1px solid var(--line)', background: 'var(--panel-ink)' }}
            >
              <div
                className="flex items-center justify-center"
                style={{ width: '28px', height: '28px', background: 'var(--orange)', flexShrink: 0 }}
              >
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  style={{ width: '12px', height: '12px', color: '#ffffff' }}
                />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.8)',
                }}
              >
                Core Lagos Coverage
              </span>
            </div>

            {/* Area rows */}
            {primaryAreas.map((area, idx) => (
              <div
                key={idx}
                className="px-6 py-4 flex items-center gap-4"
                style={{ borderBottom: '1px solid var(--line)' }}
              >
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: '22px',
                    height: '22px',
                    background: idx % 2 === 0 ? 'var(--orange)' : 'var(--panel-ink)',
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ width: '10px', height: '10px', color: '#ffffff' }}
                  />
                </div>
                <span
                  className="text-sm font-medium"
                  style={{ color: 'var(--panel-ink)' }}
                >
                  {area}
                </span>
              </div>
            ))}

            {/* Footer note */}
            <div
              className="px-6 py-4"
              style={{ background: 'rgba(3,27,71,0.03)' }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  letterSpacing: '0.1em',
                  color: 'var(--graphite)',
                }}
              >
                * Nationwide coverage: on-site installation coordination and equipment delivery.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
