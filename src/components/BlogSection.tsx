import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';
import { Button } from './Button';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { Illustration } from './Illustration';

// ... rest of imports

export function BlogSection() {
  const { darkMode } = useTheme();
  
  return (
    <section className={cn(
      "py-20 relative overflow-hidden",
      darkMode ? 'bg-gray-800/50' : 'bg-gray-50'
    )}>
      {/* Decorative illustrations */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <Illustration 
          name="reading" 
          className="absolute left-0 top-1/3 opacity-10"
          size="lg"
        />
        <Illustration 
          name="writing" 
          className="absolute right-0 bottom-1/3 opacity-10"
          size="lg"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* ... rest of the section content */}
      </div>
    </section>
  );
}