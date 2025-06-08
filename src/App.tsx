import { Layout } from "./components/Layout";
import { Brands } from "./components/sections/Brands";
import { Hero } from "./components/sections/Hero";
import { MotionGraphics } from "./components/sections/MotionGraphics";
import { ShortVideos } from "./components/sections/ShortVideos";
import { Quote } from "./components/sections/Quote";
import { VideoGallery } from "./components/sections/LVideos";

function App() {
  return (
    <Layout title="Dums Creative Hub">
      <Hero />
      <Brands />
      <Quote />
      <VideoGallery />
      <MotionGraphics />
      <ShortVideos />
      {/*<AboutUs />
      <Pricing />
      <CTA />*/}
    </Layout>
  );
}

export default App;
