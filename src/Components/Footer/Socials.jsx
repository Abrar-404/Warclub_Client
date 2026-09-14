import React from 'react';
import { 
  FaDiscord, 
  FaTwitch, 
  FaYoutube, 
  FaTwitter, 
  FaInstagram, 
  FaGithub 
} from 'react-icons/fa';

const socialLinks = [
  {
    name: 'Discord',
    icon: FaDiscord,
    href: 'https://discord.com',
    hoverClass: 'hover:bg-[#5865F2] hover:border-[#5865F2] hover:text-white',
    ariaLabel: 'Join Warclub Discord Server',
  },
  {
    name: 'Twitch',
    icon: FaTwitch,
    href: 'https://twitch.tv',
    hoverClass: 'hover:bg-[#9146FF] hover:border-[#9146FF] hover:text-white',
    ariaLabel: 'Watch Warclub on Twitch',
  },
  {
    name: 'YouTube',
    icon: FaYoutube,
    href: 'https://youtube.com',
    hoverClass: 'hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white',
    ariaLabel: 'Subscribe to Warclub YouTube',
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    href: 'https://x.com',
    hoverClass: 'hover:bg-[#1DA1F2] hover:border-[#1DA1F2] hover:text-white',
    ariaLabel: 'Follow Warclub on X / Twitter',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    href: 'https://instagram.com',
    hoverClass: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-[#dc2743] hover:text-white',
    ariaLabel: 'Follow Warclub on Instagram',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com',
    hoverClass: 'hover:bg-[#45F882] hover:border-[#45F882] hover:text-black',
    ariaLabel: 'Warclub GitHub Organization',
  },
];

function Socials({ className = '' }) {
  return (
    <div className={`flex items-center gap-2.5 flex-wrap ${className}`}>
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.ariaLabel}
            className={`relative group flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#0c141f]/90 border border-gray-800 text-gray-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(69,248,130,0.35)] ${social.hoverClass}`}
          >
            <IconComponent className="text-base sm:text-lg transition-transform duration-200 group-hover:scale-110" />
            
            {/* Tooltip */}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[10px] font-orbitron font-semibold uppercase tracking-wider text-black bg-[#45F882] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-30">
              {social.name}
            </span>
          </a>
        );
      })}
    </div>
  );
}

export default Socials;
