import React from 'react';
import { Layout } from '@/components/Layout';
import { MapPin, Search, Star, Building, Phone, Globe, MessageSquare, Map } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';
import { PainPointsSection } from '@/components/PainPointsSection';
import { PainSolutionSection } from '@/components/PainSolutionSection';

export function LocalSeoPage() {
  const { darkMode } = useTheme();
  
  const services = [
    {
      icon: MapPin,
      title: 'Google Business',
      description: 'Optimierung Ihres Google Business Profils.'
    },
    {
      icon: Search,
      title: 'Local Keywords',
      description: 'Lokale Keyword-Optimierung.'
    },
    {
      icon: Star,
      title: 'Bewertungen',
      description: 'Bewertungsmanagement.'
    },
    {
      icon: Building,
      title: 'Branchenbücher',
      description: 'Optimierte Brancheneinträge.'
    },
    {
      icon: Phone,
      title: 'NAP Consistency',
      description: 'Einheitliche Kontaktdaten.'
    },
    {
      icon: Globe,
      title: 'Local Content',
      description: 'Lokalisierte Inhalte.'
    },
    {
      icon: MessageSquare,
      title: 'Review Management',
      description: 'Aktives Bewertungsmanagement.'
    },
    {
      icon: Map,
      title: 'Maps Optimierung',
      description: 'Google Maps Rankings.'
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
            Local SEO
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Lokale Sichtbarkeit für Ihr Unternehmen.
            Von Google Business bis zum Bewertungsmanagement.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild>
              <a href="/kontakt">Local SEO Analyse anfordern</a>
            </Button>
          </motion.div>
        </div>

        <PainPointsSection darkMode={darkMode} />

        <PainSolutionSection
          darkMode={darkMode}
          solution={{
            title: "Lokale Sichtbarkeit steigern",
            description: "Wir optimieren Ihre lokale Online-Präsenz für mehr Kunden aus Ihrer Region."
          }}
          benefits={[
            {
              title: "Lokale Rankings",
              description: "Top Positionen in der lokalen Suche."
            },
            {
              title: "Mehr Kundenanfragen",
              description: "Qualifizierte lokale Leads."
            },
            {
              title: "Bessere Reputation",
              description: "Aktives Bewertungsmanagement."
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
            Bereit für mehr lokale Kunden?
          </motion.h2>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            Lassen Sie uns gemeinsam Ihre lokale Präsenz optimieren.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <Button asChild>
              <a href="/kontakt">Jetzt Local SEO Analyse anfordern</a>
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