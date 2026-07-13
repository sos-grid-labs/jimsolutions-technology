import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { getWhatsappLink } from '@/lib/constants';

export default function WhatsAppButton() {
  const whatsappMessage = 'Hello Jimsolutions Technology, I would like to make an inquiry.';
  const whatsappUrl = getWhatsappLink(whatsappMessage);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 shadow-green-500/30"
      aria-label="Chat on WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="h-8 w-8" />
    </a>
  );
}
