import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { Image } from './Image';

interface CaseStudyCardProps {
  slug: string;
  title: string;
  client: string;
  description: string;
  image: string;
  services: string[];
}

export function CaseStudyCard({
  slug,
  title,
  client,
  description,
  image,
  services
}: CaseStudyCardProps) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-[2.5rem] glass-card glass-hover"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={`/referenzen/${slug}`} className="block">
        <div className="aspect-[16/9] relative rounded-[2.5rem] overflow-hidden">
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">{client}</p>
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2">
            {services.map((service, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-gray-100"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}