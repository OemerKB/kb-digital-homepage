import React from 'react';
import { Link } from 'react-router-dom';
import { ReferenceCard } from './ReferenceCard';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { Illustration } from './Illustration';

export function ReferencesSection() {
  const { darkMode } = useTheme();
  
  const references = [
    {
      name: "Restaurant Alanya",
      url: "/referenzen/alanya-restaurant",
      desc: "Modernes Restaurant mit mediterraner Küche",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      services: ['Webdesign', 'Mobile App', 'Online Marketing']
    },
    {
      name: "Butrin Etiketten",
      url: "/referenzen/butrin-etiketten",
      desc: "B2B E-Commerce Plattform für Etikettenlösungen",
      image: "https://images.unsplash.com/photo-1585559604830-91802a8f05f2?auto=format&fit=crop&w=800&q=80",
      services: ['E-Commerce', 'UI/UX Design', 'Backend Development']
    },
    {
      name: "Kutan GalaBau",
      url: "/referenzen/kutan-galabau",
      desc: "Professionelle Unternehmenswebsite mit Projektmanagement-System",
      image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=800&q=80",
      services: ['Corporate Design', 'Web Development', 'CMS']
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gray-50">
      {/* Decorative illustrations */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <Illustration 
          name="love" 
          className="absolute -left-8 top-1/4 opacity-10 rotate-12"
          size="md"
        />
        <Illustration 
          name="happy" 
          className="absolute -right-8 bottom-1/4 opacity-10 -rotate-12"
          size="md"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Unsere Referenzen ⭐️
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {references.map((ref, index) => (
            <ReferenceCard key={index} {...ref} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/referenzen"
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 px-8 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Alle Referenzen ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}