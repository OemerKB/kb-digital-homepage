import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';
import { Image } from '../Image';
import type { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const { darkMode } = useTheme();
  const { frontmatter, excerpt, readingTime } = post;

  return (
    <motion.article
      className={cn(
        "group relative overflow-hidden rounded-[2.5rem] h-full",
        darkMode ? 'bg-gray-800/50' : 'bg-gray-50',
        'glass-card glass-hover'
      )}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/blog/${post.slug}`} className="block h-full">
        {/* Featured Image */}
        <div className="aspect-[16/9] relative">
          <Image
            src={frontmatter.image}
            alt={frontmatter.title}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-[2.5rem]" />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={frontmatter.date}>
                {format(new Date(frontmatter.date), 'dd. MMMM yyyy', { locale: de })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{readingTime} min Lesezeit</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className={cn(
                  "px-3 py-1 rounded-full text-sm",
                  darkMode ? 'bg-gray-700' : 'bg-gray-200'
                )}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title & Excerpt */}
          <h3 className="text-xl font-bold mb-2 gradient-text transition-opacity duration-300 group-hover:opacity-80">
            {frontmatter.title}
          </h3>
          <p className={cn(
            "line-clamp-3",
            darkMode ? 'text-gray-300' : 'text-gray-600'
          )}>
            {excerpt}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}