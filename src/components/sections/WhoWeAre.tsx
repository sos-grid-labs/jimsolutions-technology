import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { getWhatsappLink } from '@/lib/constants';
import SectionHeading from '../ui/SectionHeading';
import FramedImage from '../ui/FramedImage';

/**
 * WhoWeAre — REDESIGN-PROMPT.md §3
 *
 * Substantial "Who we are" narrative section (not a headline-only teaser).
 * Left: FramedImage with corner brackets + caption.
 * Right: SectionHeading + long paragraph + checklist + CTA.
 * No rounded corners, no shadows. White bg.
 */
export default function WhoWeAre() {
  const whatsappUrl = getWhatsappLink();

  const points = [
    'Premium appliance solutions for Miele, Gaggenau, Bosch, Siemens, etc.',
    'Bespoke kitchen furniture and built-in appliance integration',
    'Professional refrigeration and luxury wine cooler setups',
    'Commercial and residential laundry engineering and setups',
    'Sized solar backups, inverters, and battery banks',
  ];

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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left: FramedImage */}
          <div className="lg:col-span-5">
            <FramedImage
              src="/img/gallery/Full-Grill-Stainless-Steel-Outdoor-Unit-with-Gas-Hob.png"
              alt="Full Grill Stainless Steel Outdoor Unit with Gas Hob"
              caption="FULL GRILL STAINLESS STEEL OUTDOOR UNIT WITH GAS HOB"
              aspect="aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 space-y-8">
            <SectionHeading
              eyebrow="Who We Are"
              title="Nigeria's Trusted Technical Solutions Company"
              subtitle={undefined}
              align="left"
            />

            <div className="space-y-4">
              <p
                className="text-base leading-relaxed"
                style={{ color: 'var(--graphite)', maxWidth: '58ch' }}
              >
                Jimsolutions Technology is a Nigerian engineering company specializing in premium
                home appliance solutions, interior installations, and technical facility support.
                Based in Lagos, we provide professional workmanship and technical support
                nationwide.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: 'var(--graphite)', maxWidth: '58ch' }}
              >
                We provide installation, preventive maintenance, diagnostics, repairs, and system
                optimization for luxury residential and commercial properties. Our expertise covers
                brands like Miele, Gaggenau, Bosch, Siemens, Fhiaba, Barazza, and Teka. Our team is
                available Monday to Friday, 9:00 AM to 5:00 PM.
              </p>
            </div>

            {/* Checklist */}
            <ul className="space-y-3 pt-2">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  {/* Alternating badge colours */}
                  <div
                    className="flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      width: '22px',
                      height: '22px',
                      background: i % 2 === 0 ? 'var(--orange)' : 'var(--panel-ink)',
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ width: '10px', height: '10px', color: '#ffffff' }}
                    />
                  </div>
                  <span
                    className="text-sm leading-snug font-medium"
                    style={{ color: 'var(--panel-ink)' }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="pt-2 flex flex-wrap gap-4">
              <a href="/about" className="nav-cta">
                Learn More About Us
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-3 text-xs font-bold uppercase tracking-wider transition-colors duration-200"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'var(--panel-ink)',
                  border: '1px solid var(--line)',
                }}
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
