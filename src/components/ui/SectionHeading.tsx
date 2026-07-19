interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  /** Mono eyebrow label — rendered in IBM Plex Mono, e.g. "ELECTRICAL SERVICES" */
  eyebrow?: string;
  /** Right-aligned index label in mono, e.g. "03 CORE DISCIPLINES" */
  index?: string;
  /** @deprecated badge prop aliased to eyebrow for backward compat */
  badge?: string;
  align?: 'left' | 'center';
  className?: string;
  theme?: 'dark' | 'light';
}

/**
 * SectionHeading — design system implementation per REDESIGN-PROMPT.md
 *
 * Structure:
 *   [eyebrow in mono]         [index label in mono, right-aligned]
 *   Heading in Big Shoulders Display, uppercase, tight
 *   Optional subtitle in Inter body
 *
 * - Left-aligned by default (not centered + pill-badge)
 * - No centered eyebrow-pill pattern
 * - Index label is functional (numbered discipline), not decorative
 */
export default function SectionHeading({
  title,
  subtitle,
  eyebrow,
  index,
  badge, // backward compat alias
  align = 'left',
  className = '',
  theme = 'light',
}: SectionHeadingProps) {
  const resolvedEyebrow = eyebrow ?? badge;

  const titleColor = theme === 'light' ? 'text-panel-ink' : 'text-white';
  const eyebrowColor = theme === 'light' ? 'text-orange' : 'text-orange';
  const indexColor = theme === 'light' ? 'text-graphite' : 'text-white/50';
  const subtitleColor = theme === 'light' ? 'text-graphite' : 'text-white/70';
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`${alignClass} ${className}`}>
      {/* Eyebrow row: mono label left + optional index right */}
      {(resolvedEyebrow || index) && (
        <div className="flex items-baseline justify-between mb-3">
          {resolvedEyebrow && (
            <span
              className={`font-mono text-xs tracking-[0.12em] uppercase font-medium ${eyebrowColor}`}
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {resolvedEyebrow}
            </span>
          )}
          {index && (
            <span
              className={`font-mono text-xs tracking-[0.1em] uppercase ml-auto ${indexColor}`}
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {index}
            </span>
          )}
        </div>
      )}

      {/* Heading — Big Shoulders Display, uppercase, tight */}
      <h2
        className={`text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight ${titleColor}`}
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h2>

      {/* Subtitle — Inter, regular body weight */}
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl ${subtitleColor} ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
