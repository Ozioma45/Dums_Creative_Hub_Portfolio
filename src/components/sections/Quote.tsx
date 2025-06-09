import { ScrollReveal } from "../../libs/ScrollReveal";
import { Container } from "../shared/Container";

export const Quote = () => {
  return (
    <ScrollReveal direction="right" delay={0.5}>
      <section className="relative pt-20 w-full max-w-2xl sm:max-w-3xl lg:max-w-3xl xl:max-w-4xl mx-auto">
        <Container className="flex flex-col items-center justify-center text-center gap-10 lg:gap-12">
          <div
            className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-center
                        lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-3xl font-semibold"
          >
            <h1 className="blackWhite text-2xl sm:text-3xl md:text-4xl lg:text-5xl  leading-tight text-center">
              Great Videos Don’t Edit Themselves. I do.
            </h1>
          </div>
        </Container>
      </section>
    </ScrollReveal>
  );
};
