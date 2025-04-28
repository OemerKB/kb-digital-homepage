import React from 'react';
import { cn } from '@/utils/cn';

interface IllustrationProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Illustration({ name, className, size = 'md' }: IllustrationProps) {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64'
  };

  return (
    <img 
      src={`https://raw.githubusercontent.com/opendoodles/opendoodles.github.io/master/png/${name}.png`}
      alt=""
      className={cn(
        "opacity-75 select-none pointer-events-none",
        sizeClasses[size],
        className
      )}
      loading="lazy"
      role="presentation"
    />
  );
}