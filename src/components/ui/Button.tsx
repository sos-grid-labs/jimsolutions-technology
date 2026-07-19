import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
}

/**
 * Button — design system implementation per REDESIGN-PROMPT.md
 *
 * primary  : solid panel-ink (navy) background, white text.
 *            Orange underline sweep on hover (defined in globals.css .cta-sweep).
 *            No rounded corners. No drop shadows.
 * outline  : transparent, panel-ink 1px border, panel-ink text.
 *            Orange fill on hover.
 * ghost    : no border/bg, graphite text, orange on hover.
 */
export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-body font-semibold tracking-wide ' +
    'transition-colors duration-200 focus-visible:outline focus-visible:outline-2 ' +
    'focus-visible:outline-offset-2 focus-visible:outline-orange';

  const variants = {
    primary:
      'cta-sweep bg-panel-ink text-white border border-panel-ink ' +
      'hover:bg-orange hover:border-orange',
    outline:
      'cta-sweep bg-transparent text-panel-ink border border-panel-ink ' +
      'hover:bg-panel-ink hover:text-white',
    ghost: 'bg-transparent text-graphite hover:text-orange border border-transparent',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-5 py-3 text-sm',
    lg: 'px-7 py-4 text-sm',
  };

  const combined = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} className={combined} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combined}>
      {children}
    </button>
  );
}
