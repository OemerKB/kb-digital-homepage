import React from 'react';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';
import { motion } from 'framer-motion';
import { Illustration } from './Illustration';

// ... rest of imports

export function ReviewsSection() {
  const { darkMode } = useTheme();
  
  return (
    <section className={cn(
      "py-20 relative overflow-hidden",
      darkMode ? 'bg-gray-900/50' : 'bg-gray-50'
    )}>
      {/* Decorative illustrations */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <Illustration 
          name="love" 
          className="absolute -left-8 top-1/4 opacity-10 rotate-12"
          size="md"
        />
        <Illustration 
          name="happy" 
          className="absolute -right-8 bottom-1/4 opacity-10 -rotate-12"
          size="md"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* ... rest of the section content */}
      </div>
    </section>
  );
}