import { ScrollReveal } from "../../libs/ScrollReveal";
//import { testimonials } from "../../utils/testimonials-data";
import { TestimonialCard } from "../cards/TestimonialCard";

import { useEffect, useState } from "react";
import { client } from "../../libs/sanityClient";
import { TESTIMONIALS_QUERY } from "../../libs/queries";

interface Testimonial {
  _id: string;
  name: string;
  message: string;
  avatar: string;
}

export const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    client.fetch(TESTIMONIALS_QUERY).then((data) => setTestimonials(data));
  }, []);

  const repeatedTestimonials = [...testimonials, ...testimonials]; // for infinite scroll

  return (
    <ScrollReveal direction="right" delay={0.5}>
      <section className="py-16 px-4 bg-body">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Section Title */}
          <h2 className="text-heading-1  text-3xl font-bold text-center">
            What Clients Are Saying
          </h2>

          {/* Carousel container with faded edges */}
          <div className="relative w-full overflow-hidden rounded-2xl bg-body py-10">
            {/* Faded Edges */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-6 lg:w-20 bg-gradient-to-r from-[rgb(var(--color-bg))] via-[rgb(var(--color-bg))]/50 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-6 lg:w-20 bg-gradient-to-l from-[rgb(var(--color-bg))] via-[rgb(var(--color-bg))]/50 to-transparent z-10" />

            {/* Scrolling carousel */}
            <div className="group overflow-hidden">
              <div className="flex animate-scroll gap-6 w-max px-4">
                {repeatedTestimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial._id} {...testimonial} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};
