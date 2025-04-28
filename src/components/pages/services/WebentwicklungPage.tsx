import React from 'react';
import { Layout } from '@/components/Layout';
import { Code, Zap, Shield, Database, Cloud, GitBranch, Terminal, Settings } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';

export function WebentwicklungPage() {
  const { darkMode } = useTheme();
  
  const services = [
    {
      icon: Code,
      title: 'Frontend',
      description: 'Moderne Webanwendungen mit React und TypeScript.'
    },
    {
      icon: Database,
      title: 'Backend',
      description: 'Skalierbare Server mit Node.js und Express.'
    },
    {
      icon: Cloud,
      title: 'Cloud',
      description: 'Hosting und Deployment in der Cloud.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Sichere Anwendungen nach Best Practices.'
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Professionelles Code Management.'
    },
    {
      icon: Terminal,
      title: 'CI/CD',
      description: 'Automatisierte Deployment Pipelines.'
    },
    {
      icon: Settings,
      title: 'APIs',
      description: 'RESTful und GraphQL APIs.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimierung für beste Performance.'
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
            Professionelle Webentwicklung
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Wir entwickeln skalierbare und moderne Webanwendungen mit den neuesten Technologien.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild>
              <a href="/kontakt">Entwicklungs-Beratung vereinbaren</a>
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
            <h2 className="text-3xl font-bold mb-6">Unser Entwicklungsprozess</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-2xl">1.</span>
                <span>Anforderungsanalyse und Technologieauswahl</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">2.</span>
                <span>Architektur und Systemdesign</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">3.</span>
                <span>Agile Entwicklung mit regelmäßigen Updates</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">4.</span>
                <span>Continuous Integration und Testing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">5.</span>
                <span>Deployment und Monitoring</span>
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
            Bereit für Ihr Entwicklungsprojekt?
          </motion.h2>
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            Lassen Sie uns gemeinsam Ihre technische Vision umsetzen.
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
              <a href="/referenzen">Referenzen ansehen</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}