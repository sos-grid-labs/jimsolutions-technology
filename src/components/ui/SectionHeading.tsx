interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  theme?: 'dark' | 'light';
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  align = 'center',
  className = '',
  theme = 'light',
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  const badgeColor = theme === 'light' ? 'bg-orange/10 text-orange' : 'bg-white/10 text-white';
  const titleColor = theme === 'light' ? 'text-navy' : 'text-white';
  const subtitleColor = theme === 'light' ? 'text-navy/70' : 'text-white/70';

  return (
    <div className={`max-w-3xl ${alignClasses[align]} ${className}`}>
      {badge && (
        <span
          className={`inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-3 ${badgeColor}`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg sm:text-2xl leading-relaxed ${subtitleColor}`}>{subtitle}</p>
      )}
    </div>
  );
}
