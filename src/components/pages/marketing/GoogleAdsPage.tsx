import React from 'react';
import { Layout } from '@/components/Layout';
import { Search, Target, BarChart, LineChart, Users, Settings } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';
import { PainPointsSection } from '@/components/PainPointsSection';
import { PainSolutionSection } from '@/components/PainSolutionSection';

export function GoogleAdsPage() {
  const { darkMode } = useTheme();
  
  const services = [
    {
      icon: Search,
      title: 'Search Ads',
      description: 'Gezielte Werbung in der Google Suche.'
    },
    {
      icon: Target,
      title: 'Display Ads',
      description: 'Visuelle Werbung im Display Netzwerk.'
    },
    {
      icon: BarChart,
      title: 'Performance',
      description: 'Optimierung für beste Ergebnisse.'
    },
    {
      icon: LineChart,
      title: 'Tracking',
      description: 'Conversion Tracking & Analytics.'
    },
    {
      icon: Users,
      title: 'Remarketing',
      description: 'Zielgerichtetes Remarketing.'
    },
    {
      icon: Settings,
      title: 'Automation',
      description: 'Automatisierte Kampagnen.'
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
            Google Ads
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professionelles Google Ads Management für messbare Erfolge.
            Von der Kampagnenplanung bis zur Optimierung.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild>
              <a href="/kontakt">Google Ads Beratung vereinbaren</a>
            </Button>
          </motion.div>
        </div>

        <PainPointsSection darkMode={darkMode} />

        <PainSolutionSection
          darkMode={darkMode}
          solution={{
            title: "Professionelles Google Ads Management",
            description: "Wir entwickeln und optimieren Ihre Google Ads Kampagnen für maximalen ROI."
          }}
          benefits={[
            {
              title: "Mehr Conversions",
              description: "Gezielte Ansprache Ihrer Zielgruppe."
            },
            {
              title: "Besserer ROI",
              description: "Optimierung für maximale Rendite."
            },
            {
              title: "Transparenz",
              description: "Detailliertes Reporting & Analyse."
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
            Bereit für erfolgreiche Google Ads Kampagnen?
          </motion.h2>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            Lassen Sie uns gemeinsam Ihre Ziele erreichen.
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