import React from 'react';
import { Layout } from '@/components/Layout';
import { Bot, Brain, Zap, LineChart, Settings, Code, Sparkles, Shield } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';

export function KiAutomationPage() {
  const { darkMode } = useTheme();
  
  const services = [
    {
      icon: Bot,
      title: 'Chatbots',
      description: 'KI-gestützte Kundenservice Bots.'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Intelligente Datenanalyse.'
    },
    {
      icon: Zap,
      title: 'Prozessautomatisierung',
      description: 'Automatisierte Workflows.'
    },
    {
      icon: LineChart,
      title: 'Predictive Analytics',
      description: 'Vorhersagemodelle für Ihr Business.'
    },
    {
      icon: Settings,
      title: 'Integration',
      description: 'Nahtlose System-Integration.'
    },
    {
      icon: Code,
      title: 'Custom KI',
      description: 'Maßgeschneiderte KI-Lösungen.'
    },
    {
      icon: Sparkles,
      title: 'NLP',
      description: 'Textanalyse und -verarbeitung.'
    },
    {
      icon: Shield,
      title: 'KI Security',
      description: 'Sichere KI-Implementierung.'
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
            KI & Automation
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Nutzen Sie die Kraft der künstlichen Intelligenz für Ihr Unternehmen.
            Von Chatbots bis zu komplexen KI-Systemen.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild>
              <a href="/kontakt">KI-Beratung vereinbaren</a>
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
            <h2 className="text-3xl font-bold mb-6">Unser KI-Entwicklungsprozess</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-2xl">1.</span>
                <span>Analyse Ihrer Anforderungen und Use Cases</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">2.</span>
                <span>Auswahl der passenden KI-Technologien</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">3.</span>
                <span>Entwicklung und Training der KI-Modelle</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">4.</span>
                <span>Integration und Testing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">5.</span>
                <span>Deployment und Monitoring</span>
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
            Bereit für die KI-Revolution?
          </motion.h2>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            Lassen Sie uns gemeinsam Ihre Prozesse intelligent automatisieren.
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
              <a href="/referenzen">KI-Referenzen ansehen</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}