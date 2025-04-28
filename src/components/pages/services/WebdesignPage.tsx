import React from 'react';
import { PageLayout } from '@/components/ui/page-layout';
import { PageHeader } from '@/components/ui/page-header';
import { ServiceGrid } from '@/components/ui/service-grid';
import { ProcessSection } from '@/components/ui/process-section';
import { CTASection } from '@/components/ui/cta-section';
import { Palette, Globe, Zap, LineChart, Search, Code, Sparkles, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Nutzerfreundliche und ästhetische Interfaces.'
  },
  {
    icon: Globe,
    title: 'Responsive Design',
    description: 'Perfekt auf allen Endgeräten.'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Schnelle Ladezeiten und optimale UX.'
  },
  {
    icon: LineChart,
    title: 'Conversion',
    description: 'Design, das zu Handlungen motiviert.'
  },
  {
    icon: Search,
    title: 'SEO Optimierung',
    description: 'Besseres Ranking durch gutes Design.'
  },
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Sauberer, wartbarer Code.'
  },
  {
    icon: Sparkles,
    title: 'Animations',
    description: 'Subtile Animationen für mehr Leben.'
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Optimiert für mobile Nutzung.'
  }
];

const processSteps = [
  { title: 'Analyse Ihrer Zielgruppe und Anforderungen' },
  { title: 'Entwicklung von Wireframes' },
  { title: 'Design-Konzeption und Mockups' },
  { title: 'Prototyping und User Testing' },
  { title: 'Finalisierung und Implementierung' }
];

const technologies = [
  {
    name: 'Webflow',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Webflow_logo.svg',
    description: 'Visuelles Web Development'
  },
  {
    name: 'Figma',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    description: 'UI/UX Design & Prototyping'
  },
  {
    name: 'Framer',
    logo: 'https://www.framer.com/images/social/framer.png',
    description: 'Interaktive Prototypen'
  },
  {
    name: 'WordPress',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg',
    description: 'CMS & Blogging'
  },
  {
    name: 'Elementor',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Elementor_logo.svg',
    description: 'WordPress Page Builder'
  },
  {
    name: 'React',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    description: 'Frontend Development'
  },
  {
    name: 'HTML5',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    description: 'Markup Language'
  },
  {
    name: 'CSS3',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    description: 'Styling & Animations'
  }
];

export function WebdesignPage() {
  const { darkMode } = useTheme();

  return (
    <PageLayout>
      <PageHeader
        title="Professionelles Webdesign"
        description="Wir gestalten digitale Erlebnisse, die begeistern und überzeugen. Von der ersten Skizze bis zum fertigen Design."
        ctaText="Design-Beratung vereinbaren"
      />

      <ServiceGrid services={services} />

      {/* Technologies Grid */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Unsere Tools & Technologien</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className={cn(
                "p-6 rounded-xl text-center",
                darkMode ? 'bg-gray-800/50' : 'bg-gray-50'
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="h-12 w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="font-semibold mb-2">{tech.name}</h3>
              <p className="text-sm opacity-70">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <ProcessSection
        title="Unser Design-Prozess"
        steps={processSteps}
      />

      <CTASection
        title="Bereit für Ihr neues Webdesign?"
        description="Lassen Sie uns gemeinsam Ihre digitale Vision gestalten."
        primaryCTA={{
          text: "Jetzt Beratungsgespräch vereinbaren",
          href: "/kontakt"
        }}
        secondaryCTA={{
          text: "Referenzen ansehen",
          href: "/referenzen"
        }}
      />
    </PageLayout>
  );
}