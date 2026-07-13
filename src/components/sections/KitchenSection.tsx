import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { getWhatsappLink } from '@/lib/constants';
import Button from '../ui/Button';

export default function KitchenSection() {
  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I saw your kitchen cabinet and island induction hob installation and would like to get a quote.',
  );

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-md bg-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange mb-4">
                <FontAwesomeIcon icon={faUtensils} className="h-3 w-3" />
                Kitchen Setup
              </span>
              <h2 className="text-3xl font-extrabold sm:text-5xl text-navy tracking-tight leading-tight">
                Handcrafted Cabinets. <br />
                <span className="text-orange">Flush Island Cooktops.</span>
              </h2>
              <p className="mt-4 text-base text-navy/70 leading-7 max-w-xl">
                We bridge the gap between technical engineering accuracy and beautiful visual
                integration. Our team designs layout flows, mounts downdraft extractors, installs
                custom cabinet doors, and balances gas and electrical cooktop integrations.
              </p>
            </div>

            <div className="border-t border-navy/5 pt-8 flex gap-6">
              <div className="flex gap-4 items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange/10 text-orange flex-shrink-0">
                  <FontAwesomeIcon icon={faFolderOpen} className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-base">Custom Joint Alignment</h4>
                  <p className="text-xs text-navy/60 mt-1 leading-5">
                    Ensuring completely flush joints for hobs, built-in cookers, and sinks.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Button href={whatsappUrl} variant="primary" size="lg" external>
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-5 w-5" />
                Get Kitchen Quote
              </Button>
              <Button href="/services/kitchen" variant="outline" size="lg">
                View Kitchen Specs &rarr;
              </Button>
            </div>
          </div>

          {/* Overlapping Image Composition on Right */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden border border-navy/10 shadow-xl bg-navy">
              <Image
                src="/img/services/kitchens.jpg"
                alt="Modern Kitchen Cabinetry and Hob Layout"
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
