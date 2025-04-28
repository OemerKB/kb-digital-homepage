import React from 'react';
import { motion } from 'framer-motion';
import { BlogCard } from './BlogCard';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';
import type { BlogPost } from '@/types/blog';

interface BlogGridProps {
  posts: BlogPost[];
  selectedTag?: string;
  className?: string;
}

export function BlogGrid({ posts, selectedTag, className }: BlogGridProps) {
  const { darkMode } = useTheme();

  const filteredPosts = selectedTag
    ? posts.filter(post => post.frontmatter.tags.includes(selectedTag))
    : posts;

  return (
    <div className={cn("grid md:grid-cols-2 lg:grid-cols-3 gap-8", className)}>
      {filteredPosts.map((post, index) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <BlogCard post={post} />
        </motion.div>
      ))}
    </div>
  );
}