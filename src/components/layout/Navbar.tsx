'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { getWhatsappLink } from '@/lib/constants';
import Button from '../ui/Button';

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
    <header className="sticky top-0 z-40 w-full shadow-sm bg-white border-b border-navy/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo on Left */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-md border border-navy/10">
              <Image
                src="/img/logo/logo.jpg"
                alt="Jimsolutions Technology Logo"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </div>
            <span className="text-lg font-bold tracking-tight text-navy uppercase">
              Jimsolutions
            </span>
          </Link>

          {/* Menu on Right */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-x-6">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href || (link.hasDropdown && pathname.startsWith(link.href));

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative group py-4"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button
                        className={`text-sm font-semibold flex items-center gap-1 transition-colors duration-200 ${
                          isActive ? 'text-orange' : 'text-navy/70 hover:text-navy'
                        }`}
                      >
                        {link.name}
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="h-3 w-3 text-navy/40 group-hover:text-orange"
                        />
                      </button>

                      {isServicesOpen && (
                        <div className="absolute top-full left-0 bg-white border border-navy/5 shadow-lg rounded-xl py-2 w-52 space-y-0.5 z-50">
                          {subServices.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-4 py-2 text-xs font-semibold text-navy/80 hover:text-orange hover:bg-gray-50"
                            >
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
                    className={`text-sm font-semibold transition-colors duration-200 ${
                      isActive ? 'text-orange' : 'text-navy/70 hover:text-navy'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Prominent Contact button */}
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="font-bold uppercase tracking-wider bg-orange hover:bg-navy text-white text-xs py-2 px-4 rounded"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-navy hover:bg-navy/5"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-navy/5 bg-white px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <div key={link.name} className="space-y-1">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-semibold px-3 py-1.5 rounded-md hover:bg-navy/5 block ${
                      isActive ? 'text-orange bg-orange/5' : 'text-navy/70 hover:text-navy'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-6 space-y-1">
                      {subServices.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-1 text-sm font-medium text-navy/60 hover:text-orange"
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
              className="text-base font-bold text-center block bg-orange text-white py-2 rounded-md hover:bg-navy"
            >
              CONTACT US
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
