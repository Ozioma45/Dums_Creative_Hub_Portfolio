import { Layout } from "./components/Layout";
import { Brands } from "./components/sections/Brands";
import { Hero } from "./components/sections/Hero";
import { Pricing } from "./components/sections/Pricing";
import { CTA } from "./components/sections/CallToAction";
import { Quote } from "./components/sections/Quote";
import { VideoGallery } from "./components/sections/LVideos";

function App() {
  return (
    <Layout title="Dums Creative Hub">
      <Hero />
      <Brands />
      <Quote />
      <VideoGallery />
      {/*<AboutUs />
      <Pricing />
      <CTA />*/}
    </Layout>
  );
}

export default App;
