import { motionGraphics } from "../../utils/videos-data";
import { VideoCardWithThumbnail } from "../cards/VideoCardThumbnails";
import { VideoCard } from "../cards/VideoCard";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
//import { Paragraph } from "../shared/Paragraph";

export const MotionGraphics = () => {
  return (
    <section id="videos ">
      <Container className="space-y-8 md:space-y-10 mt-20">
        <div className="text-center titleBg w-full p-5 rounded-lg md:text-start shadow-lg">
          <Title>Motion Graphics</Title>
          {/* <Paragraph>
            Check out our curated collection of engaging YouTube content.
          </Paragraph> */}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {motionGraphics.map((video, index) => (
            <VideoCardWithThumbnail
              key={index}
              title={video.title}
              videoId={video.videoId}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
