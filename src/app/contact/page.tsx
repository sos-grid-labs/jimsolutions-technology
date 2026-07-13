import { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { createMetadata } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';
import { BUSINESS_DETAILS, getWhatsappLink } from '@/lib/constants';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
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
      <section className="bg-navy py-20 lg:py-28 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="mx-auto max-w-7xl px-4 relative space-y-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-heading leading-tight">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Get in touch to request a technical consultation or solar backup sizing quote.
          </p>
        </div>
      </section>

      {/* Contact Details and Info */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Details Panel */}
            <div className="space-y-8">
              <SectionHeading
                badge="Reach Us"
                title="Direct Operational Channels"
                subtitle="We are available daily from 8:00 AM to 10:00 PM. Choose your preferred way to connect."
                align="left"
              />

              <div className="space-y-6">
                {contactMethods.map((method, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F97316]/10 text-[#F97316] flex-shrink-0">
                      <FontAwesomeIcon icon={method.icon} className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy text-lg font-heading">{method.title}</h3>
                      <p className="text-xs text-navy/50">{method.label}</p>
                      <a
                        href={method.href}
                        target={method.external ? '_blank' : undefined}
                        rel={method.external ? 'noopener noreferrer' : undefined}
                        className="mt-1 text-sm font-bold text-navy hover:text-orange transition-colors inline-block"
                      >
                        {method.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Coverage Card */}
            <Card className="p-8 flex flex-col justify-between border border-gray-100 rounded-2xl shadow-sm bg-white">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-navy font-heading">
                  Coverage & Sizing Audits
                </h3>
                <p className="text-sm text-[#374151] leading-relaxed font-medium">
                  Based in <span className="font-semibold text-navy">Lagos, Nigeria</span>, we
                  provide on-site diagnostics, electrical safety compliance checks, solar inverter
                  hookups, and custom kitchen setups nationwide.
                </p>

                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex gap-2 text-sm text-[#374151] font-semibold">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="h-5 w-5 text-orange flex-shrink-0 mt-0.5"
                    />
                    <span>Lagos and Nationwide service coverage</span>
                  </div>
                  <div className="flex gap-2 text-sm text-[#374151] font-semibold">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="h-5 w-5 text-orange flex-shrink-0 mt-0.5"
                    />
                    <span>8:00 AM - 10:00 PM Daily Operational Hours</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Button href={whatsappUrl} variant="primary" size="lg" className="w-full" external>
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-5 w-5" />
                  Chat on WhatsApp Now
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
