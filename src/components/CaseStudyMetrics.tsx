import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock } from 'lucide-react';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';

interface MetricsProps {
  metrics: Record<string, string>;
  className?: string;
}

export function CaseStudyMetrics({ metrics, className }: MetricsProps) {
  const { darkMode } = useTheme();

  const getIcon = (key: string) => {
    switch (key.toLowerCase()) {
      case 'conversion':
      case 'revenue':
      case 'efficiency':
        return TrendingUp;
      case 'retention':
      case 'satisfaction':
      case 'engagement':
        return Users;
      default:
        return Clock;
    }
  };

  return (
    <div className={cn("grid md:grid-cols-3 gap-6", className)}>
      {Object.entries(metrics).map(([key, value], index) => {
        const Icon = getIcon(key);
        
        return (
          <motion.div
            key={key}
            className={cn(
              "p-6 rounded-xl text-center",
              darkMode ? 'bg-gray-800/50' : 'bg-gray-50'
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Icon className="w-8 h-8 mx-auto mb-4 text-green-500" />
            <p className="text-3xl font-bold mb-2">{value}</p>
            <p className="text-sm capitalize opacity-70">{key}</p>
          </motion.div>
        );
      })}
    </div>
  );
}