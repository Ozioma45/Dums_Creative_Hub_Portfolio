import { useEffect, useState } from "react";
import { ScrollReveal } from "../../libs/ScrollReveal";
import { client } from "../../libs/sanityClient";
import { ABOUT_ME_QUERY } from "../../libs/queries";

interface AboutMeData {
  imageUrl: string;
  name: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export const AboutMe = () => {
  const [data, setData] = useState<AboutMeData | null>(null);

  useEffect(() => {
    client.fetch(ABOUT_ME_QUERY).then(setData);
  }, []);

  if (!data) return null;

  return (
    <ScrollReveal direction="up" delay={0.7}>
      <section className="flex justify-center px-4 py-12">
        <div className="bg-gradient-to-br from-[#7B2FFF] to-[#12023F] p-1 rounded-[30px] shadow-2xl max-w-4xl w-full">
          <div
            className="bg-gradient-to-br from-[#7f00ff] to-[#1f005c] 
            rounded-[30px] p-8 flex flex-col md:flex-row items-center gap-8 
            shadow-[inset_0_0_30px_rgba(255,255,255,0.2)] lg:p-15"
          >
            <img
              src={data.imageUrl}
              alt={data.name}
              className="w-50 h-50 rounded-xl object-cover"
            />

            <div className="text-white text-center md:text-left">
              <h2 className="text-3xl font-semibold mb-2">About myself</h2>
              <p className="text-lg text-gray-300 mb-4 max-w-lg py-4">
                I'm <span className="font-medium text-white">{data.name}</span>{" "}
                a {data.title}. {data.description}
              </p>

              <a
                href={data.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black font-medium px-5 py-2 rounded-lg hover:bg-gray-200 transition"
              >
                {data.buttonText}
              </a>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};
