import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';
import { Illustration } from './Illustration';

interface Solution {
  title: string;
  description: string;
}

interface Benefit {
  title: string;
  description: string;
}

interface PainSolutionProps {
  title?: string;
  subtitle?: string;
  solution: Solution;
  benefits: Benefit[];
}

export function PainSolutionSection({ 
  title = "Die Lösung 💡", 
  subtitle = "Conversion-fokussiertes Design, das überzeugt.",
  solution,
  benefits 
}: PainSolutionProps) {
  const { darkMode } = useTheme();
  
  return (
    <section className="section-offset py-20 relative overflow-hidden bg-gray-50">
      {/* Decorative illustrations */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <Illustration 
          name="plant" 
          className="absolute left-0 top-1/4 opacity-10"
          size="md"
        />
        <Illustration 
          name="doggy" 
          className="absolute right-0 bottom-1/4 opacity-10"
          size="md"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        </div>

        <motion.div 
          className="max-w-3xl mx-auto mb-16 p-8 rounded-3xl glass-card hover-card magical-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
            <p className="leading-relaxed text-gray-600">{solution.description}</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl glass-card hover-card magical-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="leading-relaxed text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}