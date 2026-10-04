import React from 'react';
import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  variant?: 'full' | 'icon';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  showTagline = false, 
  variant = 'full',
  className = '' 
}) => {
  const logoHeights = {
    sm: 'h-11 sm:h-12',
    md: 'h-14 sm:h-16',
    lg: 'h-18 sm:h-20',
  };

  const iconSizes = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  if (variant === 'icon') {
    return (
      <div className={`relative ${iconSizes[size]} flex items-center justify-center shrink-0 ${className}`}>
        {/* Light Mode Colored Icon */}
        <Image 
          src="/logo-icon.svg" 
          alt="GudPals Logo Icon" 
          width={64} 
          height={64} 
          className="w-full h-full object-contain block dark:hidden"
        />
        {/* Dark Mode White Icon */}
        <Image 
          src="/logo-icon.svg" 
          alt="GudPals Logo Icon" 
          width={64} 
          height={64} 
          className="w-full h-full object-contain hidden dark:block dark:brightness-0 dark:invert"
        />
      </div>
    );
  }

  return (
    <div className={`flex flex-col justify-center group cursor-pointer shrink-0 ${className}`}>
      <div className={`relative ${logoHeights[size]} flex items-center gap-2 group-hover:scale-[1.03] transition-transform duration-300`}>
        {/* LIGHT MODE: Colored GudPals Logo (Green & Orange) */}
        <Image 
          src="/logo-light.png" 
          alt="GudPals Logo (Light Theme)" 
          width={280} 
          height={90} 
          priority
          className="h-full w-auto object-contain block dark:hidden"
        />

        {/* DARK MODE: White GudPals Logo */}
        <Image 
          src="/logo-dark.png" 
          alt="GudPals Logo (Dark Theme)" 
          width={280} 
          height={90} 
          priority
          className="h-full w-auto object-contain hidden dark:block dark:brightness-0 dark:invert"
        />
      </div>

      {showTagline && (
        <span className="text-[10px] font-semibold tracking-wider uppercase text-[#6B8E23] dark:text-[#E6B325] mt-0.5 ml-1">
          Senior Citizens Platform
        </span>
      )}
    </div>
  );
};
