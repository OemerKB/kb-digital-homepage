import React from 'react';
import { Layout } from '@/components/Layout';
import { ShoppingBag, CreditCard, Truck, BarChart, Mail, Search, Globe, Shield } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';
import { PainPointsSection } from '@/components/PainPointsSection';
import { PainSolutionSection } from '@/components/PainSolutionSection';

export function OnlineShopPage() {
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

  const shopSystems = [
    {
      name: 'Shopify',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg',
      features: [
        "Hosted Lösung - keine Server-Administration",
        "Schnelle Einrichtung und Launch",
        "Integriertes Payment-System",
        "Mobile-optimiert",
        "24/7 Support",
        "App Store mit Erweiterungen"
      ]
    },
    {
      name: 'WooCommerce',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/WooCommerce_logo.svg',
      features: [
        "Volle Kontrolle über den Shop",
        "Unbegrenzte Anpassungsmöglichkeiten",
        "Keine monatlichen Gebühren",
        "Open Source",
        "Große Community",
        "WordPress Integration"
      ]
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

        <PainPointsSection darkMode={darkMode} />

        <PainSolutionSection
          darkMode={darkMode}
          solution={{
            title: "Professionelle E-Commerce Lösungen",
            description: "Wir entwickeln maßgeschneiderte Online-Shops, die Ihre Produkte optimal präsentieren und Ihre Verkäufe steigern."
          }}
          benefits={[
            {
              title: "Conversion-Optimiert",
              description: "Shops, die Besucher in Käufer verwandeln."
            },
            {
              title: "Skalierbar",
              description: "Wachsen Sie ohne technische Limitierungen."
            },
            {
              title: "Sicher & Zuverlässig",
              description: "Sichere Zahlungsabwicklung und stabile Systeme."
            }
          ]}
        />

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

        {/* Shop Systems Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {shopSystems.map((system, index) => (
            <motion.div 
              key={system.name}
              className={cn(
                "rounded-2xl p-8",
                darkMode ? 'bg-gray-800/50' : 'bg-gray-50'
              )}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="h-16 flex items-center justify-center mb-6">
                <img
                  src={system.logo}
                  alt={`${system.name} logo`}
                  className="h-12 w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <ul className="space-y-3">
                {system.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

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