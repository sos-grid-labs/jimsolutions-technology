'use client';

import AnimatedCounter from '../ui/AnimatedCounter';

const stats = [
  { value: 2,   suffix: '+',  label: 'Years Industry Experience' },
  { value: 100, suffix: '+',  label: 'Service Visits' },
  { value: 50,  suffix: '+',  label: 'Premium Appliances Installed' },
  { value: 98,  suffix: '%',  label: 'Customer Satisfaction' },
  { value: 24,  suffix: ' Hours', label: 'Response Within 24 Hours', prefix: '<' },
];

export default function Statistics() {
  return (
    <section className="w-full bg-white" style={{ borderBottom: '1px solid var(--line)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center p-4">
              <span
                className="font-display font-black leading-none text-4xl sm:text-5xl text-panel-ink mb-3 block"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--panel-ink)' }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </span>
              <span
                className="uppercase font-mono text-[9px] tracking-[0.12em] leading-relaxed text-graphite block max-w-[18ch] mx-auto"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
