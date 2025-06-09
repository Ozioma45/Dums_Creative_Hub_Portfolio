import { Container } from "../shared/Container";
import logo from "../../assets/logos/Dums-Logo-(-YT).png";
import { SocialIcon } from "../shared/SocialIcon";
import { socialLinks } from "../../utils/footer-data";

export const Footer = () => {
  return (
    <footer className="relative pt-20 pb-6 rounded-t-3xl bg-box-bg text-heading-1">
      <Container className="space-y-6">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo and Name */}
          <div className="flex items-center gap-3">
            <img src={logo} className="w-7 h-7" alt="Dums Logo" />
            <span className="text-lg font-semibold">Dums Creative Hub</span>
          </div>

          {/* Social Icons */}
          <ul className="flex gap-6">
            {socialLinks.map((item, key) => (
              <SocialIcon
                key={key}
                href={item.href}
                icon={item.icon}
                label={item.label}
              />
            ))}
          </ul>
        </div>

        {/* Bottom Note */}
        <div className="text-center text-sm text-heading-3 pt-6 border-t border-box-border">
          Built & Designed by{" "}
          <a
            href="https://www.instagram.com/theoziomaegole"
            target="_blank"
            rel="noopener noreferrer"
            className="text-heading-1 hover:underline font-semibold"
          >
            theoziomaegole
          </a>{" "}
          © 2025
        </div>
      </Container>
    </footer>
  );
};
