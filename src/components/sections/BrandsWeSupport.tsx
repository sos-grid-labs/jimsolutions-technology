import SectionHeading from '../ui/SectionHeading';

const brands = [
  { name: 'Miele', desc: 'Premium Domestic & Commercial Appliances' },
  { name: 'Bosch', desc: 'Luxury Built-In Kitchen Technology' },
  { name: 'Siemens', desc: 'Sleek Home Appliances & Innovation' },
  { name: 'Gaggenau', desc: 'Professional-Grade Luxury Kitchen Systems' },
  { name: 'Barazza', desc: 'Bespoke Stainless Steel Cooktops & Sinks' },
  { name: 'Teka', desc: 'High-End Integrated Cooking Solutions' },
];

export default function BrandsWeSupport() {
  return (
    <section className="w-full bg-white" style={{ borderBottom: '1px solid var(--line)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="Supported Partners"
            index="06 BRANDS"
            title="Brands We Support"
            subtitle="Expert diagnostics, installation, and preventive maintenance for the world's leading luxury appliance manufacturers."
            align="left"
          />
        </div>

        {/* Brand grid using CSS grid gap hairline borders */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[1px] bg-[var(--line)]"
          style={{ border: '1px solid var(--line)' }}
        >
          {brands.map((brand, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-8 text-center bg-white group hover:bg-[#f8f9fc] transition-colors duration-200"
            >
              <span
                className="font-black text-2xl tracking-wider text-panel-ink group-hover:text-orange transition-colors duration-200 uppercase mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {brand.name}
              </span>
              <span className="font-mono text-[8px] uppercase tracking-wider leading-relaxed text-graphite">
                {brand.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
