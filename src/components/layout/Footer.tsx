import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faClock,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { BUSINESS_DETAILS, getWhatsappLink } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Premium Appliance Solutions', href: '/services/appliances' },
    { name: 'Kitchen Engineering', href: '/services/kitchen' },
    { name: 'Refrigeration Systems', href: '/services/refrigeration' },
    { name: 'Laundry Solutions', href: '/services/laundry' },
    { name: 'Renewable Energy', href: '/services/solar' },
    { name: 'Interior Solutions', href: '/services/interior-design' },
  ];

  const contactRows = [
    {
      icon: faPhone,
      label: 'DIRECT LINE',
      value: BUSINESS_DETAILS.phoneFormatted,
      href: `tel:${BUSINESS_DETAILS.phone}`,
      external: false,
    },
    {
      icon: faWhatsapp,
      label: 'WHATSAPP',
      value: 'Send a Message',
      href: getWhatsappLink('Hello Jimsolutions Technology, I would like to get a quote.'),
      external: true,
    },
    {
      icon: faEnvelope,
      label: 'EMAIL',
      value: BUSINESS_DETAILS.email,
      href: `mailto:${BUSINESS_DETAILS.email}`,
      external: false,
    },
    {
      icon: faClock,
      label: 'HOURS',
      value: BUSINESS_DETAILS.hours,
      href: undefined,
      external: false,
    },
    {
      icon: faLocationDot,
      label: 'BASE',
      value: BUSINESS_DETAILS.serviceArea,
      href: undefined,
      external: false,
    },
  ];

  return (
    <footer
      className="w-full text-white"
      style={{ background: 'var(--panel-ink)', fontFamily: 'var(--font-body)' }}
    >
      {/* Orange top accent */}
      <div style={{ height: '2px', background: 'var(--orange)' }} />

      {/* Main body */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">

          {/* Brand — 4 cols */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <div
                className="relative h-10 w-10 overflow-hidden flex-shrink-0"
                style={{ border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <Image
                  src="/img/logo/logo.jpg"
                  alt="Jimsolutions Technology Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <span
                className="text-base font-black uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-display)', color: '#ffffff' }}
              >
                Jimsolutions
              </span>
            </Link>

            <p
              className="text-sm leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '28ch' }}
            >
              Professional electrical wiring, solar &amp; inverter systems, home appliances,
              kitchen installations, and interior design. Based in Lagos. Active nationwide.
            </p>

            {/* Live pill */}
            <div
              className="inline-flex items-center gap-2 self-start"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              <span
                className="animate-status-pulse inline-block rounded-full h-2 w-2"
                style={{ background: 'var(--live)' }}
              />
              <span className="uppercase">Engineers On Duty</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href={BUSINESS_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.7)] hover:bg-[var(--orange)] hover:text-white transition-colors"
                style={{ width: '32px', height: '32px' }}
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} style={{ width: '14px', height: '14px' }} />
              </a>
              <a
                href={BUSINESS_DETAILS.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.7)] hover:bg-[var(--orange)] hover:text-white transition-colors"
                style={{ width: '32px', height: '32px' }}
                aria-label="TikTok"
              >
                <FontAwesomeIcon icon={faTiktok} style={{ width: '14px', height: '14px' }} />
              </a>
            </div>
          </div>

          {/* Quick Links — 2 cols */}
          <div className="md:col-span-2">
            <p
              className="mb-4"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.14em',
                color: 'var(--orange)',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              Quick Links
            </p>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="footer-nav-link block py-2 text-xs font-medium transition-colors duration-150"
                    style={{
                      color: 'rgba(255,255,255,0.6)',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services — 2 cols */}
          <div className="md:col-span-2">
            <p
              className="mb-4"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.14em',
                color: 'var(--orange)',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              Our Services
            </p>
            <ul>
              {services.map((s) => (
                <li key={s.name}>
                  <Link
                    href={s.href}
                    className="footer-nav-link block py-2 text-xs font-medium transition-colors duration-150"
                    style={{
                      color: 'rgba(255,255,255,0.6)',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact block — 4 cols */}
          <div className="md:col-span-4">
            <p
              className="mb-4"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.14em',
                color: 'var(--orange)',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              Contact &amp; Hours
            </p>
            <div className="flex flex-col">
              {contactRows.map((row, i) => {
                const content = (
                  <div
                    className="flex items-start gap-3 py-3"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    {/* Icon badge — alternates orange / white-tinted */}
                    <div
                      className="flex-shrink-0 flex items-center justify-center"
                      style={{
                        width: '28px',
                        height: '28px',
                        background: i % 2 === 0 ? 'var(--orange)' : 'rgba(255,255,255,0.1)',
                        marginTop: '2px',
                      }}
                    >
                      <FontAwesomeIcon
                        icon={row.icon}
                        style={{ width: '12px', height: '12px', color: '#ffffff' }}
                      />
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '9px',
                          letterSpacing: '0.12em',
                          color: 'rgba(255,255,255,0.35)',
                          textTransform: 'uppercase',
                          marginBottom: '2px',
                        }}
                      >
                        {row.label}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: 'rgba(255,255,255,0.8)', wordBreak: 'break-word' }}
                      >
                        {row.value}
                      </p>
                    </div>
                  </div>
                );

                if (row.href) {
                  return (
                    <a
                      key={i}
                      href={row.href}
                      target={row.external ? '_blank' : undefined}
                      rel={row.external ? 'noopener noreferrer' : undefined}
                      className="footer-contact-row"
                    >
                      {content}
                    </a>
                  );
                }
                return <div key={i}>{content}</div>;
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.3)',
            }}
          >
            &copy; {currentYear} {BUSINESS_DETAILS.name}. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.06em',
              color: 'rgba(255,255,255,0.2)',
            }}
          >
            Lagos, Nigeria &mdash; Nationwide Coverage
          </p>
        </div>
      </div>
    </footer>
  );
}
