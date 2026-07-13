import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({ children, className = '', hoverable = true }: CardProps) {
  const baseStyles =
    'bg-white rounded-lg border border-navy/5 shadow-sm p-6 overflow-hidden transition-all duration-300';
  const hoverStyles = hoverable ? 'hover:shadow-md hover:-translate-y-1 hover:border-navy/10' : '';

  return <div className={`${baseStyles} ${hoverStyles} ${className}`}>{children}</div>;
}
