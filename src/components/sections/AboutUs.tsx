import { ScrollReveal } from "../../libs/ScrollReveal";
import { AboutMeCard } from "../cards/Aboutme";

export const AboutMe = () => {
  return (
    <ScrollReveal direction="up" delay={0.7}>
      <AboutMeCard
        imageSrc="/comp.png"
        name="Dumebi Okoye"
        title="Video editor, content strategist"
        description="I help coaches and businesses boost their brands’ views and engagement with my storytelling edits."
        buttonText="Book a call"
        buttonLink="https://wa.me/+23408132698614"
      />
    </ScrollReveal>
  );
};
