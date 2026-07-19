import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faTv,
  faUtensils,
  faSnowflake,
  faSoap,
  faSun,
  faPalette,
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
  checklist: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    slug: 'appliances',
    title: 'Premium Appliance Solutions',
    shortDesc:
      'Installation, maintenance, repairs, fault diagnosis, and annual service contracts for luxury home appliances.',
    longDesc:
      'We provide professional installation, preventive maintenance, fault diagnosis, repairs, and system optimization for luxury appliance brands including Miele, Gaggenau, Bosch, Siemens, Fhiaba, Barazza, and Teka. Protect your high-end appliance investments with our annual service contracts.',
    icon: faTv,
    image: '/img/services/kitchen-cooktop.jpg',
    seoTitle: 'Premium Appliance Solutions Lagos | Jimsolutions Technology',
    seoDesc:
      'Get expert installation, fault diagnostics, maintenance, and service contracts for Miele, Gaggenau, Bosch, and Siemens appliances in Lagos and nationwide.',
    checklist: [
      'Installation',
      'Preventive Maintenance',
      'Emergency Repairs',
      'Fault Diagnosis',
      'Annual Service Contracts',
    ],
  },
  {
    slug: 'kitchen',
    title: 'Kitchen Engineering',
    shortDesc:
      'Built-in appliance installations, kitchen furniture integration, and precise system commissioning.',
    longDesc:
      'We combine engineering knowledge with professional workmanship to deliver seamless built-in appliance integration, custom kitchen furniture installation, and thorough electrical and plumbing commissioning for modern culinary spaces.',
    icon: faUtensils,
    image: '/img/services/island-kitchen-cooktop.jpg',
    seoTitle: 'Kitchen Engineering & Built-in Appliance Installation Lagos',
    seoDesc:
      'Professional kitchen furniture integration, built-in appliance alignment, and commissioning for luxury homes in Lagos and nationwide.',
    checklist: [
      'Built-in Appliance Installation',
      'Kitchen Furniture Integration',
      'Commissioning',
    ],
  },
  {
    slug: 'refrigeration',
    title: 'Refrigeration Systems',
    shortDesc:
      'Setup, diagnostic calibration, and repairs for premium wine coolers and built-in refrigerators.',
    longDesc:
      'Expert care for specialized cooling equipment. We install, maintain, and repair high-end wine coolers, integrated built-in refrigerators, and commercial cooling systems, ensuring precise temperature and humidity control.',
    icon: faSnowflake,
    image: '/img/services/fridge-freezer.jpg',
    seoTitle: 'Wine Coolers & Built-in Refrigeration Setup Lagos',
    seoDesc:
      'High-end wine coolers, built-in refrigerators, and commercial refrigeration setups. Installation, preventive maintenance, and diagnostic repair services.',
    checklist: ['Wine Coolers', 'Built-in Refrigerators', 'Commercial Refrigeration'],
  },
  {
    slug: 'laundry',
    title: 'Laundry Solutions',
    shortDesc:
      'Commercial and residential laundry setups, washer and dryer repairs, and preventive maintenance.',
    longDesc:
      'Optimize laundry workflows. We configure utility room layouts, supply and install commercial laundry equipment, perform technical washer & dryer repairs, and run preventive maintenance programs to avoid operational downtime.',
    icon: faSoap,
    image: '/img/services/Indoor-Laundry-Space-2.png',
    seoTitle: 'Laundry Solutions & Commercial Laundry Setup Lagos',
    seoDesc:
      'Professional utility laundry setups, commercial laundry equipment maintenance, washer/dryer hookups, and repairs in Lagos and nationwide.',
    checklist: [
      'Commercial Laundry Equipment',
      'Washer & Dryer Repairs',
      'Preventive Maintenance',
      'Laundry Setup',
    ],
  },
  {
    slug: 'solar',
    title: 'Renewable Energy',
    shortDesc:
      'Hybrid Solar Inverter System installations, hybrid inverter configurations, and battery storage backup setups.',
    longDesc:
      'Secure your power grid with clean energy. We conduct technical load assessments to design and install custom hybrid solar inverter systems, size inverter capacities, and integrate battery backups for luxury residences and commercial facilities.',
    icon: faSun,
    image: '/img/services/high-voltage-inverter-system.jpg',
    seoTitle: 'Renewable Energy & Solar Inverter Systems Lagos',
    seoDesc:
      'Get high-performance solar panels, inverter configurations, and battery storage setups in Lagos and nationwide. Professional sizing and layout audits.',
    checklist: ['Solar Installation', 'Inverter Systems', 'Battery Backup'],
  },
  {
    slug: 'interior-design',
    title: 'Interior Solutions',
    shortDesc: 'Bespoke spaces planning, modern kitchen designs, and high-end luxury finishing.',
    longDesc:
      'We bridge professional design with technical execution. From custom kitchen styling plans to gypsum board partition drywalls and luxury interior finishes, we ensure elegant and durable room treatments.',
    icon: faPalette,
    image: '/img/services/kitchen-cooktop-2.jpg',
    seoTitle: 'Bespoke Interior Solutions & Kitchen Design Lagos',
    seoDesc:
      'Luxury interior finishing, bespoke space planning, drywall partitions, and high-end kitchen styling for residential properties in Lagos.',
    checklist: ['Kitchen Design', 'Luxury Interior Finishing'],
  },
];
