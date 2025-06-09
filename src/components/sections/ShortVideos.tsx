import { shortVideos } from "../../utils/videos-data";
import { ShortVideoCardWithThumbnail } from "../cards/VideoCardThumbnails";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
//import { Paragraph } from "../shared/Paragraph";

export const ShortVideos = () => {
  return (
    <section id="videos ">
      <Container className="space-y-8 md:space-y-10 mt-20">
        <div className="text-center titleBg w-full p-5 rounded-lg md:text-start shadow-lg">
          <Title>Short Videos</Title>
          {/* <Paragraph>
            Check out our curated collection of engaging YouTube content.
          </Paragraph> */}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-2 justify-items-center">
          {shortVideos.map((video, index) => (
            <ShortVideoCardWithThumbnail
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
