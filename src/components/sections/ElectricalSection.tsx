import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faShieldAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { BUSINESS_DETAILS, getWhatsappLink } from '@/lib/constants';
import SectionHeading from '../ui/SectionHeading';
import FramedImage from '../ui/FramedImage';

const checklist = [
  'Conduit cable management — zero visible wires',
  'Certified grounding audits and surge protection systems',
  'Custom distribution board wiring and load balancing',
  'POP accent lighting integrations and switch assemblies',
];

export default function ElectricalSection() {
  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I saw your electrical safety compliance wiring and would like to get a quote.',
  );

  return (
    <section
      className="w-full"
      style={{ background: 'var(--paper)', borderBottom: '1px solid var(--line)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Image left */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <FramedImage
              src="/img/services/electrical.jpg"
              alt="Neat Electrical Wiring Board"
              caption="FIG. 01 — DISTRIBUTION BOARD, LAGOS"
              aspect="aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          {/* Content right */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <SectionHeading
              eyebrow="Electrical Safety"
              title="Certified Engineering. Safety Compliant."
              subtitle="Avoid electrical hazards and power failures. We treat wiring as a craft — fully balanced, safety-tested circuits with clean routing paths behind your walls and ceilings."
              align="left"
            />

            {/* Spec rows — hairline bordered */}
            <div style={{ border: '1px solid var(--line)' }}>
              {checklist.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 px-5 py-4"
                  style={{ borderBottom: i < checklist.length - 1 ? '1px solid var(--line)' : undefined }}
                >
                  <div
                    className="flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      width: '24px',
                      height: '24px',
                      background: i % 2 === 0 ? 'var(--orange)' : 'var(--panel-ink)',
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faBolt}
                      style={{ width: '10px', height: '10px', color: '#ffffff' }}
                    />
                  </div>
                  <span className="text-sm leading-snug font-medium" style={{ color: 'var(--panel-ink)' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Safety badge row */}
            <div
              className="flex items-center gap-4 px-5 py-4"
              style={{ border: '1px solid var(--line)', background: 'rgba(3,27,71,0.03)' }}
            >
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{ width: '32px', height: '32px', background: 'var(--panel-ink)' }}
              >
                <FontAwesomeIcon
                  icon={faShieldAlt}
                  style={{ width: '14px', height: '14px', color: '#ffffff' }}
                />
              </div>
              <div>
                <p
                  className="font-semibold text-sm"
                  style={{ color: 'var(--panel-ink)' }}
                >
                  Safety Certified
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '0.1em',
                    color: 'var(--graphite)',
                  }}
                >
                  Strict compliance with NERC guidelines
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 font-bold uppercase tracking-wider text-sm text-white"
                style={{ background: 'var(--panel-ink)', border: '1px solid var(--panel-ink)' }}
              >
                <FontAwesomeIcon icon={faWhatsapp} style={{ width: '15px', height: '15px' }} />
                Get Electrical Quote
              </a>
              <a
                href={`tel:${BUSINESS_DETAILS.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 font-bold uppercase tracking-wider text-sm"
                style={{ color: 'var(--panel-ink)', border: '1px solid var(--line)' }}
              >
                <FontAwesomeIcon icon={faPhone} style={{ width: '13px', height: '13px', color: 'var(--orange)' }} />
                Call Now
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
