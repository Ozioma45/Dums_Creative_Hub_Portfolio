import { useState } from "react";
import { PlayCircle } from "lucide-react";

interface VideoCardProps {
  title: string;
  videoId: string; // Just the YouTube video ID
}

export const VideoCardWithThumbnail = ({ title, videoId }: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3`;

  return (
    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg shadow-box-shadow border border-box-border bg-black">
      {!isPlaying ? (
        <button
          onClick={() => setIsPlaying(true)}
          className="relative w-full h-full group"
        >
          <img
            src={thumbnail}
            alt={title}
            className="object-cover w-full h-full group-hover:brightness-75 transition duration-200"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircle className="w-16 h-16 text-white/80 group-hover:text-white transition duration-200" />
          </div>
        </button>
      ) : (
        <iframe
          loading="lazy"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-3xl"
        />
      )}
    </div>
  );
};

export const ShortVideoCardWithThumbnail = ({
  title,
  videoId,
}: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3`;

  return (
    <div className="relative aspect-[9/16] w-full max-w-[300px] mx-auto rounded-3xl overflow-hidden shadow-lg shadow-box-shadow border border-box-border bg-black">
      {!isPlaying ? (
        <button
          onClick={() => setIsPlaying(true)}
          className="relative w-full h-full group"
        >
          <img
            src={thumbnail}
            alt={title}
            className="object-cover w-full h-full group-hover:brightness-75 transition duration-200"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircle className="w-16 h-16 text-white/80 group-hover:text-white transition duration-200" />
          </div>
        </button>
      ) : (
        <iframe
          loading="lazy"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      )}
    </div>
  );
};
