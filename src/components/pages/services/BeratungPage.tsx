import React from 'react';
import { Layout } from '@/components/Layout';
import { Users, LineChart, Lightbulb, Target, Presentation, FileText } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';

export function BeratungPage() {
  const { darkMode } = useTheme();
  
  const services = [
    {
      icon: Users,
      title: 'Strategieberatung',
      description: 'Entwicklung digitaler Strategien.'
    },
    {
      icon: LineChart,
      title: 'Prozessoptimierung',
      description: 'Analyse und Optimierung von Workflows.'
    },
    {
      icon: Lightbulb,
      title: 'Innovationsberatung',
      description: 'Neue Technologien und Trends.'
    },
    {
      icon: Target,
      title: 'Digitale Transformation',
      description: 'Begleitung in die digitale Zukunft.'
    },
    {
      icon: Presentation,
      title: 'Workshops',
      description: 'Interaktive Strategie-Workshops.'
    },
    {
      icon: FileText,
      title: 'Dokumentation',
      description: 'Detaillierte Handlungsempfehlungen.'
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
            Digitale Beratung
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professionelle Beratung für Ihre digitale Transformation.
            Von der Strategie bis zur Umsetzung.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild>
              <a href="/kontakt">Beratungsgespräch vereinbaren</a>
            </Button>
          </motion.div>
        </div>

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

        <motion.div 
          className={cn(
            "rounded-2xl p-8 md:p-12 mb-20",
            darkMode ? 'bg-gray-800/50' : 'bg-gray-50'
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Unser Beratungsprozess</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-2xl">1.</span>
                <span>Analyse der Ist-Situation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">2.</span>
                <span>Definition der Ziele</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">3.</span>
                <span>Entwicklung der Strategie</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">4.</span>
                <span>Maßnahmenplanung</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">5.</span>
                <span>Begleitung der Umsetzung</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Bereit für Ihre digitale Transformation?
          </motion.h2>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            Lassen Sie uns gemeinsam Ihre digitale Zukunft gestalten.
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