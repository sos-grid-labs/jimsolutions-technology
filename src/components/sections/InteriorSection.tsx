import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faRulerCombined, faBolt, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { getWhatsappLink } from '@/lib/constants';
import SectionHeading from '../ui/SectionHeading';
import FramedImage from '../ui/FramedImage';

const features = [
  'Gypsum board partitions for home and office division',
  'POP ceiling works and accent LED strip lighting',
  'Custom floating media shelves and console mounting',
  'Material colour and texture alignment per brief',
];

export default function InteriorSection() {
  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I would like to get a quote for gypsum drywall partition boards or interior renovations.',
  );

  return (
    <section
      className="w-full"
      style={{ background: 'var(--panel-ink)', borderTop: '2px solid var(--orange)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Image left */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <FramedImage
              src="/img/services/interiors.jpg"
              alt="Gypsum Board Wall Panel Partition"
              caption="FIG. 04 — INTERIOR FIT-OUT, IKOYI"
              aspect="aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          {/* Content right */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <SectionHeading
              eyebrow="Interior Fit-Out"
              title="Modern Upgrades. Handcrafted Materials."
              subtitle="We assemble custom drywall partitions, build POP ceilings, configure floating media shelves, and mount accent LED strips to harmonise lighting with room textures."
              theme="dark"
              align="left"
            />

            {/* Feature rows on dark bg */}
            <div style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
              {features.map((item, i) => {
                const icons = [faPalette, faRulerCombined, faBolt, faHeadset];
                const badgeBg = i % 2 === 0 ? 'var(--orange)' : 'rgba(255,255,255,0.12)';
                return (
                  <div
                    key={i}
                    className="flex items-center gap-4 px-5 py-4"
                    style={{
                      borderBottom: i < features.length - 1 ? '1px solid rgba(255,255,255,0.08)' : undefined,
                    }}
                  >
                    <div
                      className="flex items-center justify-center flex-shrink-0"
                      style={{ width: '24px', height: '24px', background: badgeBg }}
                    >
                      <FontAwesomeIcon
                        icon={icons[i]}
                        style={{ width: '10px', height: '10px', color: '#ffffff' }}
                      />
                    </div>
                    <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>
                      {item}
                    </span>
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
                Book Consultation
              </a>
              <a
                href="/services/interior-design"
                className="inline-flex items-center px-6 py-3.5 font-bold uppercase tracking-wider text-sm"
                style={{ color: '#ffffff', border: '1px solid rgba(255,255,255,0.25)' }}
              >
                Learn More
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
