// components/AboutMeCard.tsx
interface AboutMeProps {
  imageSrc: string;
  name: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export const AboutMeCard = ({
  imageSrc,
  name,
  title,
  description,
  buttonText,
  buttonLink,
}: AboutMeProps) => {
  return (
    <section className="flex justify-center px-4 py-12">
      <div className="bg-gradient-to-br from-[#7B2FFF] to-[#12023F] p-1 rounded-[30px] shadow-2xl max-w-4xl w-full">
        <div
          className="bg-gradient-to-br from-[#7f00ff] to-[#1f005c] 
          rounded-[30px] p-8 flex flex-col md:flex-row items-center gap-8 
          shadow-[inset_0_0_30px_rgba(255,255,255,0.2)] lg:p-15"
        >
          {/* Image */}
          <img
            src={imageSrc}
            alt={name}
            className="w-50 h-50 rounded-xl object-cover"
          />

          {/* Text Content */}
          <div className="text-white text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-2">About myself</h2>
            <p className="text-lg text-gray-300 mb-4 max-w-lg py-4">
              I'm <span className="font-medium text-white">{name}</span> a{" "}
              {title}. {description}
            </p>

            {/* Button */}
            <a
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black font-medium px-5 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
