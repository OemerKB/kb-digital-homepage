import React from 'react';
import { Layout } from '@/components/Layout';
import { Search, Globe, FileText, BarChart, Link2, Code, Settings, Target } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';
import { PainPointsSection } from '@/components/PainPointsSection';
import { PainSolutionSection } from '@/components/PainSolutionSection';

export function SeoPage() {
  const { darkMode } = useTheme();
  
  const services = [
    {
      icon: Search,
      title: 'OnPage SEO',
      description: 'Technische Optimierung Ihrer Website.'
    },
    {
      icon: Globe,
      title: 'OffPage SEO',
      description: 'Linkbuilding & Authority Aufbau.'
    },
    {
      icon: FileText,
      title: 'Content SEO',
      description: 'SEO-optimierte Inhalte.'
    },
    {
      icon: BarChart,
      title: 'SEO Tracking',
      description: 'Rankings & Performance Analyse.'
    },
    {
      icon: Link2,
      title: 'Linkbuilding',
      description: 'Qualitatives Linkbuilding.'
    },
    {
      icon: Code,
      title: 'Technical SEO',
      description: 'Technische Optimierung.'
    },
    {
      icon: Settings,
      title: 'SEO Audit',
      description: 'Umfassende SEO Analyse.'
    },
    {
      icon: Target,
      title: 'Local SEO',
      description: 'Lokale Suchmaschinenoptimierung.'
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
            Suchmaschinenoptimierung
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professionelle SEO für bessere Rankings und mehr organischen Traffic.
            Von der technischen Optimierung bis zum Content Marketing.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild>
              <a href="/kontakt">SEO Analyse anfordern</a>
            </Button>
          </motion.div>
        </div>

        <PainPointsSection darkMode={darkMode} />

        <PainSolutionSection
          darkMode={darkMode}
          solution={{
            title: "Ganzheitliche SEO Optimierung",
            description: "Wir optimieren Ihre Website für bessere Rankings und mehr qualifizierten Traffic."
          }}
          benefits={[
            {
              title: "Bessere Rankings",
              description: "Top Positionen für relevante Keywords."
            },
            {
              title: "Mehr Traffic",
              description: "Qualifizierte Besucher durch SEO."
            },
            {
              title: "Nachhaltigkeit",
              description: "Langfristige SEO Strategie."
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
            Bereit für bessere Rankings?
          </motion.h2>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            Lassen Sie uns gemeinsam Ihre SEO Strategie entwickeln.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <Button asChild>
              <a href="/kontakt">Jetzt SEO Analyse anfordern</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/referenzen">SEO Referenzen ansehen</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}