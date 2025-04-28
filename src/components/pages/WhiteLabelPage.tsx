import React from 'react';
import { Layout } from '@/components/Layout';
import { Code, Palette, Globe, Smartphone, Bot, FileText } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';

export function WhiteLabelPage() {
  const { darkMode } = useTheme();
  
  const services = [
    {
      icon: Code,
      title: 'Webentwicklung',
      description: 'White Label Entwicklung für Ihre Kunden.'
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Individuelles Design nach Ihren Vorgaben.'
    },
    {
      icon: Globe,
      title: 'Online Shops',
      description: 'E-Commerce Lösungen für Ihre Kunden.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native und Cross-Platform Entwicklung.'
    },
    {
      icon: Bot,
      title: 'KI Integration',
      description: 'Moderne KI-Lösungen für Ihre Projekte.'
    },
    {
      icon: FileText,
      title: 'Print Design',
      description: 'Druckprodukte in Ihrem Branding.'
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
            White Label Services
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professionelle Entwicklung und Design unter Ihrem Branding.
            Von der Konzeption bis zur Umsetzung.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild>
              <a href="/kontakt">Jetzt Partnerschaft starten</a>
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
            <h2 className="text-3xl font-bold mb-6">Ihre Vorteile als Partner</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span>Professionelle Entwicklung unter Ihrem Branding</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span>Flexible Kapazitäten für Ihre Projekte</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span>Modernste Technologien und Best Practices</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span>Transparente Kommunikation und Projektmanagement</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span>Attraktive Partnerkonditionen</span>
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
            Bereit für eine starke Partnerschaft?
          </motion.h2>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            Lassen Sie uns gemeinsam Ihre Projekte zum Erfolg führen.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <Button asChild>
              <a href="/kontakt">Jetzt Gespräch vereinbaren</a>
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