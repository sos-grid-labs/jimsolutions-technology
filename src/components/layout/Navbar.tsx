'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { BUSINESS_DETAILS, getWhatsappLink } from '@/lib/constants';
import Button from '../ui/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const whatsappMessage = 'Hello Jimsolutions Technology, I would like to make an inquiry.';
  const whatsappUrl = getWhatsappLink(whatsappMessage);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-navy/5 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-md border border-navy/10">
                <Image
                  src="/img/logo/logo.jpg"
                  alt="Jimsolutions Technology Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                  priority
                />
              </div>
              <span className="text-lg font-bold tracking-tight text-navy sm:block hidden">
                Jimsolutions
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
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

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button href={whatsappUrl} variant="secondary" size="md" external>
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-4 w-4" />
              Chat on WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2.5 text-navy hover:bg-navy/5 transition-all duration-200"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-navy/5 bg-white px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-semibold px-3 py-2 rounded-md hover:bg-navy/5 transition-colors duration-200 ${
                    isActive ? 'text-orange bg-orange/5' : 'text-navy/70 hover:text-navy'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-navy/5 flex flex-col gap-3">
            <Button
              href={whatsappUrl}
              variant="secondary"
              size="md"
              external
              onClick={() => setIsOpen(false)}
              className="w-full"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-4 w-4" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
