import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';
import { motion } from 'framer-motion';
import { Illustration } from './Illustration';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  emoji?: string;
  illustration?: string;
}

export function ServiceCard({ 
  icon: Icon, 
  title, 
  description,
  emoji = "✨",
  illustration = "coffee"
}: ServiceCardProps) {
  const { darkMode } = useTheme();

  return (
    <motion.div 
      className="glass-card p-6 rounded-2xl glass-hover relative overflow-hidden group"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {/* Background Illustration */}
      <div className="absolute -right-16 -bottom-16 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
        <Illustration name={illustration} size="lg" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <Icon className="w-12 h-12 gradient-text" />
          <span className="text-2xl" role="img" aria-label="emoji">{emoji}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="leading-relaxed text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}