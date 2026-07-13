import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faAward,
  faBriefcase,
  faUsers,
  faHeadset,
} from '@fortawesome/free-solid-svg-icons';
import { BUSINESS_DETAILS, getWhatsappLink } from '@/lib/constants';
import Button from '../ui/Button';

export default function Hero() {
  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I would like to inquire about your engineering and technical services.',
  );

  const stats = [
    {
      value: '5+',
      label: 'Years of Experience',
      desc: 'Delivering quality solutions',
      icon: faAward,
      color: 'text-[#0F2D5C] bg-[#0F2D5C]/10',
    },
    {
      value: '500+',
      label: 'Projects Completed',
      desc: 'Across Nigeria',
      icon: faBriefcase,
      color: 'text-orange bg-orange/10',
    },
    {
      value: '1,000+',
      label: 'Happy Clients',
      desc: 'Residential & Commercial',
      icon: faUsers,
      color: 'text-[#0F2D5C] bg-[#0F2D5C]/10',
    },
    {
      value: '8am-10pm',
      label: 'Support Service',
      desc: 'We are always here daily',
      icon: faHeadset,
      color: 'text-orange bg-orange/10',
    },
  ];

  return (
    <section className="relative bg-navy pt-24 pb-32 md:pb-48 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-black/55 z-10"></div>
        <img
          src="/img/services/kitchens.jpg"
          alt="Premium kitchen interior setup"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Container */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Top Badge */}
          <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-orange mb-6">
            <span className="mr-1 text-white">/</span> SMART SOLUTIONS. LASTING IMPACT.
          </span>

          {/* Main Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white leading-tight">
            Engineering Excellence. <br />
            <span className="text-orange">Smart Technology.</span> <br />
            Reliable Solutions.
          </h1>

          {/* Supporting Paragraph */}
          <p className="mt-6 text-lg leading-8 text-white/80 max-w-xl">
            We deliver premium engineering, installation and maintenance services for homes and
            businesses with innovation, precision and unmatched after-sales support.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <Button
              href="/services"
              variant="primary"
              size="lg"
              className="text-center justify-center font-bold uppercase"
            >
              Our Services &rarr;
            </Button>
            <Button
              href={whatsappUrl}
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white text-center justify-center font-bold uppercase"
              external
            >
              <FontAwesomeIcon icon={faPlay} className="mr-2 h-4 w-4" />
              Chat WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Overlapping Stats Card Box */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-30 px-4 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl border border-navy/5 shadow-xl p-6 sm:p-8 text-navy">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 lg:divide-x lg:divide-navy/10">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex gap-4 items-start pl-0 lg:pl-6">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl flex-shrink-0 ${stat.color}`}
                >
                  <FontAwesomeIcon icon={stat.icon} className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold tracking-tight text-navy">{stat.value}</p>
                  <p className="text-sm font-bold text-navy/90 mt-1 leading-tight">{stat.label}</p>
                  <p className="text-xs text-navy/50 mt-1 leading-normal">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
