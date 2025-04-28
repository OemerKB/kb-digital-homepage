import React from 'react';
import { Layout } from '@/components/Layout';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
import { getBlogPosts } from '@/utils/blog';

const filters = [
  'Alle',
  'Design',
  'KI',
  'Mobile',
  'UX',
  'Performance',
  'Marketing'
];

export function BlogPage() {
  const [selectedTag, setSelectedTag] = React.useState('Alle');
  const posts = getBlogPosts();

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Blog ✍️
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Insights und Expertise aus der digitalen Welt
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedTag === filter ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedTag(filter)}
              >
                {filter}
              </Button>
            ))}
          </motion.div>
        </div>

        <BlogGrid 
          posts={posts} 
          selectedTag={selectedTag === 'Alle' ? undefined : selectedTag}
          className="max-w-7xl mx-auto"
        />
      </div>
    </Layout>
  );
}