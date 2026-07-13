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
      <section
        className="py-20 lg:py-24 text-center relative overflow-hidden"
        style={{ background: 'var(--panel-ink)', borderBottom: '2px solid var(--orange)' }}
      >
        <div className="mx-auto max-w-7xl px-4 relative space-y-4">
          <p
            className="uppercase"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.18em',
              color: 'var(--orange)',
            }}
          >
            CASE STUDIES
          </p>
          <h1
            className="font-black uppercase leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              color: '#ffffff',
              letterSpacing: '-0.01em',
            }}
          >
            Completed Projects
          </h1>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-body)' }}
          >
            Real workmanship outcomes showing how we design clean solutions.
          </p>
        </div>
      </section>

      {/* Projects Cards Showcase */}
      <ProjectsCards />
    </>
  );
}
