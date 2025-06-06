import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Button } from "../shared/Button";
import { Numbers } from "./Numbers"; // Assuming this is correct

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
                        lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
        >
          <h1 className="text-heading-1 text-4xl sm:text-5xl md:text-5xl font-extrabold leading-tight text-center">
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
          <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0 justify-center gap-10 lg:gap-12">
            <Button className="min-w-max text-white">
              <span className="relative z-[5]">Get Started</span>
            </Button>
            <Button className="min-w-max text-white">
              <span className="relative z-[5]">View My Works</span>
            </Button>
          </div>
        </div>

        <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
          <img
            src="https://images.pexels.com/photos/7773731/pexels-photo-7773731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Hero image"
            width={2350}
            height={2359}
            className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
          />
        </div>
      </Container>
      <Numbers />
    </section>
  );
};
