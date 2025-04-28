import React from 'react';
import { Layout } from '@/components/Layout';
import { Zap, Globe, Smartphone, Clock, Shield, Palette, LineChart, Sparkles } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';

export function ExpressWebdesignPage() {
  const { darkMode } = useTheme();
  
  const services = [
    {
      icon: Zap,
      title: 'Schnelle Umsetzung',
      description: 'Website in 48-72 Stunden.'
    },
    {
      icon: Globe,
      title: 'Responsive Design',
      description: 'Perfekt auf allen Geräten.'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Optimiert für Smartphones.'
    },
    {
      icon: Clock,
      title: 'Express Service',
      description: 'Prioritäre Bearbeitung.'
    },
    {
      icon: Shield,
      title: 'Sicherheit',
      description: 'SSL und Backups inklusive.'
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Professionelles Layout.'
    },
    {
      icon: LineChart,
      title: 'SEO Ready',
      description: 'Optimiert für Google.'
    },
    {
      icon: Sparkles,
      title: 'Updates',
      description: 'Kostenlose Updates.'
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
            Express Webdesign
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professionelle Website in 48-72 Stunden.
            Schnell, zuverlässig und hochwertig.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild>
              <a href="/kontakt">Express-Angebot anfordern</a>
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
            <h2 className="text-3xl font-bold mb-6">Express-Prozess</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-2xl">1.</span>
                <span>Briefing und Design-Auswahl (Tag 1)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">2.</span>
                <span>Content-Aufbereitung (Tag 1)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">3.</span>
                <span>Design-Umsetzung (Tag 2)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">4.</span>
                <span>Testing und Optimierung (Tag 3)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">5.</span>
                <span>Launch und Einweisung (Tag 3)</span>
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
            Bereit für Ihre Express-Website?
          </motion.h2>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            Starten Sie jetzt und gehen Sie in wenigen Tagen online.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <Button asChild>
              <a href="/kontakt">Jetzt Express-Angebot anfordern</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/referenzen">Express-Referenzen ansehen</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}