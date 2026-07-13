import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { TESTIMONIALS } from '@/data/testimonials';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Reviews"
          title="Client Workmanship Feedback"
          subtitle="Read honest reviews from home and commercial property owners who trusted our neat installation process."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-between relative p-8">
              <div className="absolute top-6 right-8 opacity-10 text-orange">
                <FontAwesomeIcon icon={faQuoteLeft} className="h-10 w-10" />
              </div>

              <div>
                <div className="flex gap-1 text-orange mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="text-base leading-7 text-navy/80 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-8 pt-6 border-t border-navy/5">
                <p className="font-bold text-navy text-sm">{testimonial.author}</p>
                <p className="text-xs text-navy/60 mt-1">
                  {testimonial.role} &bull; {testimonial.location}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
