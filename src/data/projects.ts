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
    title: 'High-Voltage Solar & Inverter Backup System',
    category: 'Solar & Inverter',
    location: 'Lekki, Lagos',
    description:
      'Designed and installed a high-capacity solar and inverter system for a multi-family residence. Features smart load routing to manage heavier appliance startup currents, ensuring zero power disruptions during grid outages.',
    image: '/img/projects/solar-system.jpg',
    whatsappMessage:
      'Hello Jimsolutions Technology, I saw your high-voltage solar project in Lekki and would like to request a quote for a solar backup system.',
  },
  {
    id: 2,
    title: 'Complete Electrical Rewiring & Safety Upgrade',
    category: 'Electrical Services',
    location: 'Ikeja, Lagos',
    description:
      'Completed a comprehensive electrical assessment and rewiring for a property. Replaced outdated fuses with modern distribution boards, corrected structural routing issues, and installed neat accent lighting with zero exposed conduits.',
    image: '/img/projects/electrical-upgrade.jpg',
    whatsappMessage:
      'Hello Jimsolutions Technology, I need an electrical wiring inspection/upgrade for my property. Can you share details?',
  },
  {
    id: 3,
    title: 'Smart Kitchen Cooktop & Appliance Integration',
    category: 'Kitchen Installation',
    location: 'Victoria Island, Lagos',
    description:
      'Fitted out a modern kitchen with a custom island cooktop layout, premium built-in oven, downdraft extractor, and master cool fridge freezer. Achieved completely flush alignment with cabinetry and fully optimized electrical load distribution.',
    image: '/img/projects/kitchen-integration.jpg',
    whatsappMessage:
      'Hello Jimsolutions Technology, I would like to get a quote for kitchen appliance integration and cabinet setup.',
  },
  {
    id: 4,
    title: 'Custom Utility laundry Space Layout',
    category: 'Laundry Space Setup',
    location: 'Ikoyi, Lagos',
    description:
      'Planned and built an ergonomic laundry setup featuring stacked washer-dryer configurations, a rotary ironer space, and water supply/exhaust venting utility hookups to maximize storage efficiency and workflow.',
    image: '/img/projects/laundry-setup.jpg',
    whatsappMessage:
      'Hello Jimsolutions Technology, I am interested in setting up an organized utility and laundry room space. Let us discuss.',
  },
];
