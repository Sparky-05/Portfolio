import React, { ReactNode } from 'react';

type SocialIconProps = {
  icon: ReactNode;
  href: string;
};

const SocialIcon = ({ icon, href }: SocialIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-[40px] w-[40px] flex items-center justify-center text-white border border-neutral-700 bg-neutral-800 rounded-lg cursor-pointer z-50 hover:scale-110 transition-all duration-200 ease-in-out"
    >
      {icon}
    </a>
  );
};

export default SocialIcon;
