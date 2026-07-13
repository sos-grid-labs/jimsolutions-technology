import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Button from '../ui/Button';

export default function WhoWeAre() {
  const points = [
    'Safety compliant wiring using NERC standards',
    'Custom solar energy calculations for stable power backups',
    'Flush built-in kitchen appliance cabinet integrations',
    'Comprehensive utility space setups active nationwide',
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-b border-navy/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Image Left */}
          <div className="relative lg:col-span-5">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden border border-navy/10 shadow-lg">
              <Image
                src="/img/services/solar.jpg"
                alt="Jimsolutions Solar Panel Setup"
                fill
                sizes="(max-w-1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Content Right */}
          <div className="space-y-6 lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-md bg-[#0F2D5C]/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0F2D5C]">
              Who We Are
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F2D5C] tracking-tight leading-[1.15] font-heading">
              Nigeria's Foremost Technical <br />
              <span className="text-[#F97316]">Home & Power Solutions</span> Company.
            </h2>

            <p className="text-lg text-[#374151] leading-relaxed">
              Jimsolutions Technology provides professional engineering, electrical safety wiring,
              hybrid solar backups, cabinet kitchens, and laundry utility setups. Based in Lagos, we
              provide on-site sizing and technician coordination nationwide.
            </p>

            <ul className="space-y-3 pt-2">
              {points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-base text-[#374151] font-semibold"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F97316]/10 text-[#F97316] flex-shrink-0 mt-0.5">
                    <FontAwesomeIcon icon={faCheck} className="h-3 w-3" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button
                href="/about"
                variant="primary"
                size="lg"
                className="bg-[#F97316] hover:bg-[#0F2D5C] text-white"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
