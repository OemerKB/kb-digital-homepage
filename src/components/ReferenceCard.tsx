import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';
import { Image } from './Image';

interface ReferenceCardProps {
  name: string;
  url: string;
  desc: string;
  image: string;
  services?: string[];
}

export function ReferenceCard({ name, url, desc, image, services = [] }: ReferenceCardProps) {
  const { darkMode } = useTheme();
  
  return (
    <motion.div 
      className="space-y-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className="text-xl font-bold flex items-center gap-2">
        {name}
        <Link 
          to={url}
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
        </Link>
      </h3>
      <Link
        to={url}
        className="group block relative overflow-hidden rounded-[2.5rem] glass-card glass-hover"
      >
        <div className="aspect-video relative">
          <Image
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:filter group-hover:brightness-110"
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white text-sm mb-4">{desc}</p>
              {services.length > 0 && (
                <ul className="flex flex-wrap gap-2">
                  {services.map((service, index) => (
                    <li 
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-white/20 text-white"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}