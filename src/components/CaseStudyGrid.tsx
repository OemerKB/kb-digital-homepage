import React from 'react';
import { motion } from 'framer-motion';
import { CaseStudyCard } from './CaseStudyCard';
import { cn } from '@/utils/cn';

interface CaseStudyGridProps {
  filter?: string;
  className?: string;
}

export function CaseStudyGrid({ filter, className }: CaseStudyGridProps) {
  const caseStudies = [
    {
      slug: 'alanya-restaurant',
      title: 'Restaurant Website & App',
      client: 'Restaurant Alanya Eschenburg',
      description: 'Moderne Website mit Online-Reservierung und nativer Restaurant-App für iOS und Android.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      services: ['Webdesign', 'Mobile App', 'Online Marketing'],
      metrics: {
        reservations: '+156%',
        revenue: '+43%',
        retention: '89%'
      }
    },
    {
      slug: 'butrin-etiketten',
      title: 'E-Commerce Platform',
      client: 'Butrin Etiketten',
      description: 'B2B E-Commerce Plattform für individuelle Etikettenlösungen mit automatisierter Preiskalkulation.',
      image: 'https://images.unsplash.com/photo-1585559604830-91802a8f05f2?auto=format&fit=crop&w=800&q=80',
      services: ['E-Commerce', 'UI/UX Design', 'Backend Development'],
      metrics: {
        conversion: '+83%',
        efficiency: '+65%',
        satisfaction: '94%'
      }
    },
    {
      slug: 'kutan-galabau',
      title: 'Corporate Website',
      client: 'Kutan GalaBau',
      description: 'Professionelle Unternehmenswebsite mit integriertem Projektmanagement-System.',
      image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=800&q=80',
      services: ['Corporate Design', 'Web Development', 'CMS'],
      metrics: {
        leads: '+124%',
        engagement: '+76%',
        projects: '+45%'
      }
    }
  ];

  const filteredCaseStudies = filter
    ? caseStudies.filter(study => study.services.includes(filter))
    : caseStudies;

  return (
    <div className={cn("grid md:grid-cols-2 gap-8", className)}>
      {filteredCaseStudies.map((study, index) => (
        <motion.div
          key={study.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <CaseStudyCard {...study} />
        </motion.div>
      ))}
    </div>
  );
}