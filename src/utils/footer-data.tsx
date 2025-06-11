// In Footer.tsx or in a separate file like `data/socialLinks.ts`
import { FaInstagram, FaYoutube, FaTiktok, FaTwitter } from "react-icons/fa";

export const socialLinks = [
  {
    href: "https://x.com/Dumscreativehub",
    icon: <FaTwitter className="w-5 h-5" />,
    label: "Twitter",
  },
  {
    href: "https://www.instagram.com/dumscreativehub/",
    icon: <FaInstagram className="w-5 h-5" />,
    label: "Instagram",
  },
  {
    href: "https://www.youtube.com/@DumsCreativeHub",
    icon: <FaYoutube className="w-5 h-5" />,
    label: "YouTube",
  },
  {
    href: "https://www.tiktok.com/@_dumscreativehub?lang=en",
    icon: <FaTiktok className="w-5 h-5" />,
    label: "TikTok",
  },
];
