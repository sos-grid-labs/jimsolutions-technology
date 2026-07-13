import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import { getOrganizationSchema, getLocalBusinessSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';
import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import AboutPreview from '@/components/sections/AboutPreview';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ProjectsCards from '@/components/sections/ProjectsCards';
import Testimonials from '@/components/sections/Testimonials';
import FAQAccordion from '@/components/sections/FAQAccordion';

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

      <Hero />
      <ServicesGrid />
      <AboutPreview />
      <WhyChooseUs />
      <ProjectsCards />
      <Testimonials />
      <FAQAccordion />
    </>
  );
}
