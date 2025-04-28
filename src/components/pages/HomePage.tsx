'use client';

import React from 'react';
import { Layout } from '@/components/Layout';
import { ReviewsSection } from '@/components/ReviewsSection';
import { ReferencesSection } from '@/components/ReferencesSection';
import { AboutSection } from '@/components/AboutSection';
import { BlogSection } from '@/components/BlogSection';
import { PainPointsSection } from '@/components/PainPointsSection';
import { PainSolutionSection } from '@/components/PainSolutionSection';
import { BentoGrid } from '@/components/BentoGrid';
import Link from 'next/link';
import { Code, Palette, Globe, Smartphone, Bot, FileText, Building2, Store } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/utils/cn';

export function HomePage() {
  const { darkMode } = useTheme();

  const services = [
    {
      icon: Code,
      title: 'Webentwicklung',
      description: 'Moderne Websites mit neuester Technologie.',
      link: '/services/webentwicklung',
      image: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&w=1200&q=80',
      size: 'large'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Nutzerfreundliche Interfaces mit zeitgemäßem Design.',
      link: '/services/webdesign',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80',
      size: 'small'
    },
    {
      icon: Globe,
      title: 'Online Shops',
      description: 'E-Commerce Lösungen die verkaufen.',
      link: '/services/online-shop',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
      size: 'small'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native und Cross-Platform Entwicklung.',
      link: '/services/mobile-development',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
      size: 'small'
    },
    {
      icon: Bot,
      title: 'KI Automation',
      description: 'Intelligente Prozessautomatisierung.',
      link: '/services/ki-automation',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
      size: 'large'
    },
    {
      icon: FileText,
      title: 'Print & Design',
      description: 'Hochwertige Druckprodukte.',
      link: '/services/print',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80',
      size: 'small'
    }
  ];

  const industries = [
    {
      icon: Building2,
      title: 'Handwerk & Bau',
      description: 'Digitale Lösungen für Handwerker.',
      link: '/handwerk-bau',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      size: 'large'
    },
    {
      icon: Store,
      title: 'Gastronomie',
      description: 'Digitale Präsenz für Restaurants.',
      link: '/gastronomie',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      size: 'small'
    },
    {
      title: 'Kosmetik',
      description: 'Beauty & Wellness Digital.',
      link: '/kosmetik',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
      size: 'small'
    },
    {
      title: 'Consulting',
      description: 'Digitale Beratungslösungen.',
      link: '/consulting',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
      size: 'small'
    }
  ];

  return (
    <Layout>
      <motion.header 
        className="container mx-auto px-4 pt-32 pb-20 text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-7xl md:text-8xl font-bold mb-6 font-space-grotesk"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Zukunft ist <span className="kb-digital">(kb)</span> digital
          </motion.h1>
          <motion.p 
            className="text-2xl mb-8 font-space-grotesk"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ihre Vision. Unsere Expertise.
          </motion.p>
          <motion.p 
            className="text-xl opacity-90 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Wir erschaffen magische digitale Erlebnisse, die begeistern und Ihr Unternehmen in die Zukunft führen.
          </motion.p>
          <motion.div 
            className="flex gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href="/kontakt"
              className={cn(
                "px-8 py-3 rounded-lg font-semibold transition-all duration-300",
                darkMode 
                  ? "bg-white text-gray-900 hover:bg-gray-200"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              )}
            >
              Projekt starten
            </Link>
            <a
              href="#services"
              className={cn(
                "px-8 py-3 rounded-lg font-semibold transition-all duration-300",
                darkMode
                  ? "bg-gray-800 text-white hover:bg-gray-700"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              )}
            >
              Mehr erfahren
            </a>
          </motion.div>
        </div>
      </motion.header>

      <PainPointsSection />
      <PainSolutionSection
        solution={{
          title: "Digitale Exzellenz ✨",
          description: "Wir verwandeln Ihre digitale Präsenz in ein Erlebnis, das begeistert und konvertiert."
        }}
        benefits={[
          {
            title: "Conversion-Optimierung",
            description: "Websites, die Besucher in Kunden verwandeln."
          },
          {
            title: "Unique Branding",
            description: "Unverwechselbare Markenidentität, die im Gedächtnis bleibt."
          },
          {
            title: "Technische Perfektion",
            description: "Modernste Technologien für optimale Performance."
          }
        ]}
      />

      <section id="services" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Unsere Services ⚡️</h2>
          <BentoGrid items={services} />
        </div>
      </section>

      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Branchen 🎯</h2>
          <BentoGrid items={industries} />
        </div>
      </section>

      <AboutSection />
      <ReviewsSection />
      <ReferencesSection />
      <BlogSection />
    </Layout>
  );
}