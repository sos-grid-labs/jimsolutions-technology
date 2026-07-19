import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { BUSINESS_DETAILS, getWhatsappLink } from '@/lib/constants';

/**
 * FinalCTA — REDESIGN-PROMPT.md §8
 *
 * Full-width navy band, short headline in display font, two action buttons.
 * Left-aligned content (not centred). No radial dot pattern.
 * Orange top accent line. Mono eyebrow. Hairline bordered CTA buttons.
 */
export default function FinalCTA() {
  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I would like to get a quote and schedule an engineering consultation.',
  );

  return (
    <section
      className="w-full"
      style={{ background: 'var(--panel-ink)', borderTop: '2px solid var(--orange)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Headline block */}
          <div className="lg:col-span-7">
            <p
              className="mb-4 uppercase"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.18em',
                color: 'var(--orange)',
              }}
            >
              Get Started Today
            </p>
            <h2
              className="font-black uppercase leading-none"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                color: '#ffffff',
                letterSpacing: '-0.01em',
              }}
            >
              Ready to Start Your <span style={{ color: 'var(--orange)' }}>Installation?</span>
            </h2>
            <p
              className="mt-5 text-base leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '52ch' }}
            >
              Avoid inverter overloading and unsafe wiring. Connect with a certified engineer today
              for a custom load audit and fit-out quote. We respond within 2 hours.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="final-cta-primary inline-flex items-center justify-center gap-3 px-7 py-4 font-bold uppercase tracking-wider text-sm text-white"
              style={{
                background: 'var(--orange)',
                border: '1px solid var(--orange)',
              }}
            >
              <FontAwesomeIcon icon={faWhatsapp} style={{ width: '18px', height: '18px' }} />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${BUSINESS_DETAILS.phone}`}
              className="final-cta-secondary inline-flex items-center justify-center gap-3 px-7 py-4 font-bold uppercase tracking-wider text-sm"
              style={{
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.25)',
                background: 'transparent',
              }}
            >
              <FontAwesomeIcon icon={faPhone} style={{ width: '14px', height: '14px' }} />
              {BUSINESS_DETAILS.phoneFormatted}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
