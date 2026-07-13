import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import { getOrganizationSchema, getLocalBusinessSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';
import Hero from '@/components/sections/Hero';
import WhoWeAre from '@/components/sections/WhoWeAre';
import ServicesGrid from '@/components/sections/ServicesGrid';
import ProjectsCards from '@/components/sections/ProjectsCards';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import SolarSection from '@/components/sections/SolarSection';
import ElectricalSection from '@/components/sections/ElectricalSection';
import AppliancesSection from '@/components/sections/AppliancesSection';
import HomeGallery from '@/components/sections/HomeGallery';
import Testimonials from '@/components/sections/Testimonials';
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

      {/* 1. Immersive Hero */}
      <Hero />

      {/* 2. Who We Are */}
      <WhoWeAre />

      {/* 4. Core Services */}
      <ServicesGrid />

      {/* 5. Featured Projects */}
      <ProjectsCards />

      {/* 6. Why Choose Us */}
      <WhyChooseUs />

      {/* 7. Solar Solutions */}
      <SolarSection />

      {/* 8. Electrical Services */}
      <ElectricalSection />

      {/* 9. Home Appliances */}
      <AppliancesSection />

      {/* 10. Project Gallery */}
      <HomeGallery />

      {/* 11. Testimonials */}
      <Testimonials />

      {/* 12. FAQ */}
      <FAQAccordion />

      {/* 13. Service Areas */}
      <ServiceAreas />

      {/* 14. Call to Action */}
      <FinalCTA />
    </>
  );
}
