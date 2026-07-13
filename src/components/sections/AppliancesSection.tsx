import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv, faCogs, faBoxes } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { getWhatsappLink } from '@/lib/constants';
import Button from '../ui/Button';
import Card from '../ui/Card';

export default function AppliancesSection() {
  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I saw your appliance supply and integration setup and would like to request a quote.',
  );

  const capabilities = [
    {
      title: 'Flush Mounting Layouts',
      desc: 'Seamless cabinet integration for refrigeration units, ovens, and cooktops.',
      icon: faBoxes,
    },
    {
      title: 'Neat Utility Connections',
      desc: 'Organized water inlet lines, ventilation ducts, and hidden power conduits.',
      icon: faCogs,
    },
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-b border-navy/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-md bg-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange mb-4">
                <FontAwesomeIcon icon={faTv} className="h-3 w-3" />
                Appliance Integration
              </span>
              <h2 className="text-3xl font-extrabold sm:text-5xl text-navy tracking-tight leading-tight">
                Premium Appliance Setup. <br />
                <span className="text-orange">Seamless Spatial Integration.</span>
              </h2>
              <p className="mt-4 text-base text-navy/70 leading-7 max-w-xl">
                Installing modern high-end home appliances is an architectural task. We manage the
                safe procurement, structural placement, utility connection hookups, and neat power
                cable runs for a completely flush profile layout.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {capabilities.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 bg-white flex gap-4 border border-gray-100 shadow-sm rounded-2xl"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange/10 text-orange flex-shrink-0">
                    <FontAwesomeIcon icon={item.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">{item.title}</h4>
                    <p className="text-xs text-navy/60 mt-1 leading-5">{item.desc}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Button href={whatsappUrl} variant="secondary" size="lg" external>
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-5 w-5" />
                Request Appliance Setup
              </Button>
              <Button href="/services/appliances" variant="outline" size="lg">
                View Appliance Scope &rarr;
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden border border-navy/10 shadow-xl bg-navy">
              <Image
                src="/img/services/appliances.jpg"
                alt="High-end kitchen appliances integration"
                fill
                sizes="(max-w-1024px) 100vw, 40vw"
                className="object-cover opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
