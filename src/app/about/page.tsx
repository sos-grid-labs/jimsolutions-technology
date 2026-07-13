import { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faHourglassHalf, faMapPin, faClock } from '@fortawesome/free-solid-svg-icons';
import { createMetadata } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';
import { BUSINESS_DETAILS, getWhatsappLink } from '@/lib/constants';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import FramedImage from '@/components/ui/FramedImage';

export const metadata: Metadata = createMetadata({
  title: 'About Jimsolutions Technology | Trusted Electrical and Solar Experts',
  description:
    'Learn about Jimsolutions Technology, our core values, and our commitment to clean workmanship, solar energy, and home solutions in Lagos and nationwide.',
  path: '/about',
});

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ]);

  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I would like to make an inquiry after reading about your business.',
  );

  const values = [
    {
      title: 'Neat Workmanship',
      description: 'Clean cable management, flush alignment, and safe load distribution setups.',
      icon: faTools,
    },
    {
      title: 'Reliable Durability',
      description: 'Quality tested solar/inverter batteries and robust electrical wiring that lasts.',
      icon: faHourglassHalf,
    },
    {
      title: 'Lagos & Nationwide Service',
      description: 'Serving residential and commercial clients across Lagos and nationwide.',
      icon: faMapPin,
    },
    {
      title: '8am to 10pm Daily Support',
      description: 'Available every day for custom sizing calculations and installer support.',
      icon: faClock,
    },
  ];

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />

      {/* Page Header */}
      <section
        className="py-20 lg:py-24 text-center relative overflow-hidden"
        style={{ background: 'var(--panel-ink)', borderBottom: '2px solid var(--orange)' }}
      >
        <div className="mx-auto max-w-7xl px-4 relative space-y-4">
          <p
            className="uppercase"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.18em',
              color: 'var(--orange)',
            }}
          >
            ESTABLISHED IN NIGERIA
          </p>
          <h1
            className="font-black uppercase leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              color: '#ffffff',
              letterSpacing: '-0.01em',
            }}
          >
            About Our Company
          </h1>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-body)' }}
          >
            Technical expertise, clean execution, and professional standards since day one.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section
        className="w-full bg-white"
        style={{ borderBottom: '1px solid var(--line)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Image Left */}
            <div>
              <FramedImage
                src="/img/services/solar.jpg"
                alt="Jimsolutions Inverter Installation"
                caption="FIG. 10 — INVERTER INSTALLATION, SHOMOLU"
                aspect="aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content Right */}
            <div className="space-y-8">
              <SectionHeading
                eyebrow="Who We Are"
                title="Building Stable Power & Modern Homes"
                align="left"
              />
              <div
                className="text-base leading-relaxed space-y-6"
                style={{ color: 'var(--graphite)', fontFamily: 'var(--font-body)' }}
              >
                <p>
                  Jimsolutions Technology is based in Lagos, Nigeria. We provide high-quality
                  engineering services, electrical installations, custom cabinet kitchen designs,
                  and utility setup layouts.
                </p>
                <p>
                  We believe that clients deserve clean, safe, and beautiful workmanship. That is
                  why our team handles every wire connection, inverter sizing calculation, and
                  appliance setup with precision.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 font-bold uppercase tracking-wider text-sm text-white"
                  style={{ background: 'var(--panel-ink)', border: '1px solid var(--panel-ink)' }}
                >
                  Get in Touch
                </a>
                <a
                  href={`tel:${BUSINESS_DETAILS.phone}`}
                  className="inline-flex items-center px-6 py-3.5 font-bold uppercase tracking-wider text-sm"
                  style={{ color: 'var(--panel-ink)', border: '1px solid var(--line)' }}
                >
                  Call Direct
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section
        className="w-full"
        style={{ background: '#f8f9fc', borderBottom: '1px solid var(--line)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <SectionHeading
            eyebrow="Our Values"
            index="04 CORE PILARS"
            title="What Drives Us"
            subtitle="Our commitment to safety, compliance, and aesthetic integration in every project."
            className="mb-16"
          />

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{ border: '1px solid var(--line)' }}
          >
            {values.map((val, idx) => {
              const badgeBg = idx % 2 === 0 ? 'var(--panel-ink)' : 'var(--orange)';
              return (
                <div
                  key={idx}
                  className="p-8 flex flex-col"
                  style={{
                    background: '#ffffff',
                    borderRight: idx < values.length - 1 ? '1px solid var(--line)' : undefined,
                  }}
                >
                  <div
                    className="flex items-center justify-center flex-shrink-0 mb-6"
                    style={{ width: '40px', height: '40px', background: badgeBg }}
                  >
                    <FontAwesomeIcon icon={val.icon} style={{ width: '18px', height: '18px', color: '#ffffff' }} />
                  </div>
                  <h3
                    className="font-black uppercase leading-tight mb-3"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.2rem',
                      color: 'var(--panel-ink)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {val.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--graphite)' }}>
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
