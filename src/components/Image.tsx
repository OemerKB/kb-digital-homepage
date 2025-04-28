import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/utils/cn';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  className?: string;
}

export function Image({ src, alt, className = '', ...props }: ImageProps) {
  const { darkMode } = useTheme();
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: '50px' }
    );

    const element = document.querySelector(`[data-image-src="${src}"]`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [src]);

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  return (
    <div 
      className="relative w-full h-full overflow-hidden"
      data-image-src={src}
    >
      {isLoading && (
        <div 
          className={cn(
            "absolute inset-0 animate-pulse rounded-[--radius]",
            darkMode ? 'bg-gray-800' : 'bg-gray-200'
          )}
        />
      )}
      {hasError ? (
        <div 
          className={cn(
            "flex items-center justify-center w-full h-full rounded-[--radius]",
            darkMode ? 'bg-gray-800' : 'bg-gray-200'
          )}
        >
          <span className="text-sm opacity-70">Failed to load image</span>
        </div>
      ) : (
        <img
          src={isIntersecting ? src : undefined}
          alt={alt}
          className={cn(
            className,
            "rounded-[--radius]",
            isLoading ? 'opacity-0' : 'opacity-100',
            'transition-opacity duration-300 ease-out'
          )}
          loading="lazy"
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}
    </div>
  );
}