import { ScrollReveal } from "../../libs/ScrollReveal";
//import { faqs } from "../../utils/Faq-data";
import { FaqCard } from "../cards/FaqCards";

import { useEffect, useState } from "react";
import { client } from "../../libs/sanityClient";
import { FAQ_QUERY } from "../../libs/queries";

interface FAQ {
  _id: string;
  question: string;
  answer: string;
}

export const FaqSection = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  useEffect(() => {
    client.fetch(FAQ_QUERY).then((data) => setFaqs(data));
  }, []);

  return (
    <ScrollReveal direction="up" delay={0.5}>
      <section className=" py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Heading */}
          <div className="space-y-3 ">
            <h2 className="text-heading-2 text-4xl sm:text-5xl font-semibold leading-snug">
              Your questions, <br /> Answered!
            </h2>
            <p className="text-gray-500 text-base sm:text-lg">
              A few answers of your concern.
            </p>
          </div>

          {/* Right Side: FAQs */}
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FaqCard
                key={faq._id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};
