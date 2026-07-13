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
      description:
        'Handcrafted cabinets placement, flush island hob joints, and battery calculations.',
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

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              className="flex flex-col items-start p-8 border border-gray-100 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F97316]/10 text-[#F97316] mb-6">
                <FontAwesomeIcon icon={val.icon} className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-navy font-heading">{val.title}</h3>
              <p className="mt-3 text-sm text-[#374151] leading-relaxed font-medium">
                {val.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
