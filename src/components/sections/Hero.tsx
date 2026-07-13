import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faShieldAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { BUSINESS_DETAILS, getWhatsappLink } from '@/lib/constants';
import Button from '../ui/Button';
import Image from 'next/image';

export default function Hero() {
  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I would like to request an engineering consultation and quote.',
  );

  const trustIndicators = [
    'NERC Safety Compliant',
    'Lagos base & Nationwide Service',
    '8am - 10pm Daily Support',
  ];

  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left Panel: Content */}
          <div className="space-y-8 lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-md bg-[#0F2D5C]/5 px-3.5 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#0F2D5C]">
              <FontAwesomeIcon icon={faShieldAlt} className="h-4 w-4 text-[#F97316]" />
              Engineering Excellence
            </span>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0F2D5C] tracking-tight leading-[1.1] font-heading">
              Smart Technology. <br />
              <span className="text-[#F97316]">Reliable Engineering.</span> <br />
              Stable Home Solutions.
            </h1>

            <p className="text-lg sm:text-xl text-[#374151] leading-relaxed max-w-xl">
              We deliver premium engineering, custom wiring, clean solar backups, and professional
              home appliance installations. Handcrafted setups engineered for lifetime performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <Button
                href={whatsappUrl}
                variant="primary"
                size="lg"
                className="text-center justify-center font-bold uppercase tracking-wider bg-[#F97316] hover:bg-[#0F2D5C] text-white px-8 py-4 rounded"
                external
              >
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Button>
              <Button
                href={`tel:${BUSINESS_DETAILS.phone}`}
                variant="outline"
                size="lg"
                className="border-[#0F2D5C]/20 text-[#0F2D5C] hover:bg-[#0F2D5C]/5 text-center justify-center font-bold uppercase tracking-wider px-8 py-4 rounded"
              >
                <FontAwesomeIcon icon={faPhone} className="mr-2 h-4 w-4" />
                Call Direct
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-gray-100 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#374151] font-semibold">
              {trustIndicators.map((indicator, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-[#F97316] h-4 w-4 flex-shrink-0"
                  />
                  <span>{indicator}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel: Image */}
          <div className="relative lg:col-span-5">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gray-50">
              <Image
                src="/img/services/electrical.jpg"
                alt="Jimsolutions Engineering Worksite"
                fill
                sizes="(max-w-1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
