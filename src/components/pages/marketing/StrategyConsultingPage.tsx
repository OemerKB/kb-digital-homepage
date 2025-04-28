import React from 'react';
import { Layout } from '@/components/Layout';
import { Brain, Target, LineChart, Users, Lightbulb, Compass, PieChart, Flag } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';
import { PainPointsSection } from '@/components/PainPointsSection';
import { PainSolutionSection } from '@/components/PainSolutionSection';

export function StrategyConsultingPage() {
  const { darkMode } = useTheme();
  
  const services = [
    {
      icon: Brain,
      title: 'Strategieentwicklung',
      description: 'Ganzheitliche Marketing Strategie.'
    },
    {
      icon: Target,
      title: 'Zielgruppenanalyse',
      description: 'Detaillierte Zielgruppendefinition.'
    },
    {
      icon: LineChart,
      title: 'Marktanalyse',
      description: 'Wettbewerbsanalyse & Positionierung.'
    },
    {
      icon: Users,
      title: 'Buyer Personas',
      description: 'Entwicklung von Buyer Personas.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Innovative Marketing Ansätze.'
    },
    {
      icon: Compass,
      title: 'Strategische Planung',
      description: 'Langfristige Marketingplanung.'
    },
    {
      icon: PieChart,
      title: 'Budget Planung',
      description: 'Effiziente Budgetallokation.'
    },
    {
      icon: Flag,
      title: 'Meilensteine',
      description: 'Definierte Marketing Ziele.'
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
            Marketing Strategy Consulting
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Strategische Marketing Beratung für nachhaltigen Erfolg.
            Von der Analyse bis zur Implementierung.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild>
              <a href="/kontakt">Strategieberatung vereinbaren</a>
            </Button>
          </motion.div>
        </div>

        <PainPointsSection darkMode={darkMode} />

        <PainSolutionSection
          darkMode={darkMode}
          solution={{
            title: "Strategische Marketing Beratung",
            description: "Wir entwickeln Ihre individuelle Marketing Strategie für langfristigen Erfolg."
          }}
          benefits={[
            {
              title: "Klare Positionierung",
              description: "Differenzierung im Wettbewerb."
            },
            {
              title: "Effiziente Ressourcennutzung",
              description: "Optimaler Mitteleinsatz."
            },
            {
              title: "Messbare Ziele",
              description: "Definierte KPIs & Tracking."
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

        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Bereit für Ihre Marketing Strategie?
          </motion.h2>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            Lassen Sie uns gemeinsam Ihren Weg zum Erfolg planen.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <Button asChild>
              <a href="/kontakt">Jetzt Strategieberatung vereinbaren</a>
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