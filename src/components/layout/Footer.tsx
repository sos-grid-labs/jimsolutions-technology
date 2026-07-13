import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
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
    { name: 'Electrical Services', href: '/services/electrical' },
    { name: 'Solar & Inverters', href: '/services/solar' },
    { name: 'Home Appliances', href: '/services/appliances' },
    { name: 'Kitchen Installation', href: '/services/kitchen' },
    { name: 'Interior Design', href: '/services/interior-design' },
    { name: 'Laundry Setup', href: '/services/laundry' },
  ];

  const whatsappMessage = 'Hello Jimsolutions Technology, I would like to get a quote.';
  const whatsappUrl = getWhatsappLink(whatsappMessage);

  return (
    <footer className="bg-navy-dark border-t border-white/5 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-md border border-white/10">
                <Image
                  src="/img/logo/logo.jpg"
                  alt="Jimsolutions Technology Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">Jimsolutions</span>
            </Link>
            <p className="text-sm leading-6 text-white/70">
              Handcrafted electrical wiring, solar panel arrays, built-in appliances setups, modern
              kitchen designs, and laundry spaces across Lagos and nationwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-orange">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-orange">
              Our Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & Contact */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-orange">
                Operating Hours
              </h3>
              <p className="mt-2 text-sm text-white/70">{BUSINESS_DETAILS.hours}</p>
              <p className="text-xs text-white/50">{BUSINESS_DETAILS.serviceArea}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-orange">
                Contact Details
              </h3>
              <ul className="mt-2 space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faPhone} className="h-4 w-4 text-orange" />
                  <a href={`tel:${BUSINESS_DETAILS.phone}`} className="hover:text-white">
                    {BUSINESS_DETAILS.phoneFormatted}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faWhatsapp} className="h-4 w-4 text-orange" />
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    WhatsApp Chat
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 text-orange" />
                  <a
                    href={`mailto:${BUSINESS_DETAILS.email}`}
                    className="hover:text-white break-all"
                  >
                    {BUSINESS_DETAILS.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-white/40">
          <p>
            &copy; {currentYear} {BUSINESS_DETAILS.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
