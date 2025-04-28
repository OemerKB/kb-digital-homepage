import React from 'react';
import { Layout } from '@/components/Layout';
import { Palette, Brush, Image as ImageIcon, Type, Layout as LayoutIcon, FileText, Shapes, Sparkles } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';

export function CorporateDesignPage() {
  const { darkMode } = useTheme();
  
  const services = [
    {
      icon: Palette,
      title: 'Logo Design',
      description: 'Einzigartiges Logo und Markenzeichen.'
    },
    {
      icon: Type,
      title: 'Typography',
      description: 'Passende Schriftarten und Hierarchie.'
    },
    {
      icon: Brush,
      title: 'Farbkonzept',
      description: 'Harmonische Farbpalette für Ihre Marke.'
    },
    {
      icon: LayoutIcon,
      title: 'Layout System',
      description: 'Konsistentes Gestaltungsraster.'
    },
    {
      icon: ImageIcon,
      title: 'Bildsprache',
      description: 'Einheitlicher visueller Stil.'
    },
    {
      icon: FileText,
      title: 'Geschäftsausstattung',
      description: 'Visitenkarten, Briefpapier etc.'
    },
    {
      icon: Shapes,
      title: 'Icons & Grafiken',
      description: 'Custom Icons und Illustrationen.'
    },
    {
      icon: Sparkles,
      title: 'Brand Guidelines',
      description: 'Umfassendes Markenhandbuch.'
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
            Corporate Design
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Entwicklung einer einzigartigen und professionellen Markenidentität.
            Von der Konzeption bis zur Umsetzung.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild>
              <a href="/kontakt">Design-Beratung vereinbaren</a>
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
            <h2 className="text-3xl font-bold mb-6">Unser Design-Prozess</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-2xl">1.</span>
                <span>Analyse Ihrer Marke und Zielgruppe</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">2.</span>
                <span>Entwicklung des visuellen Konzepts</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">3.</span>
                <span>Design der Kernelemente</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">4.</span>
                <span>Ausarbeitung aller Anwendungen</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">5.</span>
                <span>Erstellung des Markenhandbuchs</span>
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
            Bereit für Ihre neue Markenidentität?
          </motion.h2>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            Lassen Sie uns gemeinsam Ihre Marke zum Leben erwecken.
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