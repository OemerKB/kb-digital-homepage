import React from 'react';
import { motion } from 'framer-motion';
import { ServiceCard } from '@/components/ServiceCard';
import { useTheme } from '@/hooks/useTheme';

interface Service {
  icon?: React.ElementType;
  title: string;
  description: string;
}

interface ServiceGridProps {
  services: Service[];
}

export function ServiceGrid({ services }: ServiceGridProps) {
  const { darkMode } = useTheme();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ServiceCard {...service} darkMode={darkMode} />
        </motion.div>
      ))}
    </div>
  );
}