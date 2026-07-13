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

  let gridColsClass = 'grid-cols-1';
  if (items.length === 5) {
    gridColsClass = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5';
  } else if (items.length === 4) {
    gridColsClass = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
  } else if (items.length === 3) {
    gridColsClass = 'grid-cols-1 sm:grid-cols-3';
  } else if (items.length > 0) {
    gridColsClass = `grid-cols-1 sm:grid-cols-2 lg:grid-cols-${items.length}`;
  }

  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      style={{
        background: borderColor,
        border: `1px solid ${borderColor}`,
      }}
    >
      <div className={`grid gap-[1px] ${gridColsClass}`}>
        {items.map((item, i) => {
          // Alternate icon badge: even → orange, odd → navy (or lighter on dark)
          const badgeBg = i % 2 === 0 ? 'var(--orange)' : 'var(--panel-ink)';
          const badgeBgDark = i % 2 === 0 ? 'var(--orange)' : 'rgba(255,255,255,0.12)';

          const isLastAndFiveItems = items.length === 5 && i === 4;
          const colSpanClass = isLastAndFiveItems ? 'sm:col-span-2 lg:col-span-1' : '';

          return (
            <div
              key={i}
              className={`flex flex-row items-center gap-4 p-5 sm:p-6 ${colSpanClass}`}
              style={{
                background: bg,
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
                  className="font-display font-black leading-none text-2xl sm:text-3xl lg:text-4xl uppercase tracking-[-0.01em]"
                  style={{
                    color: numColor,
                  }}
                >
                  {item.value}
                </p>
                <p
                  className="mt-1 uppercase font-mono text-[9px] tracking-[0.12em] leading-[1.4]"
                  style={{
                    color: labelColor,
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
