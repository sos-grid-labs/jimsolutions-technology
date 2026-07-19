import Image from 'next/image';

interface FramedImageProps {
  src: string;
  alt: string;
  /** Caption rendered in mono at bottom-left, e.g. "PANEL INSTALL, IKEJA" */
  caption?: string;
  /** Tailwind aspect class, defaults to aspect-[4/5] */
  aspect?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

/**
 * FramedImage — REDESIGN-PROMPT.md signature element #1
 *
 * Every photo gets:
 *   • Four orange corner brackets (3px stroke, L-shaped, absolute-positioned)
 *     rendered as inline SVGs so they scale with the container
 *   • A navy mono caption tag bottom-left (optional)
 *   • On mount the brackets draw in via CSS animation (animate-bracket from globals.css)
 *
 * No rounded corners. No drop shadow. Hairline border.
 */

const BRACKET = 22; // px — arm length of each L-bracket
const STROKE = 3; // px — stroke width

export default function FramedImage({
  src,
  alt,
  caption,
  aspect = 'aspect-[4/5]',
  className = '',
  priority = false,
  sizes = '(max-width: 860px) 100vw, 50vw',
}: FramedImageProps) {
  return (
    <div
      className={`relative overflow-hidden ${aspect} ${className}`}
      style={{ border: '1px solid var(--line)' }}
    >
      {/* Photo */}
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" priority={priority} />

      {/* Dark gradient — ensures captions + brackets are readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(3,27,71,0.08) 0%, transparent 40%, rgba(3,27,71,0.25) 100%)',
        }}
      />

      {/* ── Corner brackets ─────────────────────────────────────────────── */}

      {/* Top-left */}
      <svg
        className="absolute top-3 left-3 pointer-events-none"
        width={BRACKET}
        height={BRACKET}
        viewBox={`0 0 ${BRACKET} ${BRACKET}`}
        fill="none"
        aria-hidden="true"
      >
        <path
          d={`M ${BRACKET} ${STROKE / 2} L ${STROKE / 2} ${STROKE / 2} L ${STROKE / 2} ${BRACKET}`}
          stroke="var(--orange)"
          strokeWidth={STROKE}
          strokeLinecap="square"
          className="animate-bracket"
        />
      </svg>

      {/* Top-right */}
      <svg
        className="absolute top-3 right-3 pointer-events-none"
        width={BRACKET}
        height={BRACKET}
        viewBox={`0 0 ${BRACKET} ${BRACKET}`}
        fill="none"
        aria-hidden="true"
      >
        <path
          d={`M 0 ${STROKE / 2} L ${BRACKET - STROKE / 2} ${STROKE / 2} L ${BRACKET - STROKE / 2} ${BRACKET}`}
          stroke="var(--orange)"
          strokeWidth={STROKE}
          strokeLinecap="square"
          className="animate-bracket"
        />
      </svg>

      {/* Bottom-left */}
      <svg
        className="absolute bottom-3 left-3 pointer-events-none"
        width={BRACKET}
        height={BRACKET}
        viewBox={`0 0 ${BRACKET} ${BRACKET}`}
        fill="none"
        aria-hidden="true"
      >
        <path
          d={`M ${BRACKET} ${BRACKET - STROKE / 2} L ${STROKE / 2} ${BRACKET - STROKE / 2} L ${STROKE / 2} 0`}
          stroke="var(--orange)"
          strokeWidth={STROKE}
          strokeLinecap="square"
          className="animate-bracket"
        />
      </svg>

      {/* Bottom-right */}
      <svg
        className="absolute bottom-3 right-3 pointer-events-none"
        width={BRACKET}
        height={BRACKET}
        viewBox={`0 0 ${BRACKET} ${BRACKET}`}
        fill="none"
        aria-hidden="true"
      >
        <path
          d={`M 0 ${BRACKET - STROKE / 2} L ${BRACKET - STROKE / 2} ${BRACKET - STROKE / 2} L ${BRACKET - STROKE / 2} 0`}
          stroke="var(--orange)"
          strokeWidth={STROKE}
          strokeLinecap="square"
          className="animate-bracket"
        />
      </svg>

      {/* ── Caption tag ─────────────────────────────────────────────────── */}
      {caption && (
        <div
          className="absolute bottom-0 left-0 right-0 px-4 py-2"
          style={{ background: 'rgba(3,27,71,0.82)' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              letterSpacing: '0.12em',
              color: 'rgba(255,255,255,0.75)',
              textTransform: 'uppercase',
            }}
          >
            {caption}
          </span>
        </div>
      )}
    </div>
  );
}
