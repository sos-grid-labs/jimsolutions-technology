'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { TESTIMONIALS } from '@/data/testimonials';
import SectionHeading from '../ui/SectionHeading';

/**
 * Testimonials — REDESIGN-PROMPT.md §6
 *
 * Single-visible carousel with prev/next arrows.
 * Star rating + quote + client name/role + location.
 * No static 3-column grid. No rounded cards. No drop shadows.
 * Dark panel-ink background so the section contrasts against white sections.
 */
export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const total = TESTIMONIALS.length;

  const prev = () => setIdx((idx - 1 + total) % total);
  const next = () => setIdx((idx + 1) % total);

  const t = TESTIMONIALS[idx];

  return (
    <section
      className="w-full"
      style={{ background: 'var(--panel-ink)', borderTop: '2px solid var(--orange)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: heading + controls */}
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Client Feedback"
              title="What Clients Say"
              subtitle="Real reviews from property owners who trusted our workmanship."
              theme="dark"
              align="left"
            />

            {/* Prev / Next */}
            <div className="flex items-center gap-3 mt-10">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex items-center justify-center"
                style={{
                  width: '44px',
                  height: '44px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: 'transparent',
                  color: '#ffffff',
                  cursor: 'pointer',
                  transition: 'border-color 150ms, background 150ms',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--orange)';
                  (e.currentTarget as HTMLElement).style.background = 'var(--orange)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)';
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }}
              >
                <FontAwesomeIcon icon={faChevronLeft} style={{ width: '13px', height: '13px' }} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="flex items-center justify-center"
                style={{
                  width: '44px',
                  height: '44px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: 'transparent',
                  color: '#ffffff',
                  cursor: 'pointer',
                  transition: 'border-color 150ms, background 150ms',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--orange)';
                  (e.currentTarget as HTMLElement).style.background = 'var(--orange)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)';
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }}
              >
                <FontAwesomeIcon icon={faChevronRight} style={{ width: '13px', height: '13px' }} />
              </button>

              {/* Counter */}
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  color: 'rgba(255,255,255,0.4)',
                  marginLeft: '8px',
                }}
              >
                {String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Right: active testimonial card */}
          <div
            className="lg:col-span-8"
            style={{ borderLeft: '1px solid rgba(255,255,255,0.08)', paddingLeft: '3rem' }}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  style={{ width: '14px', height: '14px', color: 'var(--orange)' }}
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote
              className="mb-10"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1.05rem, 2vw, 1.35rem)',
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.88)',
                fontStyle: 'italic',
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Attribution */}
            <div
              style={{
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <p className="font-semibold" style={{ color: '#ffffff', fontSize: '0.875rem' }}>
                {t.author}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.4)',
                  marginTop: '4px',
                }}
              >
                {t.role} &mdash; {t.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
