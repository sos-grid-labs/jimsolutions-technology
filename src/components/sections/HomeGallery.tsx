import Image from 'next/image';
import Link from 'next/link';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';

export default function HomeGallery() {
  const items = [
    {
      src: '/img/projects/solar-system.jpg',
      alt: 'High Voltage Solar Inverter Setup',
      tag: 'Solar & Inverter',
    },
    {
      src: '/img/projects/electrical-upgrade.jpg',
      alt: 'Safety Compliant Main Breaker Panel',
      tag: 'Electrical',
    },
    {
      src: '/img/projects/kitchen-integration.jpg',
      alt: 'Integrated Oven and Island Hob',
      tag: 'Kitchen',
    },
    {
      src: '/img/projects/laundry-setup.jpg',
      alt: 'Clean Stacked Washer and Dryer Setup',
      tag: 'Laundry',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="On-Site Photos"
          title="Project Gallery Showcase"
          subtitle="Real installation finishes executed on site. No templates, no shortcuts."
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <Card
              key={idx}
              className="p-0 overflow-hidden border border-navy/5 group shadow-sm rounded-2xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-w-768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-navy/90 text-white px-2.5 py-0.5 text-xs font-semibold backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="font-bold text-navy text-sm leading-tight line-clamp-1">{item.alt}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="inline-flex items-center font-bold text-orange hover:text-navy transition-colors text-sm"
          >
            View All Gallery Photos &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
