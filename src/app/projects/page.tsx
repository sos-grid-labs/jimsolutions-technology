import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';

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
      <div className="flex flex-1 flex-col items-center justify-center p-8 text-center min-h-[60vh]">
        <h1 className="text-4xl font-bold tracking-tight text-navy mb-4">Completed Projects</h1>
        <p className="text-xl text-navy/70 max-w-2xl mb-8">
          A showcase of our recent works in Lagos and nationwide. Verified neat engineering results.
        </p>
        <span className="inline-flex items-center rounded-md bg-orange/10 px-3 py-1 text-sm font-medium text-orange ring-1 ring-inset ring-orange/20">
          Projects Page Placeholder
        </span>
      </div>
    </>
  );
}
