import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '@/data/services';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-white mt-16 sm:mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="What We Do"
          title="Our Core Services"
          subtitle="End-to-end solutions tailored to meet your needs"
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Card
              key={service.slug}
              className="p-0 overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl border border-navy/5"
            >
              <div>
                {/* Aspect-ratio image header */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlapping circular icon */}
                  <div className="absolute -bottom-6 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-orange text-white border-4 border-white shadow-md group-hover:bg-[#0F2D5C] transition-colors duration-300">
                    <FontAwesomeIcon icon={service.icon} className="h-5 w-5" />
                  </div>
                </div>

                <div className="p-6 pt-10 space-y-3">
                  <h3 className="text-xl font-bold text-navy group-hover:text-orange transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-navy/70 leading-6">{service.shortDesc}</p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-sm font-bold text-navy group-hover:text-orange transition-colors duration-300"
                >
                  Learn more &rarr;
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
