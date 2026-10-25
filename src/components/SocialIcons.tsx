import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

/**
 * Custom pixel-aligned SVG for TikTok matching Lucide geometry
 */
export const TikTokIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.43V12.1a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-2.91-1.07 4.8 4.8 0 0 1-1.13-2.46z" />
  </svg>
);

export const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <Facebook className={className} />
);

export const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <Instagram className={className} />
);

export interface SocialLinksGroupProps {
  variant?: 'gold-dark' | 'brown' | 'outline' | 'pill';
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
  className?: string;
}

export const SocialMediaLinks: React.FC<SocialLinksGroupProps> = ({
  variant = 'gold-dark',
  size = 'md',
  showLabels = false,
  className = '',
}) => {
  const socialItems = [
    {
      name: 'Facebook',
      url: siteConfig.socials.facebook,
      handle: '@naijapotkitchen',
      icon: <FacebookIcon className={size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />,
      hoverClass: 'hover:text-[#1877F2] hover:border-[#1877F2]/60 hover:bg-[#1877F2]/10',
    },
    {
      name: 'Instagram',
      url: siteConfig.socials.instagram,
      handle: '@naijapotkitchen_grill_mk',
      icon: <InstagramIcon className={size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />,
      hoverClass: 'hover:text-[#E4405F] hover:border-[#E4405F]/60 hover:bg-[#E4405F]/10',
    },
    {
      name: 'TikTok',
      url: siteConfig.socials.tiktok,
      handle: '@naija.pot.kitchen',
      icon: <TikTokIcon className={size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />,
      hoverClass: 'hover:text-[#00f2fe] hover:border-[#00f2fe]/60 hover:bg-black/30',
    },
  ];

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  if (showLabels) {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 ${className}`}>
        {socialItems.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-xl bg-[#1E1B18] border border-[#D4A53A]/30 text-[#FAF6F0] hover:text-[#D4A53A] hover:border-[#D4A53A] transition-all group shadow-xs"
            aria-label={`${item.name} - ${item.handle}`}
          >
            <div className={`rounded-lg bg-[#0B0A09] border border-[#D4A53A]/40 flex items-center justify-center text-[#D4A53A] group-hover:scale-110 transition-transform ${sizeClasses[size]}`}>
              {item.icon}
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-xs font-bold block text-[#FAF6F0] group-hover:text-[#D4A53A] transition-colors">
                {item.name}
              </span>
              <span className="text-[11px] text-stone-400 font-mono truncate block">
                {item.handle}
              </span>
            </div>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {socialItems.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${sizeClasses[size]} ${
            variant === 'gold-dark'
              ? 'bg-[#1E1B18] border border-[#D4A53A]/40 text-[#D4A53A] hover:text-[#FAF6F0] hover:border-[#D4A53A] hover:scale-105 hover:bg-[#3D2314]'
              : variant === 'brown'
              ? 'bg-[#FAF6F0] border border-[#3D2314]/20 text-[#3D2314] hover:text-[#D4A53A] hover:border-[#D4A53A] hover:bg-[#3D2314] hover:scale-105'
              : 'bg-transparent border border-current text-inherit hover:scale-105'
          }`}
          aria-label={item.name}
          title={`Follow us on ${item.name} (${item.handle})`}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};
