'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faAward,
  faBriefcase,
  faMap,
  faHeadset,
  faBolt,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { getWhatsappLink } from '@/lib/constants';
import SpecStrip, { SpecItem } from '../ui/SpecStrip';

/* ── Slider data ──────────────────────────────────────────────────────────── */
const slides = [
  {
    image: '/img/services/kitchen-cooktop.jpg',
    caption: 'LUXURY APPLIANCE INTEGRATION, LAGOS',
    eyebrow: 'PREMIUM APPLIANCE SOLUTIONS',
    headline: ['PREMIUM APPLIANCE', 'ENGINEERING SERVICES'],
    accent: 'ENGINEERING SERVICES',
    body: 'Professional installation, preventive maintenance, and system diagnostics for luxury appliance brands, ensuring peak performance and residential operational excellence.',
    cta: { label: 'Get a Quote', href: getWhatsappLink(), external: true },
    cta2: { label: 'Our Services', href: '/services' },
  },
  {
    image: '/img/services/high-voltage-inverter-system.jpg',
    caption: 'HYBRID SOLAR INVERTER SYSTEM BACKUP, ABUJA',
    eyebrow: 'RENEWABLE ENERGY',
    headline: ['HYBRID SOLAR &', 'POWER INFRASTRUCTURE'],
    accent: 'POWER INFRASTRUCTURE',
    body: 'Custom high-voltage solar inverter configurations and smart lithium storage setups, engineered to secure total energy independence and zero power disruptions.',
    cta: { label: 'Get a Quote', href: getWhatsappLink(), external: true },
    cta2: { label: 'Renewable Energy', href: '/services/solar' },
  },
  {
    image: '/img/services/island-kitchen-cooktop.jpg',
    caption: 'KITCHEN ENGINEERING, LEKKI',
    eyebrow: 'KITCHEN ENGINEERING',
    headline: ['BESPOKE KITCHEN &', 'INTERIOR SOLUTIONS'],
    accent: 'INTERIOR SOLUTIONS',
    body: 'Seamless built-in appliance integration, ergonomic cabinetry engineering, and luxury interior layouts executed with precision and flush detailing.',
    cta: { label: 'Get a Quote', href: getWhatsappLink(), external: true },
    cta2: { label: 'View Projects', href: '/projects' },
  },
];

/* ── Spec strip data ──────────────────────────────────────────────────────── */
const specItems: SpecItem[] = [
  { value: '2+', label: 'Years Experience', icon: faAward },
  { value: '100+', label: 'Service Visits', icon: faBriefcase },
  { value: '50+', label: 'Appliances Installed', icon: faMap },
  { value: '98%', label: 'Customer Satisfaction', icon: faHeadset },
  { value: '<24h', label: 'Response Time', icon: faBolt },
];

/* ─────────────────────────────────────────────────────────────────────────── */

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = useCallback(
    (next: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent((next + slides.length) % slides.length);
        setAnimating(false);
      }, 300);
    },
    [animating],
  );

  /* Auto-rotate every 6 seconds */
  useEffect(() => {
    const t = setInterval(() => go(current + 1), 6000);
    return () => clearInterval(t);
  }, [current, go]);

  const slide = slides[current];

  return (
    <section>
      {/* ── Full-bleed slider ──────────────────────────────────────────── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: 'clamp(520px, 80vh, 860px)' }}
      >
        {/* Background image */}
        <Image
          key={current}
          src={slide.image}
          alt={slide.eyebrow}
          fill
          sizes="100vw"
          className="object-cover transition-opacity duration-500"
          style={{ opacity: animating ? 0 : 1 }}
          priority={current === 0}
        />

        {/* Dark gradient overlay — left-weighted so text is readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(3,27,71,0.88) 0%, rgba(3,27,71,0.55) 55%, rgba(3,27,71,0.2) 100%)',
          }}
        />

        {/* ── Slide content ─────────────────────────────────────────────── */}
        <div className="absolute inset-0 flex items-center" key={`content-${current}`}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="hero-content-animate max-w-2xl" style={{ opacity: animating ? 0 : 1 }}>
              {/* Eyebrow — mono, orange */}
              <p
                className="mb-5 uppercase"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.18em',
                  color: 'var(--orange)',
                }}
              >
                {slide.eyebrow}
              </p>

              {/* Headline — Big Shoulders Display, white, tight */}
              <h1
                className="mb-6 font-black uppercase leading-none"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                  color: '#ffffff',
                  letterSpacing: '-0.01em',
                }}
              >
                {slide.headline.map((line, i) => (
                  <span key={i} className="block">
                    {line === slide.accent ? (
                      <span style={{ color: 'var(--orange)' }}>{line}</span>
                    ) : (
                      line
                    )}
                  </span>
                ))}
              </h1>

              {/* Body — Inter */}
              <p
                className="mb-8 leading-relaxed"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.0625rem',
                  color: 'rgba(255,255,255,0.78)',
                  maxWidth: '52ch',
                }}
              >
                {slide.body}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={slide.cta.href}
                  target={slide.cta.external ? '_blank' : undefined}
                  rel={slide.cta.external ? 'noopener noreferrer' : undefined}
                  className="hero-cta-primary inline-flex items-center gap-2 px-7 py-3.5 font-bold uppercase tracking-wider text-sm text-white"
                  style={{ background: 'var(--orange)', border: '1px solid var(--orange)' }}
                >
                  <FontAwesomeIcon icon={faWhatsapp} style={{ width: '16px', height: '16px' }} />
                  {slide.cta.label}
                </a>
                <Link
                  href={slide.cta2.href}
                  className="hero-cta-secondary inline-flex items-center px-7 py-3.5 font-bold uppercase tracking-wider text-sm"
                  style={{
                    color: '#ffffff',
                    border: '1px solid rgba(255,255,255,0.4)',
                    background: 'transparent',
                  }}
                >
                  {slide.cta2.label}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── Slide number indicator ────────────────────────────────────── */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2"
          aria-hidden="true"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              style={{
                width: i === current ? '24px' : '6px',
                height: '6px',
                background: i === current ? 'var(--orange)' : 'rgba(255,255,255,0.4)',
                border: 'none',
                cursor: 'pointer',
                transition: 'width 300ms, background 300ms',
                padding: 0,
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* ── Caption tag — bottom left ─────────────────────────────────── */}
        <div
          className="absolute bottom-0 left-0"
          style={{ background: 'rgba(3,27,71,0.75)', padding: '6px 14px' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              letterSpacing: '0.12em',
              color: 'rgba(255,255,255,0.6)',
              textTransform: 'uppercase',
            }}
          >
            {slide.caption}
          </span>
        </div>

        {/* ── Arrow controls ────────────────────────────────────────────── */}
        <button
          onClick={() => go(current - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center"
          style={{
            width: '44px',
            height: '44px',
            background: 'rgba(3,27,71,0.5)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: '#ffffff',
            cursor: 'pointer',
          }}
          aria-label="Previous slide"
        >
          <FontAwesomeIcon icon={faChevronLeft} style={{ width: '14px', height: '14px' }} />
        </button>
        <button
          onClick={() => go(current + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center"
          style={{
            width: '44px',
            height: '44px',
            background: 'rgba(3,27,71,0.5)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: '#ffffff',
            cursor: 'pointer',
          }}
          aria-label="Next slide"
        >
          <FontAwesomeIcon icon={faChevronRight} style={{ width: '14px', height: '14px' }} />
        </button>
      </div>

      {/* ── Spec strip — pinned directly below hero ───────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SpecStrip
          items={specItems.slice(0, 5)}
          theme="light"
          className="-mt-px" /* flush against the hero bottom edge */
        />
      </div>
    </section>
  );
}
