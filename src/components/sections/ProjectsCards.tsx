import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { PROJECTS } from '@/data/projects';
import { getWhatsappLink } from '@/lib/constants';
import SectionHeading from '../ui/SectionHeading';
import FramedImage from '../ui/FramedImage';

/**
 * ProjectsCards — REDESIGN-PROMPT.md §7
 *
 * News-style 3-column card layout:
 * category (mono) + title + short description + location + CTA.
 * Uses FramedImage for photo — corner brackets on every project image.
 * Hairline-bordered cards, no rounded corners, no drop shadows.
 */
export default function ProjectsCards() {
  return (
    <section
      className="w-full"
      style={{ background: 'var(--paper)', borderBottom: '1px solid var(--line)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="Featured Works"
            index={`0${PROJECTS.length} PROJECTS`}
            title="Recent Work"
            subtitle="Real client setups executed with technical precision across Lagos."
            align="left"
          />
        </div>

        {/* News-style 3-column (or 2-column for 4 items) grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
          style={{ border: '1px solid var(--line)' }}
        >
          {PROJECTS.map((project, i) => {
            const whatsappUrl = getWhatsappLink(project.whatsappMessage);
            const figLabel = project.title.toUpperCase();

            return (
              <div
                key={project.id}
                className="flex flex-col"
                style={{
                  borderRight: i % 2 === 0 ? '1px solid var(--line)' : undefined,
                  borderBottom: i < PROJECTS.length - 2 ? '1px solid var(--line)' : undefined,
                }}
              >
                {/* Framed photo */}
                <FramedImage
                  src={project.image}
                  alt={project.title}
                  caption={figLabel}
                  aspect="aspect-[16/10]"
                  sizes="(max-width: 860px) 100vw, 50vw"
                />

                {/* Text body */}
                <div className="flex flex-col flex-1 p-7 lg:p-8">
                  {/* Category + location row */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--orange)',
                      }}
                    >
                      {project.category}
                    </span>
                    <span
                      className="flex items-center gap-1"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        letterSpacing: '0.08em',
                        color: 'var(--graphite)',
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        style={{ width: '10px', height: '10px', color: 'var(--orange)' }}
                      />
                      {project.location}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-black uppercase leading-tight mb-3"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
                      color: 'var(--panel-ink)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed flex-1 mb-6"
                    style={{ color: 'var(--graphite)' }}
                  >
                    {project.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 self-start project-cta"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--panel-ink)',
                      padding: '10px 16px',
                      border: '1px solid var(--line)',
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      style={{ width: '12px', height: '12px', color: '#25D366' }}
                    />
                    Inquire About This Setup
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
