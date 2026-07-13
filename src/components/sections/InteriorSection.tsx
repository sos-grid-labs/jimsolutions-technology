import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faRulerCombined } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { getWhatsappLink } from '@/lib/constants';
import Button from '../ui/Button';

export default function InteriorSection() {
  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I would like to get a quote for gypsum drywall partition boards or interior renovations.',
  );

  return (
    <section className="relative py-24 overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 items-center lg:grid-cols-12">
          {/* Overlapping Image Composition on Left */}
          <div className="relative order-last lg:col-span-5 lg:order-first">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-navy-dark">
              <Image
                src="/img/services/interiors.jpg"
                alt="Gypsum board wall panel partition setup"
                fill
                sizes="(max-w-1024px) 100vw, 40vw"
                className="object-cover opacity-80"
              />
            </div>
          </div>

          {/* Text Content on Right */}
          <div className="space-y-8 lg:col-span-7">
            <div>
              <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange mb-4">
                <FontAwesomeIcon icon={faPalette} className="h-3 w-3" />
                Interior Fit-Out
              </span>
              <h2 className="text-3xl font-extrabold sm:text-5xl text-white tracking-tight leading-tight">
                Modern Interior Upgrades. <br />
                <span className="text-orange">Handcrafted Material Alignment.</span>
              </h2>
              <p className="mt-4 text-base text-white/80 leading-7 max-w-xl">
                Upgrade the visual style and utility of your spaces. We assemble custom drywall
                partitions, build POP ceilings, configure floating media shelves, and mount accent
                LED strips to harmonize lighting with your room textures.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 flex gap-6">
              <div className="flex gap-4 items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange/25 text-orange flex-shrink-0">
                  <FontAwesomeIcon icon={faRulerCombined} className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Space Optimization</h4>
                  <p className="text-xs text-white/70 mt-1 leading-5">
                    Gypsum board partitions designed to divide home or office areas neatly.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Button href={whatsappUrl} variant="secondary" size="lg" external>
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-5 w-5" />
                Book Interior Consultation
              </Button>
              <Button
                href="/services/interior-design"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
