import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faWrench, faClock, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

export default function WhyChooseUs() {
  const points = [
    {
      title: 'Safety Compliant Work',
      description:
        'We adhere to engineering standards. No shortcuts, neat cable concealment, and safe load distributions.',
      icon: faShieldHalved,
    },
    {
      title: 'Experienced Handcrafted Execution',
      description:
        'From appliance flush mounts to hybrid solar panel connections, our installations are clean and reliable.',
      icon: faWrench,
    },
    {
      title: 'Daily Availability',
      description:
        'We are active from 8:00 AM to 10:00 PM daily. Quick WhatsApp answers and fast technician setups.',
      icon: faClock,
    },
    {
      title: 'Nationwide Delivery',
      description:
        'Based in Lagos, we provide on-site services and technical equipment supply to customers nationwide.',
      icon: faTruckFast,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Choose Us"
          title="Designed for Clients Who Value Neat Workmanship"
          subtitle="We bridge the gap between technical engineering accuracy and beautiful visual integration."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, index) => (
            <Card key={index} className="text-center flex flex-col items-center group p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange/10 text-orange group-hover:bg-orange group-hover:text-white transition-all duration-300 mb-6">
                <FontAwesomeIcon icon={point.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-navy group-hover:text-orange transition-colors duration-300">
                {point.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-navy/70">{point.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
