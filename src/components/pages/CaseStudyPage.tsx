import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { CaseStudy } from '@/components/CaseStudy';

export function CaseStudyPage() {
  const { slug } = useParams();

  // This would typically come from an API or database
  const caseStudies = {
    'alanya-restaurant': {
      title: 'Restaurant Website & App',
      client: 'Restaurant Alanya Eschenburg',
      industry: 'Gastronomie',
      services: ['Webdesign', 'Mobile App', 'Online Marketing'],
      overview: 'Entwicklung einer modernen Website mit Online-Reservierungssystem und nativer Restaurant-App für iOS und Android. Integration von Bestellsystem und Kundenbindungsprogramm.',
      challenges: [
        {
          title: 'Digitale Transformation',
          description: 'Das Restaurant benötigte eine komplette digitale Transformation seiner Prozesse.',
          solution: 'Implementation einer integrierten Lösung für Reservierungen, Bestellungen und Kundenbindung.'
        },
        {
          title: 'Benutzerfreundlichkeit',
          description: 'Die Lösung musste sowohl für Gäste als auch Mitarbeiter einfach zu bedienen sein.',
          solution: 'Entwicklung einer intuitiven Benutzeroberfläche mit klarer Navigation und einfachen Prozessen.'
        }
      ],
      results: [
        {
          metric: 'Online Reservierungen',
          value: '+156%',
          description: 'Steigerung der Reservierungen über digitale Kanäle'
        },
        {
          metric: 'Umsatz',
          value: '+43%',
          description: 'Umsatzsteigerung durch digitale Bestellungen'
        },
        {
          metric: 'Kundenbindung',
          value: '89%',
          description: 'Wiederkehrende Kunden durch App-Nutzung'
        }
      ],
      testimonial: {
        quote: 'Die neue Website und App haben unseren Service auf ein neues Level gehoben. Die Automatisierung spart uns viel Zeit und unsere Gäste lieben die einfache Bedienung.',
        author: 'Orhan Kus',
        role: 'Inhaber, Restaurant Alanya Eschenburg'
      },
      timeline: [
        {
          date: 'Januar 2024',
          title: 'Projektstart & Analyse',
          description: 'Analyse der Anforderungen und Entwicklung der Strategie'
        },
        {
          date: 'Februar 2024',
          title: 'Design & Entwicklung',
          description: 'Umsetzung der Website und App-Entwicklung'
        },
        {
          date: 'März 2024',
          title: 'Launch & Optimierung',
          description: 'Erfolgreicher Launch und kontinuierliche Optimierung'
        }
      ],
      images: [
        {
          url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
          alt: 'Restaurant Alanya Innenansicht',
          caption: 'Das moderne Ambiente des Restaurants wird durch die digitale Präsenz perfekt ergänzt'
        },
        {
          url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
          alt: 'Mobile App Screens',
          caption: 'Die native App ermöglicht einfache Reservierungen und Bestellungen'
        }
      ]
    },
    // Add other case studies here...
  };

  const caseStudy = caseStudies[slug as keyof typeof caseStudies];

  if (!caseStudy) {
    return (
      <Layout>
        <div className="container mx-auto px-4 pt-32 pb-20">
          <h1 className="text-2xl font-bold">Case Study nicht gefunden</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-20">
        <CaseStudy {...caseStudy} />
      </div>
    </Layout>
  );
}