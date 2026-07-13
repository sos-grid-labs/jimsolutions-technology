import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faBolt,
  faSun,
  faTv,
  faUtensils,
  faPalette,
  faSoap,
} from '@fortawesome/free-solid-svg-icons';

export interface ServiceItem {
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: IconDefinition;
  image: string;
  seoTitle: string;
  seoDesc: string;
}

export const SERVICES: ServiceItem[] = [
  {
    slug: 'electrical',
    title: 'Electrical Services',
    shortDesc: 'Professional electrical wiring, troubleshooting, repairs, and installations.',
    longDesc:
      'We provide comprehensive electrical services for residential and commercial properties, including complete wiring/rewiring, fault finding, circuit breaker repairs, power outlets installation, and light fixture upgrades. Our work is clean, compliant, and focused on safety.',
    icon: faBolt,
    image: '/img/services/electrical.jpg',
    seoTitle: 'Professional Electrical Services in Lagos | Jimsolutions Technology',
    seoDesc:
      'Need a reliable electrician in Lagos? We provide electrical wiring, fault diagnostics, circuit repairs, and custom home automation setups. Contact us today!',
  },
  {
    slug: 'solar',
    title: 'Solar & Inverter Systems',
    shortDesc: 'Solar systems, inverter installations, and clean energy backup solutions.',
    longDesc:
      'Empower your home or business with clean, reliable solar energy. We design and install custom solar and inverter systems, load-calculate energy demands, install backup battery banks, and configure hybrid setups to ensure zero power downtime in Lagos and nationwide.',
    icon: faSun,
    image: '/img/services/solar.jpg',
    seoTitle: 'Solar & Inverter System Installation Lagos | Jimsolutions Technology',
    seoDesc:
      'Get stable electricity with custom solar power and inverter installation services in Lagos. Quality backup battery systems and load calculations. Quote on WhatsApp.',
  },
  {
    slug: 'appliances',
    title: 'Home Appliances Supply & Setup',
    shortDesc: 'Supply, assembly, and integration of premium home appliances.',
    longDesc:
      'From smart refrigerators and laundry units to built-in ovens, we handle the safe supply, proper placement, and neat connection of all major home appliances. We make sure each appliance is set up for optimal operation, neat cable routing, and aesthetic integration.',
    icon: faTv,
    image: '/img/services/appliances.jpg',
    seoTitle: 'Home Appliance Supply & Professional Setup Lagos | Jimsolutions Technology',
    seoDesc:
      'We supply and set up washing machines, built-in ovens, high-end refrigerators, and home theater setups with neat wiring. Serving Lagos and nationwide.',
  },
  {
    slug: 'kitchen',
    title: 'Kitchen Installation',
    shortDesc: 'Modern cabinets, island cooktop layouts, and appliance integration.',
    longDesc:
      'Transform your cooking space into a modern culinary workshop. We plan, assemble, and install high-end kitchen cabinets, integrate induction hobs and downdraft extractors, mount kitchen cooktops, and optimize ergonomics for maximum workflow and style.',
    icon: faUtensils,
    image: '/img/services/kitchens.jpg',
    seoTitle: 'Modern Kitchen Cabinets & Cooktop Installation Lagos | Jimsolutions Technology',
    seoDesc:
      'Get high-end kitchen layout plans, modern cabinets, downdraft extractors, and built-in appliance setup in Lagos. Handcrafted quality designs.',
  },
  {
    slug: 'interior-design',
    title: 'Interior Design Support',
    shortDesc: 'Clean, practical interior upgrades and fit-outs for better spaces.',
    longDesc:
      'We create visually striking, highly functional interior environments. From premium wall finishes and partition boards to custom media consoles and custom accent lighting, we align material colors and textures to match your specific lifestyle.',
    icon: faPalette,
    image: '/img/services/interiors.jpg',
    seoTitle: 'Premium Interior Design & Space Planning Nigeria | Jimsolutions Technology',
    seoDesc:
      'Create clean, practical interior upgrades with custom styling, custom partitions, and lighting solutions. Home and office renovations in Lagos.',
  },
  {
    slug: 'laundry',
    title: 'Laundry Space Setup',
    shortDesc: 'Organized laundry areas with efficient washer and dryer placement.',
    longDesc:
      'Optimize your laundry workflow. We configure dedicated utility rooms, install washer-dryer stacks, integrate rotary ironers, and layout storage cabinets. We manage electrical connections, plumbing lines, and ventilation lines for a seamless laundry space.',
    icon: faSoap,
    image: '/img/services/laundry.jpg',
    seoTitle: 'Custom Utility & Laundry Space Setup Lagos | Jimsolutions Technology',
    seoDesc:
      'Professional laundry room setups with washer/dryer hookups, built-in cabinets, ventilation routing, and laundry equipment supply in Lagos. Free quote.',
  },
];
