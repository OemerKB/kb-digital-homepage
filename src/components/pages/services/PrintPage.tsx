import React from 'react';
import { Layout } from '@/components/Layout';
import { Printer, FileText, Image as ImageIcon, Palette, Package, Bookmark, Newspaper, Book } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';

export function PrintPage() {
  const { darkMode } = useTheme();
  
  const services = [
    {
      icon: FileText,
      title: 'Geschäftsausstattung',
      description: 'Visitenkarten, Briefpapier etc.'
    },
    {
      icon: Printer,
      title: 'Werbemittel',
      description: 'Flyer, Broschüren, Plakate.'
    },
    {
      icon: ImageIcon,
      title: 'Großformatdruck',
      description: 'Banner, Schilder, Displays.'
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Professionelles Grafikdesign.'
    },
    {
      icon: Package,
      title: 'Verpackungen',
      description: 'Produktverpackungen und Labels.'
    },
    {
      icon: Bookmark,
      title: 'Kataloge',
      description: 'Produkt- und Imagekataloge.'
    },
    {
      icon: Newspaper,
      title: 'Magazine',
      description: 'Kundenmagazine und Newsletter.'
    },
    {
      icon: Book,
      title: 'Bücher',
      description: 'Hochwertige Buchproduktion.'
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
            Print & Design
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hochwertige Druckprodukte für Ihr Unternehmen.
            Von der Visitenkarte bis zum Katalog.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild>
              <a href="/kontakt">Print-Beratung vereinbaren</a>
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
            <h2 className="text-3xl font-bold mb-6">Unser Print-Prozess</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-2xl">1.</span>
                <span>Beratung und Konzeption</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">2.</span>
                <span>Design und Layout</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">3.</span>
                <span>Proof und Freigabe</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">4.</span>
                <span>Professioneller Druck</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">5.</span>
                <span>Qualitätskontrolle und Versand</span>
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
            Bereit für hochwertige Druckprodukte?
          </motion.h2>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            Lassen Sie uns gemeinsam Ihre Print-Projekte realisieren.
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
              <a href="/referenzen">Print-Referenzen ansehen</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}