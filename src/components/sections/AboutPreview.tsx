import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { BUSINESS_DETAILS, getWhatsappLink } from '@/lib/constants';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function AboutPreview() {
  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I read about your clean workmanship promise and would like to get a quote.',
  );

  const points = [
    'Clean, compliant wiring with zero exposed conduits',
    'Custom load calculations for optimized solar energy backup systems',
    'Perfect cabinets layout & kitchen appliance integration',
    'Lagos based with verified nationwide technical service coverage',
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          {/* Text block */}
          <div className="space-y-6">
            <SectionHeading
              badge="About Jimsolutions"
              title="Handcrafted Quality For Stable Power And Clean Homes"
              align="left"
              className="mb-6"
            />
            <p className="text-base text-navy/70 leading-7">
              Jimsolutions Technology is a professional engineering company serving Lagos and
              nationwide. We believe technical installations should be neat, safe, and built to look
              good. We manage projects from technical solar energy audit sizing to built-in ovens
              placements, cabinets, and appliances setup.
            </p>
            <p className="text-base text-navy/70 leading-7">
              Our engineering team is available daily from{' '}
              <span className="font-semibold text-navy">{BUSINESS_DETAILS.hours}</span>. We work
              with premium materials and follow a strict clean-up policy after completing on-site
              installations.
            </p>

            <ul className="space-y-3 pt-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-navy/80">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="h-5 w-5 text-orange flex-shrink-0 mt-0.5"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <Button href={whatsappUrl} variant="primary" size="lg" external>
                Get a Custom Quote
              </Button>
            </div>
          </div>

          {/* Image & Stats block */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden border border-navy/5 shadow-lg">
              <Image
                src="/img/services/electrical.jpg"
                alt="Jimsolutions Technical Team Work"
                fill
                sizes="(max-w-1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Quick Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg border border-navy/5 shadow-md p-6 max-w-xs hidden sm:block">
              <p className="text-3xl font-extrabold text-orange">8am - 10pm</p>
              <p className="text-xs uppercase tracking-wider text-navy font-bold mt-1">
                Available Daily
              </p>
              <p className="text-xs text-navy/60 mt-2">
                Serving Lagos & nationwide client requests
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
