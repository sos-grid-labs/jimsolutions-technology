import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import { getOrganizationSchema, getLocalBusinessSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';
import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ProjectsCards from '@/components/sections/ProjectsCards';
import SolarSection from '@/components/sections/SolarSection';
import ElectricalSection from '@/components/sections/ElectricalSection';
import AppliancesSection from '@/components/sections/AppliancesSection';
import InteriorSection from '@/components/sections/InteriorSection';
import KitchenSection from '@/components/sections/KitchenSection';
import Testimonials from '@/components/sections/Testimonials';
import HomeGallery from '@/components/sections/HomeGallery';
import FAQAccordion from '@/components/sections/FAQAccordion';
import ServiceAreas from '@/components/sections/ServiceAreas';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = createMetadata({
  title: 'Jimsolutions Technology | Electrical, Solar & Home Solutions in Lagos',
  description:
    'Jimsolutions Technology provides professional electrical wiring, solar installation, home appliances supply/setup, kitchen setups, and interior design across Lagos and Nigeria.',
  path: '/',
});

export default function HomePage() {
  const orgSchema = getOrganizationSchema();
  const localSchema = getLocalBusinessSchema();

  return (
    <>
      <SchemaScript schema={orgSchema} />
      <SchemaScript schema={localSchema} />

      {/* 1. Immersive Hero & 2. Stats (Overlap inside Hero) */}
      <Hero />

      {/* 3. Featured Services */}
      <ServicesGrid />

      {/* 4. Why Choose Jimsolutions */}
      <WhyChooseUs />

      {/* 5. Featured Projects */}
      <ProjectsCards />

      {/* 6. Solar Installation Section */}
      <SolarSection />

      {/* 7. Electrical Services Section */}
      <ElectricalSection />

      {/* 8. Home Appliance Installation */}
      <AppliancesSection />

      {/* 9. Interior Fit-out */}
      <InteriorSection />

      {/* 10. Kitchen Solutions */}
      <KitchenSection />

      {/* 11. Customer Testimonials */}
      <Testimonials />

      {/* 12. Project Gallery */}
      <HomeGallery />

      {/* 13. Frequently Asked Questions */}
      <FAQAccordion />

      {/* 14. Service Areas */}
      <ServiceAreas />

      {/* 15. Final Call-to-Action */}
      <FinalCTA />
    </>
  );
}
