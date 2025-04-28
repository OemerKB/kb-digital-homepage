import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';

interface Step {
  title: string;
  description?: string;
}

interface ProcessSectionProps {
  title: string;
  steps: Step[];
  className?: string;
}

export function ProcessSection({ title, steps, className }: ProcessSectionProps) {
  const { darkMode } = useTheme();

  return (
    <motion.div 
      className={cn(
        "rounded-2xl p-8 md:p-12 mb-20",
        darkMode ? 'bg-gray-800/50' : 'bg-gray-50',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <ul className="space-y-4">
          {steps.map((step, index) => (
            <li key={index} className="flex gap-3">
              <span className="text-2xl">{index + 1}.</span>
              <span>{step.title}</span>
              {step.description && (
                <span className="opacity-70"> - {step.description}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}