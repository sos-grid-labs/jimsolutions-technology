import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import { getOrganizationSchema, getLocalBusinessSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';

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
      <div className="flex flex-1 flex-col items-center justify-center p-8 bg-gray-50 text-center min-h-[60vh]">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-navy mb-4">
          Jimsolutions Technology
        </h1>
        <p className="text-xl text-navy/70 max-w-2xl mb-8">
          Powering Homes. Building Better Spaces. Premium electrical, solar, appliances, and home setups in Lagos and nationwide.
        </p>
        <span className="inline-flex items-center rounded-md bg-orange/10 px-3 py-1 text-sm font-medium text-orange ring-1 ring-inset ring-orange/20">
          Home Page Placeholder
        </span>
      </div>
    </>
  );
}
