import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { getWhatsappLink } from '@/lib/constants';
import SectionHeading from '../ui/SectionHeading';
import FramedImage from '../ui/FramedImage';

const features = [
  'Custom cabinet design and flush joint alignment',
  'Island induction hob and downdraft extractor mounting',
  'Built-in oven, microwave, and dishwasher integration',
  'Gas and electrical cooktop load balancing',
];

export default function KitchenSection() {
  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I saw your kitchen cabinet and island induction hob installation and would like to get a quote.',
  );

  return (
    <section
      className="w-full"
      style={{ background: 'var(--paper)', borderBottom: '1px solid var(--line)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content left */}
          <div className="lg:col-span-7 space-y-8">
            <SectionHeading
              eyebrow="Kitchen Engineering"
              title="Handcrafted Cabinets. Flush Cooktops."
              subtitle="We bridge engineering precision and beautiful visual integration — designing layout flows, mounting extractors, and installing custom cabinet doors."
              align="left"
            />

            {/* Feature rows */}
            <div style={{ border: '1px solid var(--line)' }}>
              {features.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 px-5 py-4"
                  style={{
                    borderBottom: i < features.length - 1 ? '1px solid var(--line)' : undefined,
                  }}
                >
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '24px',
                      height: '24px',
                      background: i % 2 === 0 ? 'var(--panel-ink)' : 'var(--orange)',
                    }}
                  >
                    <FontAwesomeIcon
                      icon={i % 2 === 0 ? faUtensils : faScrewdriverWrench}
                      style={{ width: '10px', height: '10px', color: '#ffffff' }}
                    />
                  </div>
                  <span className="text-sm font-medium" style={{ color: 'var(--panel-ink)' }}>
                    {item}
                  </span>
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
                Get Kitchen Quote
              </a>
              <a
                href="/services/kitchen"
                className="inline-flex items-center px-6 py-3.5 font-bold uppercase tracking-wider text-sm"
                style={{ color: 'var(--panel-ink)', border: '1px solid var(--line)' }}
              >
                View Full Scope
              </a>
            </div>
          </div>

          {/* Image right */}
          <div className="lg:col-span-5">
            <FramedImage
              src="/img/services/island-kitchen-cooktop.jpg"
              alt="Modern Kitchen Cabinetry and Hob Layout"
              caption="KITCHEN FIT-OUT, VICTORIA ISLAND"
              aspect="aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
