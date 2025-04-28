import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/ui/animated-hero';
import { ReviewsSection } from './components/ReviewsSection';
import { ReferencesSection } from './components/ReferencesSection';
import { AboutSection } from './components/AboutSection';
import { BlogSection } from './components/BlogSection';
import { PainPointsSection } from './components/PainPointsSection';
import { PainSolutionSection } from './components/PainSolutionSection';
import { BentoGrid } from './components/BentoGrid';
import { Link } from 'react-router-dom';
import { Code, Palette, Globe, Smartphone, Bot, FileText, Building2, Store, Sparkles, Scissors, Briefcase, GraduationCap, ShoppingBag, Truck, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';

interface AppProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function App({ darkMode, setDarkMode }: AppProps) {
  return (
    <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
      <Hero />
      <PainPointsSection />
      <PainSolutionSection
        solution={{
          title: "Digitale Exzellenz ✨",
          description: "Wir verwandeln Ihre digitale Präsenz in ein Erlebnis, das begeistert und konvertiert."
        }}
        benefits={[
          {
            title: "Conversion-Optimierung",
            description: "Websites, die Besucher in Kunden verwandeln."
          },
          {
            title: "Unique Branding",
            description: "Unverwechselbare Markenidentität, die im Gedächtnis bleibt."
          },
          {
            title: "Technische Perfektion",
            description: "Modernste Technologien für optimale Performance."
          }
        ]}
      />
      <AboutSection />
      <ReviewsSection />
      <ReferencesSection />
      <BlogSection />
    </Layout>
  );
}