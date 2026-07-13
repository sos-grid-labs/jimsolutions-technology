export const BUSINESS_DETAILS = {
  name: 'Jimsolutions Technology',
  email: 'jimsolutionstechnology@gmail.com',
  phone: '08157179060',
  phoneFormatted: '+234 815 717 9060',
  whatsapp: '2348157179060',
  whatsappUrl: 'https://wa.me/2348157179060',
  address: 'Lagos, Nigeria',
  hours: '8:00 AM - 10:00 PM Daily',
  serviceArea: 'Lagos and nationwide coverage',
  website: 'https://jimsolutionstechnology.com.ng',
};

export const getWhatsappLink = (message: string) => {
  const encoded = encodeURIComponent(message);
  return `${BUSINESS_DETAILS.whatsappUrl}?text=${encoded}`;
};
