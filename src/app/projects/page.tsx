import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';
import ProjectsCards from '@/components/sections/ProjectsCards';

export const metadata: Metadata = createMetadata({
  title: 'Projects | Jimsolutions Technology Work and Installations',
  description:
    'Browse our completed projects in Lagos and Nigeria, including solar installations, home appliance integrations, electrical rewiring, and modern kitchen setups.',
  path: '/projects',
});

export default function ProjectsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
  ]);

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />

      {/* Page Header */}
      <section className="bg-navy py-20 lg:py-28 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="mx-auto max-w-7xl px-4 relative space-y-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-heading leading-tight">
            Completed Projects
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Real workmanship outcomes showing how we design clean solutions.
          </p>
        </div>
      </section>

      {/* Projects Cards Showcase */}
      <ProjectsCards />
    </>
  );
}
