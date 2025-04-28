import React from 'react';
import { Layout } from '@/components/Layout';
import { BentoGrid } from '@/components/BentoGrid';
import { Code, Palette, Globe, Smartphone, Bot, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: 'Webentwicklung',
      description: 'Moderne Websites mit neuester Technologie.',
      link: '/services/webentwicklung',
      image: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&w=1200&q=80',
      size: 'large',
      emoji: '⚡️'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Nutzerfreundliche Interfaces mit zeitgemäßem Design.',
      link: '/services/webdesign',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80',
      size: 'small',
      emoji: '🎨'
    },
    {
      icon: Globe,
      title: 'Online Shops',
      description: 'E-Commerce Lösungen die verkaufen.',
      link: '/services/online-shop',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
      size: 'small',
      emoji: '🛍️'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native und Cross-Platform Entwicklung.',
      link: '/services/mobile-development',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
      size: 'small',
      emoji: '📱'
    },
    {
      icon: Bot,
      title: 'KI Automation',
      description: 'Intelligente Prozessautomatisierung.',
      link: '/services/ki-automation',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
      size: 'large',
      emoji: '🤖'
    },
    {
      icon: FileText,
      title: 'Print & Design',
      description: 'Hochwertige Druckprodukte.',
      link: '/services/print',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80',
      size: 'small',
      emoji: '🎯'
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
            Unsere Services ⚡️
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Von der Konzeption bis zur Umsetzung - alles aus einer Hand.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <BentoGrid items={services} />
        </motion.div>
      </div>
    </Layout>
  );
}