import React from 'react';
import { Layout } from '@/components/Layout';
import { CaseStudyGrid } from '@/components/CaseStudyGrid';
import { motion } from 'framer-motion';
import { Button } from '@/components/Button';

const filters = [
  'Alle',
  'Webdesign',
  'E-Commerce',
  'Mobile App',
  'Corporate Design',
  'Online Marketing'
];

export function ReferenzenPage() {
  const [activeFilter, setActiveFilter] = React.useState('Alle');

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Unsere Erfolgsgeschichten ⭐️
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Entdecken Sie unsere erfolgreich umgesetzten Projekte und überzeugen Sie sich selbst von unserer Expertise.
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
                variant={activeFilter === filter ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </motion.div>
        </div>

        <CaseStudyGrid 
          filter={activeFilter === 'Alle' ? undefined : activeFilter} 
          className="max-w-7xl mx-auto"
        />
      </div>
    </Layout>
  );
}