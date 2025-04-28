import React from 'react';
import { Layout } from '@/components/Layout';
import { Users, Code, Palette, Globe, Bot, FileText, Zap, Shield, Clock, DollarSign } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';
import { PainPointsSection } from '@/components/PainPointsSection';
import { PainSolutionSection } from '@/components/PainSolutionSection';

export function AgenturenPage() {
  const { darkMode } = useTheme();
  
  const services = [
    {
      icon: Code,
      title: 'White Label Entwicklung',
      description: 'Professionelle Entwicklung unter Ihrem Branding.'
    },
    {
      icon: Palette,
      title: 'Design Services',
      description: 'UI/UX Design nach Ihren Vorgaben.'
    },
    {
      icon: Globe,
      title: 'Webentwicklung',
      description: 'Von Websites bis komplexe Webanwendungen.'
    },
    {
      icon: Bot,
      title: 'KI Integration',
      description: 'Moderne KI-Lösungen für Ihre Kunden.'
    },
    {
      icon: FileText,
      title: 'Print Design',
      description: 'Hochwertiges Print Design.'
    },
    {
      icon: Zap,
      title: 'Express Service',
      description: 'Schnelle Umsetzung bei Engpässen.'
    },
    {
      icon: Users,
      title: 'Team Extension',
      description: 'Flexible Erweiterung Ihres Teams.'
    },
    {
      icon: Shield,
      title: 'Qualitätssicherung',
      description: 'Professionelles Testing.'
    }
  ];

  const painPoints = [
    {
      icon: Users,
      title: "Ressourcenengpässe?",
      description: "Interne Teams sind oft überlastet und Projekte verzögern sich. Wir springen flexibel ein! 🚀"
    },
    {
      icon: Code,
      title: "Technische Herausforderungen?",
      description: "Spezielle Entwicklungsanforderungen überfordern das Team? Unser Expertenteam unterstützt Sie! 💪"
    },
    {
      icon: Clock,
      title: "Termindruck?",
      description: "Zu viele Projekte, zu wenig Zeit? Wir liefern zuverlässig und termingerecht! ⏰"
    },
    {
      icon: DollarSign,
      title: "Kostenintensive Festanstellungen?",
      description: "Entwickler-Gehälter sprengen das Budget? Nutzen Sie unsere flexiblen Kapazitäten! 💰"
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
            White Label für Agenturen
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professionelle Entwicklung und Design unter Ihrem Branding.
            Flexibel, zuverlässig und qualitativ hochwertig.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild>
              <a href="/kontakt">Jetzt Partnerschaft starten</a>
            </Button>
          </motion.div>
        </div>

        <PainPointsSection 
          title="Kennen Sie diese Herausforderungen?"
          subtitle="Inhouse vs. White Label Development"
          painPoints={painPoints}
        />

        <PainSolutionSection
          solution={{
            title: "Ihr verlässlicher White Label Partner",
            description: "Wir unterstützen Sie bei der Umsetzung Ihrer Kundenprojekte - professionell, termingerecht und unter Ihrem Branding."
          }}
          benefits={[
            {
              title: "Flexible Skalierung",
              description: "Nutzen Sie unsere Ressourcen nach Bedarf, ohne Fixkosten."
            },
            {
              title: "Technische Expertise",
              description: "Zugriff auf unser erfahrenes Entwicklerteam."
            },
            {
              title: "Kostenkontrolle",
              description: "Transparente Preise und planbare Kosten."
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
              <ServiceCard {...service} />
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
            Bereit für eine starke Partnerschaft?
          </motion.h2>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            Lassen Sie uns gemeinsam Ihre Projekte zum Erfolg führen.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <Button asChild>
              <a href="/kontakt">Jetzt Gespräch vereinbaren</a>
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