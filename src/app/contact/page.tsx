import { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { createMetadata } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';
import { BUSINESS_DETAILS, getWhatsappLink } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = createMetadata({
  title: 'Contact Jimsolutions Technology | WhatsApp, Call, Email',
  description:
    'Reach Jimsolutions Technology for electrical wiring, solar quotes, and appliance supply setups. Contact via WhatsApp, call, or email from 8am to 10pm.',
  path: '/contact',
});

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ]);

  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I would like to get a quote. My location is Lagos.',
  );

  const contactMethods = [
    {
      title: 'Phone Call',
      value: BUSINESS_DETAILS.phoneFormatted,
      href: `tel:${BUSINESS_DETAILS.phone}`,
      icon: faPhone,
      label: 'Call our team directly',
    },
    {
      title: 'WhatsApp Chat',
      value: 'Start Chat',
      href: whatsappUrl,
      icon: faWhatsapp,
      label: 'Available 8am to 10pm',
      external: true,
    },
    {
      title: 'Email Address',
      value: BUSINESS_DETAILS.email,
      href: `mailto:${BUSINESS_DETAILS.email}`,
      icon: faEnvelope,
      label: 'Get a proposal in writing',
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
            GET IN TOUCH
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
            Contact Us
          </h1>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-body)' }}
          >
            Get in touch to request a technical consultation or solar backup sizing quote.
          </p>
        </div>
      </section>

      {/* Contact Details and Info */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            
            {/* Contact Details Panel — 7 cols */}
            <div className="lg:col-span-7 space-y-8">
              <SectionHeading
                eyebrow="Reach Us"
                title="Direct Channels"
                subtitle="We are available daily from 8:00 AM to 10:00 PM. Choose your preferred way to connect."
                align="left"
              />

              <div style={{ border: '1px solid var(--line)' }}>
                {contactMethods.map((method, idx) => {
                  const badgeBg = idx % 2 === 0 ? 'var(--orange)' : 'var(--panel-ink)';
                  return (
                    <div
                      key={idx}
                      className="flex gap-4 items-start p-6"
                      style={{
                        borderBottom: idx < contactMethods.length - 1 ? '1px solid var(--line)' : undefined,
                        background: idx % 2 === 1 ? 'rgba(3,27,71,0.01)' : '#ffffff',
                      }}
                    >
                      <div
                        className="flex items-center justify-center flex-shrink-0"
                        style={{ width: '40px', height: '40px', background: badgeBg }}
                      >
                        <FontAwesomeIcon icon={method.icon} style={{ width: '18px', height: '18px', color: '#ffffff' }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-navy">{method.title}</h3>
                        <p className="text-xs text-navy/50">{method.label}</p>
                        <a
                          href={method.href}
                          target={method.external ? '_blank' : undefined}
                          rel={method.external ? 'noopener noreferrer' : undefined}
                          className="mt-1 text-sm font-bold text-orange hover:text-navy transition-colors inline-block"
                        >
                          {method.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Local Coverage Card — 5 cols */}
            <div
              className="lg:col-span-5 flex flex-col justify-between"
              style={{ border: '1px solid var(--line)', background: '#f8f9fc', padding: '2rem' }}
            >
              <div className="space-y-6">
                <h3
                  className="font-black uppercase leading-tight"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    color: 'var(--panel-ink)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Coverage &amp; Sizing Audits
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--graphite)' }}>
                  Based in <span className="font-semibold text-navy">Lagos, Nigeria</span>, we provide on-site diagnostics, electrical safety compliance checks, solar inverter hookups, and custom kitchen setups nationwide.
                </p>

                <div
                  className="space-y-3 pt-6"
                  style={{ borderTop: '1px solid var(--line)' }}
                >
                  <div className="flex gap-3 text-sm font-semibold text-navy">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      style={{ width: '14px', height: '14px', color: 'var(--orange)', marginTop: '3px' }}
                    />
                    <span>Lagos and Nationwide service coverage</span>
                  </div>
                  <div className="flex gap-3 text-sm font-semibold text-navy">
                    <FontAwesomeIcon
                      icon={faClock}
                      style={{ width: '14px', height: '14px', color: 'var(--orange)', marginTop: '3px' }}
                    />
                    <span>8:00 AM - 10:00 PM Daily Operations</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full text-white font-bold uppercase tracking-wider text-sm py-4 px-6"
                  style={{ background: 'var(--orange)', border: '1px solid var(--orange)', transition: 'all 200ms' }}
                >
                  <FontAwesomeIcon icon={faWhatsapp} style={{ width: '16px', height: '16px' }} />
                  Chat on WhatsApp Now
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
