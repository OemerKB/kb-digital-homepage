import React from 'react';
import { Layout } from '@/components/Layout';
import { Building2, Calendar, Image as ImageIcon, Mail, Phone, Search, Printer, FileText } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/Button';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';

export function HandwerkBauPage() {
  const { darkMode } = useTheme();
  
  const services = [
    {
      icon: Building2,
      title: 'Professionelle Website',
      description: 'Moderne Webseite mit Referenzgalerie und Leistungsübersicht.'
    },
    {
      icon: Calendar,
      title: 'Online Terminbuchung',
      description: 'Digitales Buchungssystem für Beratungstermine und Aufmaße.'
    },
    {
      icon: ImageIcon,
      title: 'Projektverwaltung',
      description: 'Digitale Dokumentation und Verwaltung Ihrer Bauprojekte.'
    },
    {
      icon: Mail,
      title: 'Anfrageformulare',
      description: 'Optimierte Kontaktformulare für qualifizierte Anfragen.'
    },
    {
      icon: Phone,
      title: 'Click-to-Call',
      description: 'Direkte Telefonverbindung mit einem Klick auf der Website.'
    },
    {
      icon: Search,
      title: 'SEO Optimierung',
      description: 'Bessere Sichtbarkeit in der lokalen Google-Suche.'
    },
    {
      icon: Printer,
      title: 'Geschäftsausstattung',
      description: 'Professioneller Druck von Briefpapier, Rechnungen und Formularen.'
    },
    {
      icon: FileText,
      title: 'Werbemedien',
      description: 'Flyer, Broschüren und Baustellenschilder für Ihr Marketing.'
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
            Digital & Print für Handwerk & Bau
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Präsentieren Sie Ihr Handwerksunternehmen professionell - online und offline. 
            Von der Website bis zur Geschäftsausstattung.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button href="/kontakt">
              Kostenlose Erstberatung vereinbaren
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
            <h2 className="text-3xl font-bold mb-6">Ihre Vorteile mit KB Digital</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span>Langjährige Erfahrung mit Handwerks- und Bauunternehmen</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span>Maßgeschneiderte Lösungen für Ihre spezifischen Anforderungen</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span>Optimierung für mobile Geräte und lokale Suche</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span>Persönlicher Ansprechpartner und schneller Support</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span>Komplettservice: Digital, Print und Marketing</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Bereit für Ihren digitalen Erfolg?
          </motion.h2>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            Lassen Sie uns gemeinsam Ihre digitale Präsenz optimieren.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <Button href="/kontakt">
              Jetzt Beratungsgespräch vereinbaren
            </Button>
            <Button href="/referenzen" variant="secondary">
              Referenzen ansehen
            </Button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}