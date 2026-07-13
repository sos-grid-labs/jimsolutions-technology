import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faShieldAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { BUSINESS_DETAILS, getWhatsappLink } from '@/lib/constants';
import Button from '../ui/Button';

export default function ElectricalSection() {
  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I saw your electrical safety compliance wiring and would like to get a quote.',
  );

  const checklist = [
    'Conduit cable management with zero visible wires',
    'Certified grounding audits and surge protection systems',
    'Custom distribution box wiring and load balancing checks',
    'POP accent lighting integrations and switch setup assemblies',
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Overlapping Image Composition on Left */}
          <div className="lg:col-span-5 relative order-last lg:order-first">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden border border-navy/10 shadow-xl bg-navy">
              <Image
                src="/img/services/electrical.jpg"
                alt="Neat Electrical Wiring Board"
                fill
                sizes="(max-w-1024px) 100vw, 40vw"
                className="object-cover opacity-90"
              />
            </div>

            {/* Overlapping Overlay Card */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl border border-navy/5 shadow-lg p-6 max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange/10 text-orange">
                  <FontAwesomeIcon icon={faShieldAlt} className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">Safety Certified</p>
                  <p className="text-xs text-navy/60">Strict compliance with NERC guidelines</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content on Right */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-md bg-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange mb-4">
                <FontAwesomeIcon icon={faBolt} className="h-3 w-3" />
                Electrical Safety
              </span>
              <h2 className="text-3xl font-extrabold sm:text-5xl text-navy tracking-tight leading-tight">
                Certified Engineering. <br />
                <span className="text-orange">Safety Compliant Wiring.</span>
              </h2>
              <p className="mt-4 text-base text-navy/70 leading-7 max-w-xl">
                Avoid electrical hazards and power failures. We treat wiring as a craft. Our team
                constructs fully balanced, safety-tested circuits with clean routing paths that
                integrate seamlessly behind your walls and ceilings.
              </p>
            </div>

            <ul className="space-y-4">
              {checklist.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-navy/80 font-semibold"
                >
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange text-xs font-extrabold">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 items-center">
              <Button href={whatsappUrl} variant="primary" size="lg" external>
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-5 w-5" />
                Get Electrical Quote
              </Button>
              <Button href={`tel:${BUSINESS_DETAILS.phone}`} variant="outline" size="lg">
                <FontAwesomeIcon icon={faPhone} className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
