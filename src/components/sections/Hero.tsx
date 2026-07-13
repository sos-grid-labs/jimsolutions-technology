import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { BUSINESS_DETAILS, getWhatsappLink } from '@/lib/constants';
import Button from '../ui/Button';

export default function Hero() {
  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I would like to request a quote for your services. My location is Lagos.',
  );

  return (
    <section className="relative overflow-hidden bg-navy py-24 sm:py-32 text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-orange/20 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl lg:max-w-3xl">
          <span className="inline-flex items-center rounded-md bg-orange/20 px-3 py-1 text-sm font-semibold text-orange ring-1 ring-inset ring-orange/30 mb-6">
            Lagos & Nationwide Coverage
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white">
            Professional Engineering & Technical Home Solutions
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/80 max-w-xl">
            Neat electrical installation, clean solar & inverter backup systems, and kitchen setup
            solutions. Handcrafted details that work, built to last.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <Button href={whatsappUrl} variant="secondary" size="lg" external>
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Button>
            <Button
              href={`tel:${BUSINESS_DETAILS.phone}`}
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              <FontAwesomeIcon icon={faPhone} className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-white/60">
            <div>
              <span className="font-semibold text-orange">Available Daily:</span>{' '}
              {BUSINESS_DETAILS.hours}
            </div>
            <div className="h-4 w-px bg-white/20"></div>
            <div>
              <span className="font-semibold text-orange">Service Area:</span> Lagos & Nationwide
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
