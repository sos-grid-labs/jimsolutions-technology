import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import { getOrganizationSchema, getLocalBusinessSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';
import Hero from '@/components/sections/Hero';
import WhoWeAre from '@/components/sections/WhoWeAre';
import Statistics from '@/components/sections/Statistics';
import ServicesGrid from '@/components/sections/ServicesGrid';
import BrandsWeSupport from '@/components/sections/BrandsWeSupport';
import ProjectsCards from '@/components/sections/ProjectsCards';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import IndustriesWeServe from '@/components/sections/IndustriesWeServe';
import SolarSection from '@/components/sections/SolarSection';
import AppliancesSection from '@/components/sections/AppliancesSection';
import KitchenSection from '@/components/sections/KitchenSection';
import InteriorSection from '@/components/sections/InteriorSection';
import HomeGallery from '@/components/sections/HomeGallery';
import Testimonials from '@/components/sections/Testimonials';
import FAQAccordion from '@/components/sections/FAQAccordion';
import ServiceAreas from '@/components/sections/ServiceAreas';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = createMetadata({
  title: 'Jimsolutions Technology | Premium Home Technology & Engineering Solutions',
  description:
    'Jimsolutions Technology provides installation, preventive maintenance, diagnostics, and repairs for luxury home appliances, kitchen engineering, refrigeration, laundry systems, solar power, and interior finishing in Lagos and nationwide.',
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

      {/* 2. Who We Are & Overview */}
      <WhoWeAre />

      {/* 3. Statistics (Scroll-Animated Counters) */}
      <Statistics />

      {/* 4. Core Service Categories */}
      <ServicesGrid />

      {/* 5. Brands We Support */}
      <BrandsWeSupport />

      {/* 6. Featured Case Studies */}
      <ProjectsCards />

      {/* 7. Why Choose Us (8 Premium Feature Cards) */}
      <WhyChooseUs />

      {/* 8. Industries We Serve */}
      <IndustriesWeServe />

      {/* 9. Key Detail Showcases */}
      <AppliancesSection />
      <KitchenSection />
      <SolarSection />
      <InteriorSection />

      {/* 10. Project Gallery */}
      <HomeGallery />

      {/* 11. Client Testimonials */}
      <Testimonials />

      {/* 12. FAQ Section */}
      <FAQAccordion />

      {/* 13. Service Coverage */}
      <ServiceAreas />

      {/* 14. Conversion CTA */}
      <FinalCTA />
    </>
  );
}
