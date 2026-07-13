import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { SERVICES } from '@/data/services';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="What We Do"
          title="Engineered Services Built Around Your Needs"
          subtitle="From wiring and solar power backups to appliances setup, kitchen design and custom space configurations."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Card key={service.slug} className="flex flex-col justify-between group">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-navy text-white group-hover:bg-orange transition-colors duration-300 mb-6">
                  <FontAwesomeIcon icon={service.icon} className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-navy group-hover:text-orange transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-navy/70">{service.shortDesc}</p>
              </div>
              <div className="mt-8 pt-6 border-t border-navy/5">
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm font-semibold text-navy group-hover:text-orange transition-colors duration-300 inline-flex items-center"
                >
                  Learn more{' '}
                  <span className="ml-1" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
