import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faBatteryFull,
  faChargingStation,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { getWhatsappLink } from '@/lib/constants';
import Button from '../ui/Button';

export default function SolarSection() {
  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I would like to request a solar load assessment and quote.',
  );

  const keySpecs = [
    { title: 'Inverter Capacities', desc: '3.5kVA / 5kVA / 10kVA+ hybrid setups' },
    { title: 'Battery Sizing', desc: 'Premium Lithium-ion & Tubular gel options' },
    { title: 'Solar Array Sizing', desc: 'Monocrystalline tier-1 high-efficiency panels' },
    { title: 'Typical Load Coverage', desc: 'Refrigerators, lighting, pumping machines, and TVs' },
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-b border-navy/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-md bg-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange mb-4">
                <FontAwesomeIcon icon={faSun} className="h-3 w-3 animate-spin" />
                Sustainable Clean Energy
              </span>
              <h2 className="text-3xl font-extrabold sm:text-5xl text-navy tracking-tight leading-tight">
                Sustainable Energy Backups. <br />
                <span className="text-orange">Zero Interrupted Power.</span>
              </h2>
              <p className="mt-4 text-base text-navy/70 leading-7 max-w-xl">
                Nigeria's grid is unpredictable. We design custom solar and inverter battery backup
                power solutions that are load-balanced to secure your home operations. No loud
                generator noise, no fuel costs—just clean, steady electricity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {keySpecs.map((spec, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <p className="text-xs uppercase tracking-wider text-orange font-bold">
                    {spec.title}
                  </p>
                  <p className="text-sm font-semibold text-navy mt-1">{spec.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Button href={whatsappUrl} variant="secondary" size="lg" external>
                Get a Solar Sizing Quote
              </Button>
              <Button href="/services/solar" variant="outline" size="lg">
                View Solar Specs &rarr;
              </Button>
            </div>
          </div>

          {/* Overlapping Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden border border-navy/10 shadow-xl bg-navy">
              <Image
                src="/img/projects/solar-system.jpg"
                alt="Premium Solar Inverter Array"
                fill
                sizes="(max-w-1024px) 100vw, 40vw"
                className="object-cover opacity-90"
              />
            </div>

            {/* Overlapping Overlay Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl border border-gray-100 shadow-lg p-6 max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange/10 text-orange">
                  <FontAwesomeIcon icon={faBatteryFull} className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">Lithium Smart Setup</p>
                  <p className="text-xs text-navy/60">Rapid charging, 10+ year lifespan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
