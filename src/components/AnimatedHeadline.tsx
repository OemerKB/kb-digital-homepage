import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/utils/cn';

interface AnimatedHeadlineProps {
  text: string;
  type?: 'gradient' | 'highlight' | 'typewriter';
  className?: string;
  delay?: number;
}

export function AnimatedHeadline({ 
  text, 
  type = 'gradient', 
  className = '', 
  delay = 0 
}: AnimatedHeadlineProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  if (type === 'gradient') {
    return (
      <motion.h1
        ref={ref}
        className={cn("gradient-text", className)}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay }}
      >
        {text}
      </motion.h1>
    );
  }

  if (type === 'highlight') {
    return (
      <motion.div
        ref={ref}
        className={cn("relative", className)}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay }}
        >
          {text}
        </motion.span>
        <motion.div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 via-red-500/20 to-blue-500/20 rounded-lg"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          style={{ originX: 0 }}
        />
      </motion.div>
    );
  }

  if (type === 'typewriter') {
    return (
      <motion.div
        ref={ref}
        className={cn("relative", className)}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{
              duration: 0.1,
              delay: delay + index * 0.05
            }}
          >
            {char}
          </motion.span>
        ))}
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatDelay: 0.2
          }}
          className="absolute -right-4 top-0"
        >
          |
        </motion.span>
      </motion.div>
    );
  }

  return null;
}