import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '@/data/services';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="What We Do"
          title="Our Core Services"
          subtitle="End-to-end technical solutions designed and implemented for safety and longevity."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Card
              key={service.slug}
              className="p-0 overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl border border-gray-100 bg-white"
            >
              <div>
                {/* Image header with 16px radius crop */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  {/* Subtle clean badge icon */}
                  <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-white shadow-sm text-sm">
                    <FontAwesomeIcon icon={service.icon} />
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-navy group-hover:text-orange transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm text-navy/70 leading-relaxed font-medium">
                    {service.shortDesc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-sm font-bold text-orange hover:text-navy transition-colors duration-200"
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
