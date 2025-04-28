import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, CheckCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { Image } from './Image';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';

interface Milestone {
  date: string;
  title: string;
  description: string;
}

interface Result {
  metric: string;
  value: string;
  description: string;
}

interface Challenge {
  title: string;
  description: string;
  solution: string;
}

interface CaseStudyProps {
  title: string;
  client: string;
  industry: string;
  services: string[];
  overview: string;
  challenges: Challenge[];
  results: Result[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  timeline: Milestone[];
  images: Array<{
    url: string;
    alt: string;
    caption?: string;
  }>;
}

export function CaseStudy({
  title,
  client,
  industry,
  services,
  overview,
  challenges,
  results,
  testimonial,
  timeline,
  images
}: CaseStudyProps) {
  const { darkMode } = useTheme();

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-16">
        <Link 
          to="/referenzen" 
          className="inline-flex items-center gap-2 text-sm mb-8 hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" /> Zurück zu Referenzen
        </Link>
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {title}
        </motion.h1>
        <div className="flex flex-wrap gap-4 mb-8">
          <span className={cn(
            "px-3 py-1 rounded-full text-sm",
            darkMode ? 'bg-gray-800' : 'bg-gray-100'
          )}>{client}</span>
          <span className={cn(
            "px-3 py-1 rounded-full text-sm",
            darkMode ? 'bg-gray-800' : 'bg-gray-100'
          )}>{industry}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {services.map((service) => (
            <span 
              key={service}
              className={cn(
                "px-3 py-1 rounded-full text-sm",
                darkMode ? 'bg-gray-800' : 'bg-gray-100'
              )}
            >
              {service}
            </span>
          ))}
        </div>
      </header>

      {/* Overview */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Überblick 🎯</h2>
        <p className="text-lg leading-relaxed">{overview}</p>
      </section>

      {/* Hero Image */}
      {images[0] && (
        <div className="mb-16 rounded-xl overflow-hidden">
          <Image 
            src={images[0].url} 
            alt={images[0].alt} 
            className="w-full aspect-video object-cover"
          />
          {images[0].caption && (
            <p className="text-sm mt-2 opacity-70">{images[0].caption}</p>
          )}
        </div>
      )}

      {/* Challenges & Solutions */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Herausforderungen & Lösungen 💡</h2>
        <div className="space-y-8">
          {challenges.map((challenge, index) => (
            <motion.div 
              key={index}
              className={cn(
                "p-6 rounded-xl",
                darkMode ? 'bg-gray-800/50' : 'bg-gray-50'
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4">{challenge.title}</h3>
              <p className="mb-4">{challenge.description}</p>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" />
                <p>{challenge.solution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Ergebnisse 📈</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={index}
              className={cn(
                "p-6 rounded-xl text-center",
                darkMode ? 'bg-gray-800/50' : 'bg-gray-50'
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="text-3xl font-bold mb-2">{result.value}</p>
              <p className="font-semibold mb-2">{result.metric}</p>
              <p className="text-sm opacity-70">{result.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Projektverlauf ⏱️</h2>
        <div className="space-y-8">
          {timeline.map((milestone, index) => (
            <motion.div
              key={index}
              className="flex gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 w-32 pt-1">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{milestone.date}</span>
                </div>
              </div>
              <div className={cn(
                "flex-grow p-6 rounded-xl",
                darkMode ? 'bg-gray-800/50' : 'bg-gray-50'
              )}>
                <h3 className="font-semibold mb-2">{milestone.title}</h3>
                <p className="text-sm opacity-70">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      {testimonial && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Kundenstimme 💬</h2>
          <blockquote className={cn(
            "p-8 rounded-xl",
            darkMode ? 'bg-gray-800/50' : 'bg-gray-50'
          )}>
            <p className="text-xl italic mb-4">"{testimonial.quote}"</p>
            <footer>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm opacity-70">{testimonial.role}</p>
            </footer>
          </blockquote>
        </section>
      )}

      {/* Project Gallery */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Projektgalerie 📸</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {images.slice(1).map((image, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Image 
                src={image.url} 
                alt={image.alt} 
                className="w-full aspect-video object-cover"
              />
              {image.caption && (
                <p className="text-sm mt-2 opacity-70">{image.caption}</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Bereit für Ihr Projekt? 🚀</h2>
        <p className="text-lg mb-8">
          Lassen Sie uns gemeinsam Ihre digitale Vision verwirklichen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/kontakt">Jetzt Projekt starten</Button>
          <Button href="/referenzen" variant="outline">
            Weitere Referenzen
          </Button>
        </div>
      </section>
    </article>
  );
}