'use client';

import React from 'react';
import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';

export function BranchenweltPage() {
  const { darkMode } = useTheme();

  const industries = [
    {
      title: '🍽️ Gastronomie',
      description: 'Digitale Lösungen für Restaurants',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      link: '/branchenwelt/gastronomie',
      size: 'large'
    },
    {
      title: '🏗️ Handwerk & Bau',
      description: 'Digitale Präsenz für Handwerker',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      link: '/branchenwelt/handwerk-bau',
      size: 'small'
    },
    {
      title: '💅 Kosmetik',
      description: 'Beauty & Wellness Digital',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
      link: '/branchenwelt/kosmetik',
      size: 'small'
    },
    {
      title: '💼 Consulting',
      description: 'Digitale Beratungslösungen',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      link: '/branchenwelt/consulting',
      size: 'large'
    },
    {
      title: '🎯 Coaches',
      description: 'Digitale Tools für Trainer',
      image: 'https://images.unsplash.com/photo-1475823678248-624fc6f85785?auto=format&fit=crop&w=800&q=80',
      link: '/branchenwelt/coaches',
      size: 'small'
    },
    {
      title: '🛒 E-Commerce',
      description: 'Online Handel & Shops',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
      link: '/branchenwelt/e-commerce',
      size: 'small'
    },
    {
      title: '🤝 White Label',
      description: 'Services für Agenturen',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      link: '/branchenwelt/white-label',
      size: 'large'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Branchenlösungen 🎯
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Entdecken Sie unsere spezialisierten digitalen Lösungen für Ihre Branche.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {industries.map((industry, index) => (
            <motion.a
              key={index}
              href={industry.link}
              className={cn(
                "group relative overflow-hidden rounded-3xl hover-card magical-border",
                industry.size === 'large' ? 'md:col-span-2' : '',
                darkMode ? 'bg-gray-800/50' : 'bg-white'
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-[16/9] relative">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">{industry.title}</h3>
                  <p className="text-white/80">{industry.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
}