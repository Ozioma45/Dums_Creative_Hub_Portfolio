import { ScrollReveal } from "../../libs/ScrollReveal";
// import { shortVideos } from "../../utils/videos-data";
import { ShortVideoCardWithThumbnail } from "../cards/VideoCardThumbnails";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { useEffect, useState } from "react";
import { client } from "../../libs/sanityClient";
// import { Paragraph } from "../shared/Paragraph";

// Define the expected shape of the video data
interface Video {
  title: string;
  videoId: string;
}

export const ShortVideos = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "video" && category == "short"]{title, videoId}`)
      .then((data: Video[]) => setVideos(data));
  }, []);

  return (
    <ScrollReveal direction="up" delay={0.5}>
      <section id="S-videos">
        <Container className="space-y-8 md:space-y-10 mt-20">
          <div className="text-center titleBg w-full p-5 rounded-lg md:text-start shadow-lg">
            <Title>Short Videos</Title>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-2 justify-items-center">
            {videos.map((video, index) => (
              <ShortVideoCardWithThumbnail
                key={index}
                title={video.title}
                videoId={video.videoId}
              />
            ))}
          </div>
        </Container>
      </section>
    </ScrollReveal>
  );
};
