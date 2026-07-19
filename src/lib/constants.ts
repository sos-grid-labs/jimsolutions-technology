export const BUSINESS_DETAILS = {
  name: 'Jimsolutions Technology',
  email: 'jimsolutionstechnology@gmail.com',
  phone: '08157179060',
  phoneFormatted: '+234 815 717 9060',
  whatsapp: '2348157179060',
  whatsappUrl: 'https://wa.me/message/EO26U2NKYDF7N1',
  instagramUrl: 'https://www.instagram.com/jimsolutions_technology?igsh=aTE4a2d6aDZ6NDU1',
  tiktokUrl: 'https://www.tiktok.com/@jimsolutions_tech?_r=1&_t=ZS-97wdVBzCrOU',
  address: 'Lagos, Nigeria',
  hours: '8:00 AM - 10:00 PM Daily',
  serviceArea: 'Lagos and nationwide coverage',
  website: 'https://jimsolutionstechnology.com.ng',
};

export const getWhatsappLink = (message?: string) => {
  if (message) {
    return `https://wa.me/2348157179060?text=${encodeURIComponent(message)}`;
  }
  return BUSINESS_DETAILS.whatsappUrl;
};
