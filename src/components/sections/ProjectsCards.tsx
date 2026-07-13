import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { PROJECTS } from '@/data/projects';
import { getWhatsappLink } from '@/lib/constants';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function ProjectsCards() {
  return (
    <section className="py-24 bg-gray-50 border-t border-b border-navy/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Works"
          title="Recent Project Showcases"
          subtitle="Explore real client setups executed with absolute technical neatness in Lagos."
          className="mb-20"
        />

        <div className="space-y-16">
          {PROJECTS.map((project, index) => {
            const whatsappUrl = getWhatsappLink(project.whatsappMessage);
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-navy/5 shadow-sm overflow-hidden"
              >
                {/* Image block */}
                <div
                  className={`lg:col-span-6 relative aspect-[4/3] w-full min-h-[300px] ${
                    isEven ? 'lg:order-first' : 'lg:order-last'
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-w-1024px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Text Content block */}
                <div className="lg:col-span-6 p-8 lg:p-12 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <span className="inline-flex items-center rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange">
                      {project.category}
                    </span>
                    <span className="text-xs font-semibold text-navy/60 inline-flex items-center gap-1">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-orange" />
                      {project.location}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-navy tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-base text-navy/70 leading-7">{project.description}</p>

                  <div className="pt-6 border-t border-navy/5">
                    <Button href={whatsappUrl} variant="outline" size="md" external>
                      <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-4 w-4 text-[#25D366]" />
                      Inquire About This Setup
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
