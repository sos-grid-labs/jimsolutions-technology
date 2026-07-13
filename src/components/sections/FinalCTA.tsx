import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { BUSINESS_DETAILS, getWhatsappLink } from '@/lib/constants';
import Button from '../ui/Button';

export default function FinalCTA() {
  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I would like to get a quote and schedule an engineering consultation.',
  );

  return (
    <section className="relative py-24 overflow-hidden bg-navy text-white text-center">
      {/* Background radial highlight */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-3xl font-extrabold sm:text-5xl tracking-tight leading-tight">
          Ready to Start Your <br />
          <span className="text-orange">Installation Setup?</span>
        </h2>

        <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
          Avoid inverter overloading and unsafe wiring. Connect with a certified technical expert
          today for a custom load audit and cabinetry fit-out layout quote.
        </p>

        <div className="mx-auto flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center max-w-md">
          <Button
            href={whatsappUrl}
            variant="secondary"
            size="lg"
            className="w-full uppercase font-bold"
            external
          >
            <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-5 w-5" />
            Chat on WhatsApp
          </Button>
          <Button
            href={`tel:${BUSINESS_DETAILS.phone}`}
            variant="outline"
            size="lg"
            className="w-full border-white/30 text-white hover:bg-white/10 uppercase font-bold"
          >
            <FontAwesomeIcon icon={faPhone} className="mr-2 h-4 w-4" />
            Call Direct
          </Button>
        </div>
      </div>
    </section>
  );
}
