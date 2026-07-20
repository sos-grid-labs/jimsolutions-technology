export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  whatsappMessage: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: 'Hybrid Solar Inverter System',
    category: 'Renewable Energy',
    location: 'Lekki, Lagos',
    description:
      'Designed and installed a 28KW inverter with a 60kWh HV Lithium Battery system for a multi-family residence. Features smart load monitoring to manage heavier appliance startup currents, ensuring zero power disruptions during grid outages.',
    image: '/img/projects/Hybrid-Solar-Inverter-System.jpg',
    whatsappMessage:
      'Hello Jimsolutions Technology, I saw your Hybrid Solar Inverter System project in Lekki and would like to request a quote.',
  },
  {
    id: 2,
    title: 'Inverter Project Installation',
    category: 'Renewable Energy',
    location: 'Ikeja, Lagos',
    description:
      'Installed a premium hybrid inverter system with lithium battery storage, neat wiring, and circuit protection safety isolators to guarantee reliable backup power for residential appliances.',
    image: '/img/projects/Electrical-Installation.jpg',
    whatsappMessage:
      'Hello Jimsolutions Technology, I saw your Inverter Project Installation in Ikeja and would like to request a quote.',
  },
  {
    id: 3,
    title: 'Island Kitchen Installation',
    category: 'Kitchen Engineering',
    location: 'Victoria Island',
    description:
      'Fitted out a modern kitchen with a custom island cooktop layout, premium built-in microwave, oven, downdraft extractor, induction hob, gas hob and built-in fridge freezer. Achieved completely flush alignment with cabinetry and fully optimized kitchen space.',
    image: '/img/projects/Island-Kitchen-Installation.jpg',
    whatsappMessage:
      'Hello Jimsolutions Technology, I saw your Island Kitchen Installation in Victoria Island and would like to request a quote.',
  },
  {
    id: 4,
    title: 'Custom Utility Laundry Space Layout',
    category: 'Laundry Solutions',
    location: 'Ikoyi, Lagos',
    description:
      'Planned and built an ergonomic laundry setup featuring washer-dryer configurations, inclusive water supply and exhaust venting utility hookups to maximize storage efficiency and workflow.',
    image: '/img/projects/Custom-Utility-Laundry-Space-Layout.jpg',
    whatsappMessage:
      'Hello Jimsolutions Technology, I saw your Custom Utility Laundry Space Layout in Ikoyi and would like to request a laundry room setup quote.',
  },
  {
    id: 5,
    title: 'Kitchen Appliances Installation',
    category: 'Premium Appliance Solutions',
    location: 'IITA Ibadan Guest House',
    description:
      'Completed a kitchen appliances installation consisting of microwave, gas oven, gas hob and extractor hood at IITA Ibadan Guest House.',
    image: '/img/projects/Kitchen-Appliances-Installation.jpg',
    whatsappMessage:
      'Hello Jimsolutions Technology, I saw your Kitchen Appliances Installation at IITA Ibadan Guest House and would like to request an appliance setup quote.',
  },
  {
    id: 6,
    title: 'Master Cool Fridge Freezer Integration',
    category: 'Refrigeration Systems',
    location: 'Victoria Island, Lagos',
    description:
      'Fitted a premium high-capacity Master Cool Fridge Freezer with dual compressor cooling and custom exterior cabinetry panels for a completely flush kitchen profile.',
    image: '/img/projects/Master-Cool-Fridge-Freezer-Integration.jpg',
    whatsappMessage:
      'Hello Jimsolutions Technology, I saw your Master Cool Fridge Freezer Integration in Victoria Island and would like to request a refrigeration setup quote.',
  },
];
