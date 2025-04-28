'use client';

import React from 'react';
import { Layout } from '@/components/Layout';
import { Sparkles, Calendar, Instagram, ShoppingBag, Mail, TrendingUp, Printer, FileText } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/Button';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';

export function KosmetikPage() {
  const { darkMode } = useTheme();
  
  const services = [
    {
      icon: Sparkles,
      title: 'Beauty Website',
      description: 'Elegante Webseite, die Ihre Dienstleistungen perfekt präsentiert.'
    },
    {
      icon: Calendar,
      title: 'Online Buchungssystem',
      description: '24/7 Terminbuchung für Ihre Kunden mit automatischer Bestätigung.'
    },
    {
      icon: Instagram,
      title: 'Social Media',
      description: 'Professionelle Präsenz auf Instagram und anderen Plattformen.'
    },
    {
      icon: ShoppingBag,
      title: 'Online Shop',
      description: 'Verkaufen Sie Ihre Produkte rund um die Uhr online.'
    },
    {
      icon: Mail,
      title: 'Newsletter Marketing',
      description: 'Bleiben Sie mit Ihren Kunden in Kontakt und informieren Sie über Angebote.'
    },
    {
      icon: TrendingUp,
      title: 'Beauty Marketing',
      description: 'Gezielte Werbekampagnen für mehr Neukunden.'
    },
    {
      icon: Printer,
      title: 'Geschäftsausstattung',
      description: 'Hochwertiger Druck von Visitenkarten, Gutscheinen und Terminkarten.'
    },
    {
      icon: FileText,
      title: 'Marketingmaterialien',
      description: 'Flyer, Preislisten und Poster für Ihr Studio.'
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
            Digital & Print für Kosmetik & Beauty
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Präsentieren Sie Ihr Kosmetikstudio professionell - online und offline. 
            Von der Website bis zu hochwertigen Printprodukten.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button href="/kontakt">
              Jetzt unverbindlich beraten lassen
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
            <h2 className="text-3xl font-bold mb-6">Warum KB Digital?</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span>Spezialisiert auf die Beauty- und Kosmetikbranche</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span>Moderne Designs, die Ihre Zielgruppe ansprechen</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span>Integration aller wichtigen Marketing-Tools</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span>Persönliche Betreuung und schneller Support</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span>Hochwertige Druckprodukte für Ihr Marketing</span>
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
            Bereit für Ihren digitalen Erfolg?
          </motion.h2>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            Lassen Sie uns gemeinsam Ihre Beauty-Marke zum Strahlen bringen.
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