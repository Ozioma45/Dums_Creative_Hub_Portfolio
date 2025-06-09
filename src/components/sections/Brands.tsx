import { ScrollReveal } from "../../libs/ScrollReveal";
import { Container } from "../shared/Container";

const icons = [
  { src: "ai", name: "Adobe Illustrator" },
  { src: "ps", name: "Photoshop" },
  { src: "pre", name: "Adobe Premier pro" },
  { src: "After", name: "After Effect" },
  { src: "aud", name: "Adobe Audition" },
  { src: "cap", name: "Capcut" },
];

export const Brands = () => {
  // Duplicate icons to create seamless infinite scroll effect
  const repeatedIcons = [...icons, ...icons];

  return (
    <ScrollReveal direction="up" delay={0.5}>
      <section className="overflow-hidden relative w-full max-w-2xl sm:max-w-3xl lg:max-w-3xl xl:max-w-4xl mx-auto mt-15 md:mt-8">
        <Container className="space-y-5">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xl text-white text-heading-2">Tools</p>
          </div>

          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[rgb(var(--color-bg))] via-[rgb(var(--color-bg))]/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[rgb(var(--color-bg))] via-[rgb(var(--color-bg))]/80 to-transparent z-10" />

          {/* Carousel wrapper */}
          <div className="relative w-full">
            {/* Group wrapper for hover pause effect */}
            <div className="group overflow-hidden">
              <div className="flex animate-scroll gap-4 w-max">
                {repeatedIcons.map((tool, index) => (
                  <div
                    key={index}
                    className="ease-linear duration-300 grayscale hover:grayscale-0 hover:scale-105 flex items-center gap-3 p-4 sm:p-5 rounded-xl bg-body border border-box-border transform transition-transform duration-300 hover:scale-105 min-w-[200px]"
                  >
                    <img
                      src={`/icons/${tool.src}.png`}
                      width="100"
                      height="60"
                      alt={tool.name}
                      className="h-7 sm:h-10 w-auto "
                    />
                    <span className="text-sm sm:text-base font-medium text-white text-heading-2">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </ScrollReveal>
  );
};
