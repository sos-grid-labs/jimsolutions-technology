import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { PROJECTS } from '@/data/projects';
import { getWhatsappLink } from '@/lib/constants';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function ProjectsCards() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Works"
          title="Recent Project Showcases"
          subtitle="Explore real client setups executed with absolute technical neatness in Lagos."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {PROJECTS.map((project) => {
            const whatsappUrl = getWhatsappLink(project.whatsappMessage);

            return (
              <Card
                key={project.id}
                className="flex flex-col md:flex-row gap-6 p-0 overflow-hidden"
              >
                {/* Image panel */}
                <div className="relative w-full md:w-2/5 aspect-[4/3] md:aspect-auto min-h-[220px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-w-768px) 100vw, 20vw"
                    className="object-cover"
                  />
                </div>

                {/* Text panel */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center rounded-full bg-navy/5 px-2.5 py-0.5 text-xs font-semibold text-navy">
                        {project.category}
                      </span>
                      <span className="text-xs text-navy/60 inline-flex items-center gap-1">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-orange" />
                        {project.location}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-navy">{project.title}</h3>
                    <p className="text-sm text-navy/70 leading-6">{project.description}</p>
                  </div>

                  <div className="pt-6 border-t border-navy/5 mt-6">
                    <Button
                      href={whatsappUrl}
                      variant="outline"
                      size="sm"
                      className="w-full sm:w-auto"
                      external
                    >
                      <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-4 w-4 text-[#25D366]" />
                      Inquire About This
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
