import React from 'react';
import { Layout } from '@/components/Layout';
import { BentoGrid } from '@/components/BentoGrid';
import { Search, Globe, Megaphone, BarChart, Target, LineChart, Users, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

export function MarketingPage() {
  const services = [
    {
      icon: Search,
      title: 'Google Ads',
      description: 'Performance Marketing mit Google Ads.',
      link: '/marketing/google-ads',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
      size: 'large'
    },
    {
      icon: Globe,
      title: 'SEO',
      description: 'Suchmaschinenoptimierung für mehr Sichtbarkeit.',
      link: '/marketing/seo',
      image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1200&q=80',
      size: 'small'
    },
    {
      icon: Megaphone,
      title: 'Social Media',
      description: 'Professionelles Social Media Marketing.',
      link: '/marketing/social-media',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1200&q=80',
      size: 'small'
    },
    {
      icon: Users,
      title: 'Organic Social',
      description: 'Organische Reichweite aufbauen.',
      link: '/marketing/organic-social',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80',
      size: 'small'
    },
    {
      icon: Target,
      title: 'Local SEO',
      description: 'Lokale Sichtbarkeit steigern.',
      link: '/marketing/local-seo',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80',
      size: 'large'
    },
    {
      icon: BarChart,
      title: 'Performance Marketing',
      description: 'Datengetriebenes Online Marketing.',
      link: '/marketing/performance',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      size: 'small'
    },
    {
      icon: Brain,
      title: 'Strategy Consulting',
      description: 'Strategische Marketing Beratung.',
      link: '/marketing/strategy',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      size: 'small'
    },
    {
      icon: LineChart,
      title: 'Analytics & Tracking',
      description: 'Datenbasierte Entscheidungen.',
      link: '/marketing/analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      size: 'small'
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
            Online Marketing 🚀
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professionelles Online Marketing für messbaren Erfolg.
            Von SEO bis Performance Marketing.
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