export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  location: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      'The team was professional and the solar installation was exceptionally neat. Communication was smooth from start to finish.',
    author: 'Homeowner',
    role: 'Residential Client',
    location: 'Lekki, Lagos',
  },
  {
    quote:
      'We needed a reliable backup power setup for our offices, and Jimsolutions Technology delivered a highly stable, professional system.',
    author: 'Property Owner',
    role: 'Commercial Client',
    location: 'Ikeja, Lagos',
  },
  {
    quote:
      'They helped us design and integrate our kitchen appliances cleanly, routing all utilities out of sight. A top-tier engineering service.',
    author: 'Customer',
    role: 'Apartment Owner',
    location: 'Victoria Island, Lagos',
  },
];
