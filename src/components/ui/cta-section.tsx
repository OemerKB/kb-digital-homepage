import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from './button';

interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export function CTASection({ 
  title, 
  description, 
  primaryCTA, 
  secondaryCTA 
}: CTASectionProps) {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        {title}
      </motion.h2>
      <motion.p 
        className="text-xl opacity-90 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        {description}
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        <Button asChild>
          <Link to={primaryCTA.href}>{primaryCTA.text}</Link>
        </Button>
        {secondaryCTA && (
          <Button variant="outline" asChild>
            <Link to={secondaryCTA.href}>{secondaryCTA.text}</Link>
          </Button>
        )}
      </motion.div>
    </div>
  );
}