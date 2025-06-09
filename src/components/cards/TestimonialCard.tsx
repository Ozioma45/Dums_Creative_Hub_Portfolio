import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  message: string;
  avatar: string;
}

export const TestimonialCard = ({
  name,
  message,
  avatar,
}: TestimonialProps) => {
  return (
    <div className="bg-gradient-to-br from-[#7f00ff] to-[#1f005c] text-white p-5 rounded-2xl w-full max-w-xs flex flex-col justify-between shadow-xl hover:scale-[1.02] transition-transform duration-200">
      {/* Stars */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="text-yellow-400 w-5 h-5 fill-yellow-400" />
        ))}
      </div>

      {/* Message */}
      <p className="text-sm mb-6">{message}</p>

      {/* Footer */}
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="uppercase text-xs font-bold tracking-wide">
          {name}
        </span>
      </div>
    </div>
  );
};
