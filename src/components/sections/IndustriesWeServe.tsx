import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBuilding,
  faHotel,
  faUtensils,
  faSoap,
  faRulerCombined,
  faScrewdriverWrench,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import SectionHeading from '../ui/SectionHeading';

const industries = [
  { name: 'Luxury Homes', icon: faHome, desc: 'Bespoke appliance integration and premium interior finishing.' },
  { name: 'Apartments', icon: faBuilding, desc: 'High-end residential appliance maintenance and backup power.' },
  { name: 'Hotels', icon: faHotel, desc: 'Commercial kitchen, refrigeration, and laundry support.' },
  { name: 'Restaurants', icon: faUtensils, desc: 'Professional kitchen engineering and refrigeration servicing.' },
  { name: 'Commercial Laundries', icon: faSoap, desc: 'Heavy-duty washers, dryers, and layout installations.' },
  { name: 'Property Developers', icon: faRulerCombined, desc: 'Technical consulting and premium commissioning projects.' },
  { name: 'Facility Managers', icon: faScrewdriverWrench, desc: 'Annual service contracts and preventative maintenance.' },
  { name: 'Corporate Offices', icon: faBriefcase, desc: 'Dedicated cooling, laundry space, and power backups.' },
];

export default function IndustriesWeServe() {
  return (
    <section
      className="w-full bg-[#f8f9fc]"
      style={{ borderBottom: '1px solid var(--line)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="Market Sectors"
            index="08 SECTORS"
            title="Industries We Serve"
            subtitle="Providing premium engineering solutions and technical facility support across residential and commercial sectors."
            align="left"
          />
        </div>

        {/* CSS grid gap hairline borders */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[var(--line)] border border-[var(--line)]"
        >
          {industries.map((ind, i) => {
            const badgeBg = i % 2 === 0 ? 'var(--panel-ink)' : 'var(--orange)';
            return (
              <div
                key={i}
                className="flex flex-col p-8 bg-white group hover:bg-[#f8f9fc] transition-colors duration-200"
              >
                {/* Icon badge */}
                <div
                  className="flex items-center justify-center flex-shrink-0 mb-6 transition-transform group-hover:scale-105"
                  style={{ width: '40px', height: '40px', background: badgeBg }}
                >
                  <FontAwesomeIcon
                    icon={ind.icon}
                    style={{ width: '18px', height: '18px', color: '#ffffff' }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="font-black uppercase leading-tight mb-3 text-lg text-panel-ink group-hover:text-orange transition-colors"
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}
                >
                  {ind.name}
                </h3>

                {/* Description */}
                <p className="text-xs leading-relaxed text-graphite">
                  {ind.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
