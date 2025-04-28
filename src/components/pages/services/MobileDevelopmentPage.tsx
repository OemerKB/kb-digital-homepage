import React from 'react';
import { Layout } from '@/components/Layout';
import { Smartphone, Code, Zap, Shield, Globe, Tablet, Laptop, Phone } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';

export function MobileDevelopmentPage() {
  const { darkMode } = useTheme();
  
  const services = [
    {
      icon: Phone,
      title: 'iOS Entwicklung',
      description: 'Native Apps für iPhone und iPad.'
    },
    {
      icon: Smartphone,
      title: 'Android Entwicklung',
      description: 'Native Apps für Android Geräte.'
    },
    {
      icon: Globe,
      title: 'Cross-Platform',
      description: 'React Native & Flutter Apps.'
    },
    {
      icon: Code,
      title: 'PWA',
      description: 'Progressive Web Apps.'
    },
    {
      icon: Shield,
      title: 'App Security',
      description: 'Sichere Datenspeicherung.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimierte App-Performance.'
    },
    {
      icon: Tablet,
      title: 'Tablet Support',
      description: 'Optimiert für alle Bildschirmgrößen.'
    },
    {
      icon: Laptop,
      title: 'Backend Integration',
      description: 'APIs und Cloud Services.'
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
            Mobile App Entwicklung
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professionelle App-Entwicklung für iOS und Android.
            Von der Konzeption bis zum App Store Release.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild>
              <a href="/kontakt">App-Entwicklung anfragen</a>
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
            <h2 className="text-3xl font-bold mb-6">Unser App-Entwicklungsprozess</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-2xl">1.</span>
                <span>Konzeption und Anforderungsanalyse</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">2.</span>
                <span>UI/UX Design und Prototyping</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">3.</span>
                <span>Native oder Cross-Platform Entwicklung</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">4.</span>
                <span>Backend Integration und Testing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">5.</span>
                <span>App Store Optimierung und Release</span>
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
            Bereit für Ihre mobile App?
          </motion.h2>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            Lassen Sie uns gemeinsam Ihre App-Idee verwirklichen.
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
              <a href="/referenzen">App-Referenzen ansehen</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}