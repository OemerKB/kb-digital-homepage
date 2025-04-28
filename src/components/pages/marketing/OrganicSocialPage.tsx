import React from 'react';
import { Layout } from '@/components/Layout';
import { Users, Camera, Video, MessageCircle, Heart, Share2, BarChart, Calendar } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';
import { PainPointsSection } from '@/components/PainPointsSection';
import { PainSolutionSection } from '@/components/PainSolutionSection';

export function OrganicSocialPage() {
  const { darkMode } = useTheme();
  
  const services = [
    {
      icon: Camera,
      title: 'Content Creation',
      description: 'Professionelle Foto & Video Produktion.'
    },
    {
      icon: Video,
      title: 'Reels & Stories',
      description: 'Engaging Video Content.'
    },
    {
      icon: MessageCircle,
      title: 'Community Management',
      description: 'Aktive Community Betreuung.'
    },
    {
      icon: Heart,
      title: 'Engagement',
      description: 'Organische Interaktionen steigern.'
    },
    {
      icon: Share2,
      title: 'Content Distribution',
      description: 'Optimale Content Verteilung.'
    },
    {
      icon: BarChart,
      title: 'Analytics',
      description: 'Performance Tracking.'
    },
    {
      icon: Users,
      title: 'Audience Building',
      description: 'Organisches Wachstum.'
    },
    {
      icon: Calendar,
      title: 'Content Planung',
      description: 'Strategische Planung.'
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
            Organic Social Media
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Nachhaltiges Wachstum durch organische Reichweite.
            Von der Content Creation bis zum Community Management.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild>
              <a href="/kontakt">Content Strategie Beratung</a>
            </Button>
          </motion.div>
        </div>

        <PainPointsSection darkMode={darkMode} />

        <PainSolutionSection
          darkMode={darkMode}
          solution={{
            title: "Organisches Wachstum & Engagement",
            description: "Wir entwickeln eine nachhaltige Social Media Strategie für langfristigen Erfolg."
          }}
          benefits={[
            {
              title: "Authentische Reichweite",
              description: "Organisches Wachstum ohne Werbung."
            },
            {
              title: "Aktive Community",
              description: "Echtes Engagement & Interaktion."
            },
            {
              title: "Qualitativ hochwertiger Content",
              description: "Professionelle Content Creation."
            }
          ]}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...service} darkMode={darkMode} />
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Bereit für organisches Wachstum?
          </motion.h2>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            Lassen Sie uns gemeinsam Ihre Content Strategie entwickeln.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <Button asChild>
              <a href="/kontakt">Jetzt Beratungsgespräch vereinbaren</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/referenzen">Referenzen ansehen</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}