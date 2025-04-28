'use client';

import React from 'react';
import { Layout } from '@/components/Layout';
import { LineChart, Shield, Users, Presentation, BookOpen, Globe, Printer, FileText } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/Button';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';

export function ConsultingPage() {
  const { darkMode } = useTheme();
  
  const services = [
    {
      icon: Globe,
      title: 'Corporate Website',
      description: 'Professionelle Webseite mit modernem Design und klarer Struktur.'
    },
    {
      icon: Shield,
      title: 'Datensicherheit',
      description: 'Sichere Systeme für sensible Kundendaten und Dokumente.'
    },
    {
      icon: Users,
      title: 'Client Portal',
      description: 'Geschützter Bereich für Ihre Kunden mit individuellen Zugängen.'
    },
    {
      icon: LineChart,
      title: 'Analytics Dashboard',
      description: 'Übersichtliche Darstellung wichtiger KPIs und Statistiken.'
    },
    {
      icon: Presentation,
      title: 'Content Marketing',
      description: 'Professionelle Präsentation Ihrer Expertise durch Fachbeiträge.'
    },
    {
      icon: BookOpen,
      title: 'Whitepaper System',
      description: 'Digitale Distribution Ihrer Fachpublikationen und Studien.'
    },
    {
      icon: Printer,
      title: 'Corporate Design',
      description: 'Hochwertiger Druck Ihrer Geschäftsausstattung und Präsentationsmappen.'
    },
    {
      icon: FileText,
      title: 'Publikationen',
      description: 'Professioneller Druck von Whitepapers, Studien und Berichten.'
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
            Digital & Print für Consulting
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Präsentieren Sie Ihre Expertise professionell - online und offline. 
            Von der Website bis zu hochwertigen Publikationen.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button href="/kontakt">
              Strategiegespräch vereinbaren
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
              <ServiceCard {...service} />
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
                <span>Verständnis für die besonderen Anforderungen der Beratungsbranche</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span>Höchste Standards bei Datenschutz und Sicherheit</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span>Integration von CRM und Marketing-Automation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span>Skalierbare Lösungen für Ihr Wachstum</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span>Hochwertige Druckprodukte für Ihre Außendarstellung</span>
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