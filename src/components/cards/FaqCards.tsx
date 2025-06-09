import { useState } from "react";
import { Plus } from "lucide-react";

interface FaqProps {
  question: string;
  answer: string;
}

export const FaqCard = ({ question, answer }: FaqProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-[#161626] text-white rounded-xl px-6 py-5 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] ${
        isOpen ? "shadow-lg" : "shadow-md"
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-sm sm:text-base font-medium">{question}</h3>
        <span
          className={`text-white transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          <Plus className="w-5 h-5" />
        </span>
      </div>

      {/* Animated Collapse */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] mt-3 opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm text-gray-300 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};
