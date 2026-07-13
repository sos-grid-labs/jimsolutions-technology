import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import SchemaScript from '@/components/ui/SchemaScript';

export const metadata: Metadata = createMetadata({
  title: 'About Jimsolutions Technology | Trusted Electrical and Solar Experts',
  description:
    'Learn about Jimsolutions Technology, our core values, and our commitment to clean workmanship, solar energy, and home solutions in Lagos and nationwide.',
  path: '/about',
});

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ]);

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <div className="flex flex-1 flex-col items-center justify-center p-8 text-center min-h-[60vh]">
        <h1 className="text-4xl font-bold tracking-tight text-navy mb-4">About Us</h1>
        <p className="text-xl text-navy/70 max-w-2xl mb-8">
          Reliable power and comfort services. Serving clients across Lagos and nationwide with neat, functional craftsmanship built to last.
        </p>
        <span className="inline-flex items-center rounded-md bg-orange/10 px-3 py-1 text-sm font-medium text-orange ring-1 ring-inset ring-orange/20">
          About Page Placeholder
        </span>
      </div>
    </>
  );
}
