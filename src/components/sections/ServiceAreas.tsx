import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { getWhatsappLink } from '@/lib/constants';
import Button from '../ui/Button';

export default function ServiceAreas() {
  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I would like to inquire if you serve my area. My location is [location].',
  );

  const primaryAreas = [
    'Lekki Phase 1, 2 & environs',
    'Victoria Island (VI) & Ikoyi',
    'Ikeja GRA & Mainland centers',
    'Surulere & Yaba properties',
    'Ajah & Sangotedo corridor',
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-b border-navy/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text panel */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-md bg-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange mb-2">
              <FontAwesomeIcon icon={faMapMarkedAlt} className="h-3 w-3" />
              Service Areas
            </span>
            <h2 className="text-3xl font-extrabold sm:text-5xl text-navy tracking-tight leading-tight">
              Serving Lagos & <br />
              <span className="text-orange">Nationwide Requests.</span>
            </h2>
            <p className="text-base text-navy/70 leading-7 max-w-xl">
              Based in Lagos, we provide on-site engineering sizing, technical setup, and safety
              audits across all local districts. For clients outside Lagos, we offer equipment
              supply and managed technicians to complete nationwide setups.
            </p>
            <div className="pt-4">
              <Button href={whatsappUrl} variant="primary" size="lg" external>
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-5 w-5" />
                Check Area Availability
              </Button>
            </div>
          </div>

          {/* List panel */}
          <div className="lg:col-span-5 bg-white border border-navy/5 rounded-3xl p-8 shadow-sm">
            <h3 className="text-lg font-bold text-navy mb-6">Core Lagos Coverage:</h3>
            <ul className="space-y-4">
              {primaryAreas.map((area, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-sm text-navy/80 font-semibold"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange/10 text-orange">
                    <FontAwesomeIcon icon={faCheck} className="h-3 w-3" />
                  </span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-navy/5 text-xs text-navy/50 leading-relaxed">
              * Nationwide service coverage covers on-site installation coordination and equipment
              delivery.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
