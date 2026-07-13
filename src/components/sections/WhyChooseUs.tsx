import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faWrench, faClock, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

export default function WhyChooseUs() {
  const values = [
    {
      title: 'Safety Standards',
      description:
        'We follow NERC guidelines, conduit cable separation, and certified safety changeover limits.',
      icon: faShieldHalved,
    },
    {
      title: 'Experienced Execution',
      description: 'Handcrafted cabinets placement, flush island hob joints, and battery calculations.',
      icon: faWrench,
    },
    {
      title: 'Daily Availability',
      description: 'Active daily from 8:00 AM to 10:00 PM on WhatsApp and direct line queries.',
      icon: faClock,
    },
    {
      title: 'Nationwide Delivery',
      description: 'Base diagnostics in Lagos with shipping and installers active nationwide.',
      icon: faTruckFast,
    },
  ];

  const numbers = [
    { value: '5+', label: 'Years of Experience' },
    { value: '500+', label: 'Projects Completed' },
    { value: '36+', label: 'State Delivery Routes' },
    { value: '8am-10pm', label: 'Daily Service Support' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Core Values Columns */}
        <div>
          <SectionHeading
            badge="Engineering Standards"
            title="Why Choose Jimsolutions Technology"
            subtitle="Bridging the gap between certified technical compliance and neat, visual integration."
            className="mb-16"
          />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((val, index) => (
              <Card
                key={index}
                className="flex flex-col items-start p-8 border border-navy/5 bg-gray-50/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange text-white mb-6">
                  <FontAwesomeIcon icon={val.icon} className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-navy">{val.title}</h3>
                <p className="mt-3 text-sm text-navy/70 leading-6">{val.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* HBM-Style High Contrast Numbers Block */}
        <div className="relative rounded-3xl bg-navy text-white py-16 px-8 sm:px-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="relative text-center space-y-12">
            <h3 className="text-3xl font-extrabold sm:text-4xl text-white">Jimsolutions in Numbers</h3>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {numbers.map((num, idx) => (
                <div key={idx} className="space-y-2">
                  <p className="text-4xl sm:text-6xl font-extrabold text-orange tracking-tight">
                    {num.value}
                  </p>
                  <p className="text-xs sm:text-sm uppercase tracking-wider text-white/70 font-semibold">
                    {num.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
