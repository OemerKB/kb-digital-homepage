import React from 'react';
import { Layout } from '@/components/Layout';
import { ShoppingBag, Truck, CreditCard, BarChart, Mail, Search, Globe, Shield } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';

export function ECommercePage() {
  const { darkMode } = useTheme();
  
  const services = [
    {
      icon: ShoppingBag,
      title: 'Shop-System',
      description: 'Professionelle Online-Shops mit Shopify oder WooCommerce.'
    },
    {
      icon: CreditCard,
      title: 'Payment',
      description: 'Integration aller gängigen Zahlungsmethoden.'
    },
    {
      icon: Truck,
      title: 'Logistik',
      description: 'Anbindung an Versanddienstleister und Lagerverwaltung.'
    },
    {
      icon: BarChart,
      title: 'Analytics',
      description: 'Detaillierte Auswertungen und Verkaufsstatistiken.'
    },
    {
      icon: Mail,
      title: 'Marketing',
      description: 'E-Mail Marketing und Automatisierung.'
    },
    {
      icon: Search,
      title: 'SEO',
      description: 'Shop-Optimierung für Suchmaschinen.'
    },
    {
      icon: Globe,
      title: 'Multi-Channel',
      description: 'Verkauf über verschiedene Plattformen.'
    },
    {
      icon: Shield,
      title: 'Sicherheit',
      description: 'SSL-Verschlüsselung und sichere Transaktionen.'
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
            E-Commerce & Online Shops
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Verkaufen Sie Ihre Produkte erfolgreich online - mit einem professionellen Webshop 
            und durchdachter Marketing-Strategie.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild>
              <a href="/kontakt">Kostenlose Shop-Beratung</a>
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
            <h2 className="text-3xl font-bold mb-6">Unser Shop-Entwicklungsprozess</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-2xl">1.</span>
                <span>Analyse Ihrer Produkte und Zielgruppe</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">2.</span>
                <span>Auswahl des passenden Shop-Systems</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">3.</span>
                <span>Design und Produktpräsentation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">4.</span>
                <span>Payment und Logistik-Integration</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">5.</span>
                <span>Marketing-Automation Setup</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">6.</span>
                <span>Testing und Optimierung</span>
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
            Bereit für Ihren erfolgreichen Online-Shop?
          </motion.h2>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            Lassen Sie uns gemeinsam Ihre E-Commerce Vision verwirklichen.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <Button asChild>
              <a href="/kontakt">Jetzt Shop-Beratung vereinbaren</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/referenzen">Shop-Referenzen ansehen</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}