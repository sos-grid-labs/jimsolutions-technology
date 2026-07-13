import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Prevent Font Awesome from adding its CSS since Next.js manages it
config.autoAddCss = false;

// ── Solid icons ────────────────────────────────────────────────────────────
import {
  // Navigation / UI
  faBars,
  faXmark,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  // Contact / info
  faPhone,
  faEnvelope,
  faClock,
  faLocationDot,
  faMapMarkerAlt,
  // Technical / services
  faBolt,
  faSolarPanel,
  faPlug,
  faScrewdriverWrench,
  faHeadset,
  faShieldHalved,
  // Stats / indicators
  faAward,
  faBriefcase,
  faMap,
  // Appliances / interior
  faTv,
  faCogs,
  faBoxes,
  // Solar / power
  faBatteryFull,
  faCalculator,
  // UI helpers
  faCheck,
  faCheckCircle,
  faShieldAlt,
  faWrench,
  faTruckFast,
} from '@fortawesome/free-solid-svg-icons';

// ── Brand icons ────────────────────────────────────────────────────────────
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

library.add(
  // UI
  faBars, faXmark, faChevronDown, faChevronLeft, faChevronRight,
  // Contact
  faPhone, faEnvelope, faClock, faLocationDot, faMapMarkerAlt,
  // Services
  faBolt, faSolarPanel, faPlug, faScrewdriverWrench, faHeadset, faShieldHalved,
  // Stats
  faAward, faBriefcase, faMap,
  // Appliances
  faTv, faCogs, faBoxes,
  // Power
  faBatteryFull, faCalculator,
  // Helpers
  faCheck, faCheckCircle, faShieldAlt, faWrench, faTruckFast,
  // Brand
  faWhatsapp,
);
