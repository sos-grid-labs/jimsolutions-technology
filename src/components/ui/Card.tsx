import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  /** @deprecated hoverable prop removed — no hover translate in new design system */
  hoverable?: boolean;
}

/**
 * Card — design system implementation per REDESIGN-PROMPT.md
 *
 * No rounded corners. No drop shadows. No hover translate.
 * Uses 1px hairline border (--line) as divider, white background.
 * Hover: subtle panel-ink border intensification only.
 */
export default function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`bg-paper border border-hairline overflow-hidden transition-colors duration-200 ${className}`}
      style={{ borderColor: 'var(--line)' }}
    >
      {children}
    </div>
  );
}
