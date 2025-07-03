import { Layout } from "./components/Layout";
import { Brands } from "./components/sections/Brands";
import { Hero } from "./components/sections/Hero";
import { MotionGraphics } from "./components/sections/MotionGraphics";
import { ShortVideos } from "./components/sections/ShortVideos";
import { Quote } from "./components/sections/Quote";
import { VideoGallery } from "./components/sections/LVideos";
import { TQuote } from "./components/sections/TQuote";
import { TestimonialSection } from "./components/sections/Testimonial";
import { FaqSection } from "./components/sections/Faq";
import { AboutMe } from "./components/sections/AboutUs";
import { DriveLink } from "./components/sections/DriveLink";

function App() {
  return (
    <Layout title="Dums Creative Hub">
      <Hero />
      <Brands />
      <Quote />
      <VideoGallery />
      <MotionGraphics />
      <ShortVideos />
      <DriveLink />
      <TQuote />
      <TestimonialSection />
      <FaqSection />
      <AboutMe />
    </Layout>
  );
}

export default App;
