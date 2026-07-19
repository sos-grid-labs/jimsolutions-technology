'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faXmark,
  faChevronDown,
  faPhone,
  faEnvelope,
  faClock,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { BUSINESS_DETAILS } from '@/lib/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Projects', href: '/projects' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'FAQ', href: '/faq' },
  ];

  const subServices = [
    { name: 'Premium Appliance Solutions', href: '/services/appliances' },
    { name: 'Kitchen Engineering', href: '/services/kitchen' },
    { name: 'Refrigeration Systems', href: '/services/refrigeration' },
    { name: 'Laundry Solutions', href: '/services/laundry' },
    { name: 'Renewable Energy', href: '/services/solar' },
    { name: 'Interior Solutions', href: '/services/interior-design' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full" style={{ fontFamily: 'var(--font-body)' }}>
      {/* ── Utility Bar ──────────────────────────────────────────────────── */}
      <div
        className="hidden md:block w-full text-white"
        style={{
          background: 'var(--panel-ink)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9">
            {/* Contact info */}
            <div
              className="flex items-center gap-6"
              style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px' }}
            >
              <a
                href={`tel:${BUSINESS_DETAILS.phone}`}
                className="footer-nav-link flex items-center gap-1.5 transition-colors"
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ width: '11px', height: '11px', color: 'var(--orange)' }}
                />
                <span style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.06em' }}>
                  {BUSINESS_DETAILS.phoneFormatted}
                </span>
              </a>
              <a
                href={`mailto:${BUSINESS_DETAILS.email}`}
                className="footer-nav-link hidden lg:flex items-center gap-1.5 transition-colors"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ width: '11px', height: '11px', color: 'var(--orange)' }}
                />
                <span>{BUSINESS_DETAILS.email}</span>
              </a>
              <span className="flex items-center gap-1.5">
                <FontAwesomeIcon
                  icon={faClock}
                  style={{ width: '11px', height: '11px', color: 'var(--orange)' }}
                />
                <span>{BUSINESS_DETAILS.hours}</span>
              </span>
              <span className="hidden xl:flex items-center gap-1.5">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ width: '11px', height: '11px', color: 'var(--orange)' }}
                />
                <span>{BUSINESS_DETAILS.serviceArea}</span>
              </span>
            </div>

            {/* Live status pill */}
            <div
              className="flex items-center gap-2"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              <span
                className="animate-status-pulse inline-block rounded-full"
                style={{ width: '7px', height: '7px', background: 'var(--live)' }}
              />
              <span className="uppercase">Engineers On Duty</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Nav Row ─────────────────────────────────────────────────── */}
      <div className="w-full bg-white" style={{ borderBottom: '1px solid var(--line)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div
                className="relative h-9 w-9 overflow-hidden"
                style={{ border: '1px solid var(--line)' }}
              >
                <Image
                  src="/img/logo/logo.jpg"
                  alt="Jimsolutions Technology Logo"
                  fill
                  sizes="36px"
                  className="object-cover"
                  priority
                />
              </div>
              <span
                className="text-xs sm:text-sm font-black uppercase tracking-wider sm:tracking-widest"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--panel-ink)' }}
              >
                JIM SOLUTIONS TECHNOLOGY
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center gap-x-7">
                {navLinks.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.hasDropdown && pathname.startsWith('/services'));

                  if (link.hasDropdown) {
                    return (
                      <div
                        key={link.name}
                        className="relative group py-5"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        <button
                          className="nav-link flex items-center gap-1"
                          data-active={isActive ? 'true' : 'false'}
                          style={{ color: isActive ? 'var(--orange)' : undefined }}
                        >
                          {link.name}
                          <FontAwesomeIcon
                            icon={faChevronDown}
                            style={{ width: '10px', height: '10px' }}
                            className="transition-transform duration-150 group-hover:rotate-180"
                          />
                        </button>

                        {isServicesOpen && (
                          <div
                            className="absolute top-full left-0 bg-white w-56 py-1 z-50"
                            style={{ border: '1px solid var(--line)' }}
                          >
                            {subServices.map((sub) => (
                              <Link key={sub.name} href={sub.href} className="nav-dropdown-item">
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="nav-link"
                      data-active={isActive ? 'true' : 'false'}
                      style={{ color: isActive ? 'var(--orange)' : undefined }}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              <Link href="/contact" className="nav-cta">
                Contact Us
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex md:hidden items-center justify-center p-2"
              style={{ color: 'var(--panel-ink)' }}
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon
                icon={isOpen ? faXmark : faBars}
                style={{ width: '20px', height: '20px' }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ──────────────────────────────────────────────────── */}
      {isOpen && (
        <div className="md:hidden bg-white" style={{ borderBottom: '1px solid var(--line)' }}>
          {/* Mobile utility strip */}
          <div
            className="px-4 py-3 flex flex-col gap-2"
            style={{
              background: 'var(--panel-ink)',
              color: 'rgba(255,255,255,0.7)',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.05em',
            }}
          >
            <a href={`tel:${BUSINESS_DETAILS.phone}`} className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faPhone}
                style={{ width: '11px', height: '11px', color: 'var(--orange)' }}
              />
              {BUSINESS_DETAILS.phoneFormatted}
            </a>
            <span className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faClock}
                style={{ width: '11px', height: '11px', color: 'var(--orange)' }}
              />
              {BUSINESS_DETAILS.hours}
            </span>
          </div>

          {/* Mobile links */}
          <nav className="px-4 py-4 flex flex-col">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-sm font-semibold uppercase tracking-widest transition-colors"
                    style={{
                      color: isActive ? 'var(--orange)' : 'var(--panel-ink)',
                      borderBottom: '1px solid var(--line)',
                    }}
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-4">
                      {subServices.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-2.5 text-xs font-medium transition-colors"
                          style={{
                            color: 'var(--graphite)',
                            borderBottom: '1px solid var(--line)',
                          }}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="nav-cta mt-4 text-center justify-center"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
