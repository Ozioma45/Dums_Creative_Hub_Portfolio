interface VideoCardProps {
  title: string;
  url: string;
}

const embedOptions =
  "?modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&autoplay=0";

export const VideoCard = ({ title, url }: VideoCardProps) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-1 rounded-3xl h-full">
      <div className="bg-box-bg border border-box-border rounded-3xl shadow-lg shadow-box-shadow overflow-hidden aspect-video">
        <iframe
          src={`${url}${embedOptions}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-3xl"
        />
      </div>
    </div>
  );
};

export const ShortVideoCard = ({ title, url }: VideoCardProps) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-1 rounded-3xl w-full max-w-[240px]">
      <div className="bg-box-bg border border-box-border rounded-3xl shadow-lg shadow-box-shadow overflow-hidden relative aspect-[9/16]">
        <iframe
          src={`${url}${embedOptions}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; presentation"
          frameBorder="0"
          className="absolute top-0 left-0 w-full h-full rounded-3xl"
        />
      </div>
    </div>
  );
};
