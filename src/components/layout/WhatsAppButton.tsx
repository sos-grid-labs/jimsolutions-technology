import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { getWhatsappLink } from '@/lib/constants';

export default function WhatsAppButton() {
  const whatsappUrl = getWhatsappLink(
    'Hello Jimsolutions Technology, I would like to make an inquiry.',
  );

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-13 w-13 items-center justify-center text-white transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      style={{
        background: '#25D366',
        /* Square badge — no rounded corners per design system */
        /* Exception: WhatsApp global convention is rounded, so keep it recognisable */
        borderRadius: '2px',
        boxShadow: '0 4px 16px rgba(37,211,102,0.35)',
        height: '52px',
        width: '52px',
      }}
    >
      <FontAwesomeIcon icon={faWhatsapp} style={{ width: '26px', height: '26px' }} />
    </a>
  );
}
