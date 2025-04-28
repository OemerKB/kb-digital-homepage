'use client';

import React from 'react';
import { Layout } from '@/components/Layout';
import { BookOpen, Calendar, Video, Mail, Users, TrendingUp, Printer, FileText } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/Button';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';

export function CoachesPage() {
  const { darkMode } = useTheme();
  
  const services = [
    {
      icon: BookOpen,
      title: 'Coaching Website',
      description: 'Professionelle Website zur Präsentation Ihrer Coaching-Angebote.'
    },
    {
      icon: Calendar,
      title: 'Buchungssystem',
      description: 'Online-Terminbuchung für Coaching-Sessions und Workshops.'
    },
    {
      icon: Video,
      title: 'Online Coaching',
      description: 'Integration von Video-Calls und digitalen Coaching-Tools.'
    },
    {
      icon: Mail,
      title: 'E-Mail Marketing',
      description: 'Newsletter und Automation für Ihre Coaching-Programme.'
    },
    {
      icon: Users,
      title: 'Membership Bereich',
      description: 'Geschützter Bereich für Online-Kurse und Materialien.'
    },
    {
      icon: TrendingUp,
      title: 'Personal Branding',
      description: 'Aufbau Ihrer persönlichen Marke als Coach.'
    },
    {
      icon: Printer,
      title: 'Coaching Material',
      description: 'Professioneller Druck von Workbooks und Coachingmaterialien.'
    },
    {
      icon: FileText,
      title: 'Marketing Material',
      description: 'Flyer, Visitenkarten und Broschüren für Ihr Coaching.'
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
            Digital & Print für Coaches
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Präsentieren Sie Ihr Coaching-Business professionell - online und offline. 
            Von der Website bis zu hochwertigen Coaching-Materialien.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button href="/kontakt">
              Kostenloses Strategiegespräch buchen
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
                <span>Spezialisiert auf die Anforderungen von Coaches</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span>Integration aller wichtigen Coaching-Tools</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span>Professionelles Personal Branding</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span>Skalierbare Lösungen für Ihr Wachstum</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span>Hochwertige Druckprodukte für Ihr Coaching</span>
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
            Bereit, Ihr Coaching-Business auf das nächste Level zu bringen?
          </motion.h2>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            Lassen Sie uns gemeinsam Ihre digitale Präsenz optimieren und mehr Klienten gewinnen.
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