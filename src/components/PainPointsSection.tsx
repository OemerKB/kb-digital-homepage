import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Users, Target, ShoppingCart } from 'lucide-react';
import { cn } from '../utils/cn';
import { useTheme } from '@/hooks/useTheme';
import { Illustration } from './Illustration';

interface PainPoint {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
}

interface PainPointsSectionProps {
  title?: string;
  subtitle?: string;
  painPoints?: PainPoint[];
}

const defaultPainPoints: PainPoint[] = [
  {
    icon: TrendingDown,
    title: "Traffic ist nicht das Problem...",
    description: "...sondern die fehlende Conversion Ihrer Besucher zu echten Leads. Wir verwandeln Klicks in Kunden! 🎯",
    gradient: "from-red-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Untergehen im Wettbewerb?",
    description: "In einem Meer von Mitbewerbern ist es schwer aufzufallen. Wir machen Ihre Marke unverwechselbar! ⭐️",
    gradient: "from-purple-500 to-blue-500"
  },
  {
    icon: Target,
    title: "Leads bleiben aus?",
    description: "Webseitenbesucher in Leads verwandeln ist eine Kunst. Wir kennen die Erfolgsformel! 🎨",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: ShoppingCart,
    title: "Conversion-Probleme?",
    description: "Klicks sind erst der Anfang. Wir machen aus Besuchern treue Kunden! 🚀",
    gradient: "from-emerald-500 to-teal-500"
  }
];

export function PainPointsSection({ 
  title = "Kennen Sie diese Herausforderungen? 🤔",
  subtitle = "Wir lösen die häufigsten Probleme unserer Kunden.",
  painPoints = defaultPainPoints 
}: PainPointsSectionProps) {
  const { darkMode } = useTheme();

  return (
    <section className="py-20 relative overflow-hidden bg-gray-50">
      {/* Decorative illustrations */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <Illustration 
          name="messy" 
          className="absolute -left-16 top-0 opacity-10 rotate-12"
          size="lg"
        />
        <Illustration 
          name="thinking" 
          className="absolute -right-16 bottom-0 opacity-10 -rotate-12"
          size="lg"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">{title}</h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl p-8 glass-card hover-card magical-border"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="relative z-10">
                <point.icon className={`w-12 h-12 mb-6 gradient-text`} />
                <h3 className="text-2xl font-bold mb-4">{point.title}</h3>
                <p className="leading-relaxed text-gray-600">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}