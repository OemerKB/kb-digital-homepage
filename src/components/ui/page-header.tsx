import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './button';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

export function PageHeader({ 
  title, 
  description, 
  ctaText, 
  ctaLink = '/kontakt',
  className 
}: PageHeaderProps) {
  return (
    <div className={cn("max-w-4xl mx-auto text-center mb-20", className)}>
      <motion.h1 
        className="text-5xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      <motion.p 
        className="text-xl opacity-90 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {description}
      </motion.p>
      {ctaText && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button asChild>
            <a href={ctaLink}>{ctaText}</a>
          </Button>
        </motion.div>
      )}
    </div>
  );
}