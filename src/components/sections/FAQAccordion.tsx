'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FAQS } from '@/data/faqs';
import SectionHeading from '../ui/SectionHeading';

/**
 * FAQAccordion — REDESIGN-PROMPT design system
 *
 * Hairline-bordered accordion rows. No rounded corners, no card shadows.
 * Active row: left orange border accent + panel-ink background tint.
 * Question: display font uppercase. Answer: body font graphite.
 */
export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="w-full"
      style={{ background: '#f8f9fc', borderTop: '1px solid var(--line)' }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <SectionHeading
          eyebrow="FAQ"
          index={`${String(FAQS.length).padStart(2, '0')} QUESTIONS`}
          title="Frequently Asked"
          subtitle="Quick answers about our services, coverage area, and daily operations."
          align="left"
          className="mb-14"
        />

        <div style={{ border: '1px solid var(--line)' }}>
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  borderBottom: index < FAQS.length - 1 ? '1px solid var(--line)' : undefined,
                  borderLeft: isOpen ? '3px solid var(--orange)' : '3px solid transparent',
                  transition: 'border-color 200ms',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left flex items-start justify-between gap-6 px-6 py-5"
                  style={{
                    background: isOpen ? 'rgba(3,27,71,0.03)' : '#ffffff',
                    cursor: 'pointer',
                    border: 'none',
                  }}
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-semibold leading-snug"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      color: isOpen ? 'var(--orange)' : 'var(--panel-ink)',
                      transition: 'color 200ms',
                    }}
                  >
                    {faq.question}
                  </span>

                  <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{
                      width: '14px',
                      height: '14px',
                      flexShrink: 0,
                      color: isOpen ? 'var(--orange)' : 'var(--graphite)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 250ms, color 200ms',
                      marginTop: '3px',
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    className="px-6 pb-6"
                    style={{
                      background: 'rgba(3,27,71,0.02)',
                      borderTop: '1px solid var(--line)',
                      paddingTop: '1.25rem',
                    }}
                  >
                    <p className="text-sm leading-7" style={{ color: 'var(--graphite)' }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
