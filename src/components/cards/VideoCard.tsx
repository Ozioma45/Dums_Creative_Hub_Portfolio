interface VideoCardProps {
  title: string;
  url: string;
}

export const VideoCard = ({ title, url }: VideoCardProps) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-1 rounded-3xl h-full">
      <div className="bg-box-bg border border-box-border rounded-3xl shadow-lg shadow-box-shadow overflow-hidden aspect-video">
        <iframe
          src={url}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-3xl"
        />
      </div>
    </div>
  );
};
