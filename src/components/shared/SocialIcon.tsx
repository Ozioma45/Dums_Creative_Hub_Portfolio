// components/shared/SocialIcon.tsx
interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export const SocialIcon = ({ href, icon, label }: SocialIconProps) => {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="text-heading-1 hover:text-primary transition-colors duration-300"
      >
        {icon}
      </a>
    </li>
  );
};
