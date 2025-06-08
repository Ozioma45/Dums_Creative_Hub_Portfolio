import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Button } from "../shared/Button";
import { FaArrowRight } from "react-icons/fa";

export const Hero = () => {
  return (
    <section className="relative pt-30 lg:pt-36">
      <Container className="flex flex-col items-center justify-center text-center gap-10 lg:gap-12">
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
          <span
            className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 
                        skew-x-12 rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600
                        blur-xl opacity-60 lg:opacity-95 lg:block hidden"
          ></span>
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80"></span>
        </div>

        <div
          className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-center
                        lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-5xl"
        >
          <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl  leading-tight text-center">
            Visual storytelling that
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 ml-2 design-font">
              captivates
            </span>{" "}
            and
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 ml-2 design-font">
              engages
            </span>{" "}
            your target audience.
          </h1>
          <Paragraph className="mt-4 text-center bg">
            Get Irresistible Engagement on your videos with High-Quality Edits.
          </Paragraph>
          <div className="mt-10 w-full flex flex-col sm:flex-row items-center justify-center lg:justify-center gap-4 sm:gap-6 lg:gap-8 max-w-md sm:max-w-xl mx-auto lg:mx-0">
            <Button className="min-w-[150px] px-6 py-3 text-white text-sm sm:text-base font-semibold bg-gradient-to-r from-blue-600 to-violet-600 hover:opacity-90 rounded-xl shadow-lg transition-all duration-300 ease-in-out">
              <span className="relative z-[5]">Get Started</span>
            </Button>

            <Button className="min-w-[150px] px-6 py-3 text-white text-sm sm:text-base font-semibold border border-white/20 hover:border-white/50 rounded-xl flex items-center justify-center gap-2 group transition-all duration-300 ease-in-out">
              <span className="relative z-[5]">View My Works</span>
              <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        <div
          className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg 
                max-w-2xl sm:max-w-3xl lg:max-w-3xl xl:max-w-4xl mx-auto"
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            title="YouTube Video"
            allow="presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            src="https://www.youtube.com/embed/0lPGwbfKjBc?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=1&loop=1&playlist=0lPGwbfKjBc&color=white"
            frameBorder="0"
          ></iframe>
        </div>
      </Container>
    </section>
  );
};
