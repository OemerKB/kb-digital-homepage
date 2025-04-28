'use client';

import React from 'react';
import { Layout } from '@/components/Layout';
import { Utensils, Globe, Camera, MessageSquare, Users, TrendingUp, Printer, FileText, Smartphone, QrCode, Bell, BarChart } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/Button';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';

export function GastronomiePage() {
  const { darkMode } = useTheme();
  
  const services = [
    {
      icon: Globe,
      title: 'Responsive Website',
      description: 'Mobile-optimierte Webseiten, die Ihr Restaurant perfekt auf allen Geräten präsentieren.'
    },
    {
      icon: Smartphone,
      title: 'Restaurant App',
      description: 'Native App für iOS und Android mit Bestellsystem und Kundenbindungsprogramm.'
    },
    {
      icon: Utensils,
      title: 'Digitale Speisekarte',
      description: 'Interaktive Speisekarten mit Allergenen und Zusatzstoffinformationen.'
    },
    {
      icon: QrCode,
      title: 'QR-Code Bestellung',
      description: 'Digitale Bestellung direkt am Tisch via QR-Code und Smartphone.'
    },
    {
      icon: Bell,
      title: 'Push Nachrichten',
      description: 'Informieren Sie Ihre Kunden über Angebote und Events per App-Benachrichtigung.'
    },
    {
      icon: Camera,
      title: 'Professionelle Fotos',
      description: 'Hochwertige Food-Fotografie, die Ihre Gerichte appetitlich in Szene setzt.'
    },
    {
      icon: MessageSquare,
      title: 'Online Reservierung',
      description: 'Einfaches Buchungssystem für Tischreservierungen rund um die Uhr.'
    },
    {
      icon: Users,
      title: 'Social Media',
      description: 'Aktive Präsenz auf Instagram & Co. mit professioneller Content-Erstellung.'
    },
    {
      icon: TrendingUp,
      title: 'Local SEO',
      description: 'Optimierung für lokale Suchanfragen und Google Maps Präsenz.'
    },
    {
      icon: BarChart,
      title: 'Analytics & Reports',
      description: 'Detaillierte Auswertungen über Bestellungen, Umsatz und Kundenverhalten.'
    },
    {
      icon: Printer,
      title: 'Speisekarten-Design',
      description: 'Professionelles Design und Druck Ihrer Speisekarten und Getränkekarten.'
    },
    {
      icon: FileText,
      title: 'Print Marketing',
      description: 'Flyer, Visitenkarten und Werbematerialien für Ihr Restaurant.'
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
            Digital & Print für die Gastronomie
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Präsentieren Sie Ihr Restaurant im besten Licht - online, mobil und offline. 
            Von der Website bis zur eigenen Restaurant-App.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button href="/kontakt">
              Jetzt Beratungsgespräch vereinbaren
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
                <span>Über 20 erfolgreiche Projekte in der Gastronomie</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span>Spezialisiert auf die besonderen Anforderungen von Restaurants</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span>Native Apps für iOS und Android mit Bestellsystem</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span>Persönliche Betreuung und schneller Support</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span>Faire Preise und transparente Kommunikation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span>Alles aus einer Hand: Digital, Mobile & Print</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* App Features Section */}
        <motion.div 
          className={cn(
            "rounded-2xl p-8 md:p-12 mb-20",
            darkMode ? 'bg-gray-800/50' : 'bg-gray-50'
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Restaurant App Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Für Ihre Gäste</h3>
                <ul className="space-y-2 opacity-80">
                  <li>• Digitale Speisekarte</li>
                  <li>• Online Bestellung</li>
                  <li>• Tischreservierung</li>
                  <li>• Push-Benachrichtigungen</li>
                  <li>• Kundenkonto</li>
                  <li>• Bonusprogramm</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Für Sie</h3>
                <ul className="space-y-2 opacity-80">
                  <li>• Bestellmanagement</li>
                  <li>• Kundenanalyse</li>
                  <li>• Marketing-Tools</li>
                  <li>• Umsatzstatistiken</li>
                  <li>• Kundenbindung</li>
                  <li>• Support & Updates</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            Bereit für die digitale Transformation?
          </motion.h2>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            Lassen Sie uns gemeinsam Ihr Restaurant in die digitale Zukunft führen.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
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