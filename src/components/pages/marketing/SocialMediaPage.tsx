import React from 'react';
import { Layout } from '@/components/Layout';
import { Instagram, Facebook, Linkedin, Twitter, Youtube, Camera, Video } from 'lucide-react';
import { TikTokIcon } from '@/components/icons/TikTokIcon';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';
import { PainPointsSection } from '@/components/PainPointsSection';
import { PainSolutionSection } from '@/components/PainSolutionSection';

export function SocialMediaPage() {
  const { darkMode } = useTheme();
  
  const services = [
    {
      icon: Instagram,
      title: 'Instagram',
      description: 'Content & Ads für Instagram.'
    },
    {
      icon: Facebook,
      title: 'Facebook',
      description: 'Facebook Marketing & Werbung.'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'B2B Marketing & Personal Branding.'
    },
    {
      icon: Twitter,
      title: 'Twitter/X',
      description: 'Twitter Marketing & Engagement.'
    },
    {
      icon: Youtube,
      title: 'YouTube',
      description: 'Video Marketing & Ads.'
    },
    {
      icon: TikTokIcon,
      title: 'TikTok',
      description: 'TikTok Content & Ads.'
    },
    {
      icon: Camera,
      title: 'Content Creation',
      description: 'Professionelle Foto & Video.'
    },
    {
      icon: Video,
      title: 'Reels & Stories',
      description: 'Kurzform Video Content.'
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
            Social Media Marketing
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professionelles Social Media Marketing für mehr Reichweite und Engagement.
            Von der Strategie bis zur Content Creation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild>
              <a href="/kontakt">Social Media Beratung vereinbaren</a>
            </Button>
          </motion.div>
        </div>

        <PainPointsSection darkMode={darkMode} />

        <PainSolutionSection
          darkMode={darkMode}
          solution={{
            title: "Professionelles Social Media Management",
            description: "Wir entwickeln und betreuen Ihre Social Media Präsenz für maximale Reichweite und Engagement."
          }}
          benefits={[
            {
              title: "Mehr Reichweite",
              description: "Organisches Wachstum & Paid Reach."
            },
            {
              title: "Besseres Engagement",
              description: "Relevanter Content & Community Management."
            },
            {
              title: "Conversion",
              description: "Social Media als Verkaufskanal."
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
            Bereit für erfolgreiche Social Media Präsenz?
          </motion.h2>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            Lassen Sie uns gemeinsam Ihre Social Media Strategie entwickeln.
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