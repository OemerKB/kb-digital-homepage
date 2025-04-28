import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';
import type { BlogPost as BlogPostType } from '@/types/blog';

interface BlogPostProps {
  post: BlogPostType;
}

export function BlogPost({ post }: BlogPostProps) {
  const { darkMode } = useTheme();
  const { frontmatter, content, readingTime } = post;

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-16">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-sm mb-8 hover:opacity-70 transition-opacity"
          aria-label="Zurück zum Blog"
        >
          <ArrowLeft className="w-4 h-4" /> Zurück zum Blog
        </Link>

        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {frontmatter.title}
        </motion.h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-8 text-sm">
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
        <div className="flex flex-wrap gap-2">
          {frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "px-3 py-1 rounded-full text-sm",
                darkMode ? 'bg-gray-800' : 'bg-gray-100'
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Featured Image */}
      <div className="mb-16 rounded-xl overflow-hidden">
        <img
          src={frontmatter.image}
          alt={frontmatter.title}
          className="w-full aspect-video object-cover"
        />
      </div>

      {/* Content */}
      <div className={cn(
        "prose prose-lg max-w-none",
        darkMode ? 'prose-invert' : '',
        'prose-headings:font-bold prose-a:text-purple-600 hover:prose-a:text-purple-500',
        'prose-pre:rounded-xl prose-pre:bg-gray-900 prose-pre:text-gray-100',
        'prose-img:rounded-xl'
      )}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeHighlight]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
}