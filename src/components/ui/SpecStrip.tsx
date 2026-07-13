import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface SpecItem {
  value: string;
  label: string;
  icon: IconDefinition;
}

interface SpecStripProps {
  items: SpecItem[];
  /** 'light' = white bg / navy text (default) | 'dark' = navy bg / white text */
  theme?: 'light' | 'dark';
  className?: string;
}

/**
 * SpecStrip — REDESIGN-PROMPT.md signature element #2
 *
 * A horizontal bordered row of stats styled like meter readouts:
 *   • Big display-font number (Barlow 800 uppercase)
 *   • Small mono uppercase label underneath
 *   • Icon badge behind each stat alternates navy / orange
 *     so the strip reads as a functional key, not decoration
 *
 * Layout: 4-up on desktop, 2-up on mobile.
 * Dividers: 1px vertical hairlines between items (--line).
 * Border: 1px full perimeter hairline.
 * No rounded corners. No drop shadows.
 */
export default function SpecStrip({ items, theme = 'light', className = '' }: SpecStripProps) {
  const bg = theme === 'dark' ? 'var(--panel-ink)' : 'var(--paper)';
  const borderColor = theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'var(--line)';
  const numColor = theme === 'dark' ? '#ffffff' : 'var(--panel-ink)';
  const labelColor = theme === 'dark' ? 'rgba(255,255,255,0.5)' : 'var(--graphite)';

  return (
    <div
      className={`w-full ${className}`}
      style={{ background: bg, border: `1px solid ${borderColor}` }}
    >
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${items.length}, 1fr)` }}
      >
        {items.map((item, i) => {
          // Alternate icon badge: even → orange, odd → navy (or lighter on dark)
          const badgeBg = i % 2 === 0 ? 'var(--orange)' : 'var(--panel-ink)';
          const badgeBgDark = i % 2 === 0 ? 'var(--orange)' : 'rgba(255,255,255,0.12)';

          return (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-5 sm:p-6"
              style={{
                borderRight: i < items.length - 1 ? `1px solid ${borderColor}` : undefined,
              }}
            >
              {/* Icon badge */}
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{
                  width: '36px',
                  height: '36px',
                  background: theme === 'dark' ? badgeBgDark : badgeBg,
                }}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  style={{ width: '16px', height: '16px', color: '#ffffff' }}
                />
              </div>

              {/* Readout */}
              <div>
                <p
                  className="leading-none font-black"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    color: numColor,
                    textTransform: 'uppercase',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {item.value}
                </p>
                <p
                  className="mt-1 uppercase"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    letterSpacing: '0.12em',
                    color: labelColor,
                    lineHeight: 1.4,
                  }}
                >
                  {item.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
