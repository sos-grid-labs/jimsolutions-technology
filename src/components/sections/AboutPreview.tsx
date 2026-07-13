import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { BUSINESS_DETAILS, getWhatsappLink } from '@/lib/constants';
import SectionHeading from '../ui/SectionHeading';
import FramedImage from '../ui/FramedImage';

/**
 * AboutPreview — REDESIGN-PROMPT design system
 *
 * Two-column section: text narrative left, FramedImage right.
 * FramedImage shows the corner-bracket signature on the about photo.
 * Checklist uses alternating icon badges.
 */
export default function AboutPreview() {
  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I read about your clean workmanship promise and would like to get a quote.',
  );

  const points = [
    'Clean, compliant wiring with zero exposed conduits',
    'Custom load calculations for solar energy backup systems',
    'Perfect cabinet layout & kitchen appliance integration',
    'Lagos-based with verified nationwide technical coverage',
  ];

  return (
    <section
      className="w-full"
      style={{ background: '#f8f9fc', borderBottom: '1px solid var(--line)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          {/* Text block */}
          <div className="space-y-8 order-2 lg:order-1">
            <SectionHeading
              eyebrow="About Jimsolutions"
              title="Handcrafted Quality. Engineered to Last."
              subtitle={undefined}
              align="left"
            />

            <div className="space-y-4">
              <p className="text-base leading-relaxed" style={{ color: 'var(--graphite)', maxWidth: '55ch' }}>
                Jimsolutions Technology is a professional engineering company serving Lagos and
                nationwide. We believe technical installations should be neat, safe, and built to
                look good.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--graphite)', maxWidth: '55ch' }}>
                Our team manages projects from solar energy audit sizing to built-in appliance
                placement, cabinets, and complete interior fit-outs. Available daily from{' '}
                <span style={{ color: 'var(--panel-ink)', fontWeight: 600 }}>
                  {BUSINESS_DETAILS.hours}
                </span>.
              </p>
            </div>

            {/* Checklist */}
            <ul className="space-y-3">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div
                    className="flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      width: '22px',
                      height: '22px',
                      background: i % 2 === 0 ? 'var(--panel-ink)' : 'var(--orange)',
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ width: '10px', height: '10px', color: '#ffffff' }}
                    />
                  </div>
                  <span className="text-sm leading-snug font-medium" style={{ color: 'var(--panel-ink)' }}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 font-bold uppercase tracking-wider text-sm text-white"
                style={{ background: 'var(--orange)', border: '1px solid var(--orange)' }}
              >
                <FontAwesomeIcon icon={faWhatsapp} style={{ width: '15px', height: '15px' }} />
                Get a Custom Quote
              </a>
              <a
                href={`tel:${BUSINESS_DETAILS.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 font-bold uppercase tracking-wider text-sm"
                style={{ color: 'var(--panel-ink)', border: '1px solid var(--line)' }}
              >
                <FontAwesomeIcon icon={faPhone} style={{ width: '13px', height: '13px', color: 'var(--orange)' }} />
                {BUSINESS_DETAILS.phoneFormatted}
              </a>
            </div>
          </div>

          {/* FramedImage block */}
          <div className="order-1 lg:order-2">
            <FramedImage
              src="/img/services/electrical.jpg"
              alt="Jimsolutions Technical Team at Work"
              caption="FIG. 09 — ELECTRICAL INSTALLATION, LAGOS"
              aspect="aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
