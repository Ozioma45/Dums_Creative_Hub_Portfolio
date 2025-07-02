//import { longVideos } from "../../utils/videos-data";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

import { VideoCardWithThumbnail } from "../cards/VideoCardThumbnails";
import { ScrollReveal } from "../../libs/ScrollReveal";

import { useEffect, useState } from "react";
import { client } from "../../libs/sanityClient";

// Define the expected shape of the video data
interface Video {
  title: string;
  videoId: string;
}

export const VideoGallery = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "video" && category == "long"]{title, videoId}`)
      .then((data: Video[]) => setVideos(data));
  }, []);

  return (
    <ScrollReveal direction="up" delay={1}>
      <section id="L-videos">
        <Container className="space-y-8 md:space-y-10 mt-20">
          <div className="text-center titleBg w-full p-5 rounded-lg md:text-start shadow-lg">
            <Title>Long Form</Title>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {videos.map((video, index) => (
              <VideoCardWithThumbnail
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
