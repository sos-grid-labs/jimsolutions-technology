import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';

export const metadata: Metadata = createMetadata({
  title: 'Gallery | Jimsolutions Technology Visual Showcase',
  description:
    'View real product and project images representing our kitchen cooker placements, washer setups, power cabinets, and clean interior improvements in Lagos.',
  path: '/gallery',
});

export default function GalleryPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Gallery', url: '/gallery' },
  ]);

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <div className="flex flex-1 flex-col items-center justify-center p-8 text-center min-h-[60vh]">
        <h1 className="text-4xl font-bold tracking-tight text-navy mb-4">Gallery</h1>
        <p className="text-xl text-navy/70 max-w-2xl mb-8">
          A visual collection of our products, tools, and project finishes. Neat work setups.
        </p>
        <span className="inline-flex items-center rounded-md bg-orange/10 px-3 py-1 text-sm font-medium text-orange ring-1 ring-inset ring-orange/20">
          Gallery Page Placeholder
        </span>
      </div>
    </>
  );
}
