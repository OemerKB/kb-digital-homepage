import React from 'react';
import { Link } from 'react-router-dom';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';
import { Image } from './Image';

interface BentoItemProps {
  title: string;
  description?: string;
  image?: string;
  icon?: LucideIcon;
  link: string;
  size?: 'small' | 'large';
}

const BentoItem = React.memo(function BentoItem({ 
  title, 
  description, 
  image, 
  icon: Icon, 
  link, 
  size = 'small' 
}: BentoItemProps) {
  const { darkMode } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className={cn(
        size === 'large' ? 'md:col-span-2 md:row-span-2' : '',
      )}
    >
      <Link
        to={link}
        className="group relative overflow-hidden rounded-[2.5rem] magical-border glass-card glass-hover block h-full"
      >
        <div className="aspect-[16/9] relative">
          {image ? (
            <>
              <Image
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:filter group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-[2.5rem]" />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center glass rounded-[2.5rem] bg-gray-50/50">
              {Icon && <Icon className="w-16 h-16 gradient-text" />}
            </div>
          )}
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            {Icon && !image && (
              <div className="flex-grow flex items-center justify-center">
                <Icon className="w-16 h-16 gradient-text mb-4" />
              </div>
            )}
            <div>
              <h3 className={cn(
                "text-2xl font-bold mb-2",
                image ? 'text-white' : ''
              )}>{title}</h3>
              {description && (
                <p className={cn(
                  "text-base",
                  image ? 'text-white/80' : 'text-gray-600'
                )}>{description}</p>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
});

interface BentoGridProps {
  items: Array<Omit<BentoItemProps, 'darkMode'>>;
  className?: string;
  title?: string;
  description?: string;
}

export function BentoGrid({ items, className, title, description }: BentoGridProps) {
  return (
    <div className={className}>
      {(title || description) && (
        <div className="text-center mb-16">
          {title && (
            <motion.h2 
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h2>
          )}
          {description && (
            <motion.p 
              className="text-xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {description}
            </motion.p>
          )}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <BentoItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}