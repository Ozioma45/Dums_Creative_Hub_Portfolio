// In Footer.tsx or in a separate file like `data/socialLinks.ts`
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export const socialLinks = [
  {
    href: "https://www.instagram.com/yourprofile",
    icon: <FaInstagram className="w-5 h-5" />,
    label: "Instagram",
  },
  {
    href: "https://www.youtube.com/@yourchannel",
    icon: <FaYoutube className="w-5 h-5" />,
    label: "YouTube",
  },
  {
    href: "https://www.tiktok.com/@yourhandle",
    icon: <FaTiktok className="w-5 h-5" />,
    label: "TikTok",
  },
];
