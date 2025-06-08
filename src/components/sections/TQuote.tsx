import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Button } from "../shared/Button";
import { FaArrowRight } from "react-icons/fa";

export const TQuote = () => {
  return (
    <section className="relative pt-20 w-full max-w-3xl sm:max-w-4xl lg:max-w-4xl xl:max-w-4xl mx-auto">
      <Container className="flex flex-col items-center justify-center text-center gap-10 lg:gap-12">
        <div
          className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-center
                        lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-4xl font-semibold"
        >
          <h1 className="blackWhite text-2xl sm:text-3xl md:text-4xl lg:text-5xl  leading-tight text-center">
            Many satisfied clients before You Don’t Just Take My Word For It
          </h1>
        </div>
      </Container>
    </section>
  );
};
