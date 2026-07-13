import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-bold uppercase tracking-wider rounded-lg transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

  const variants = {
    primary:
      'bg-orange text-white hover:bg-navy focus-visible:outline-orange shadow-sm hover:shadow-md',
    secondary:
      'bg-navy text-white hover:bg-orange focus-visible:outline-navy shadow-sm hover:shadow-md',
    outline:
      'border-2 border-navy/20 text-navy hover:border-navy hover:bg-navy hover:text-white focus-visible:outline-navy',
    white:
      'bg-white text-navy hover:bg-orange hover:text-white focus-visible:outline-white shadow-sm hover:shadow-md',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-5 py-3 text-sm',
    lg: 'px-7 py-4 text-base',
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} className={combinedStyles} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
