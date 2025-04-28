import React from 'react';
import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';

export function DatenschutzPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-20">
        <motion.div 
          className="max-w-3xl mx-auto prose dark:prose-invert"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Datenschutzerklärung</h1>
          
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. 
            Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
            werden können.
          </p>

          <h3>Datenerfassung auf dieser Website</h3>
          <h4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
            Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
          </p>

          <h4>Wie erfassen wir Ihre Daten?</h4>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
            Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p>
          <p>
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der 
            Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten 
            (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
          </p>

          <h4>Wofür nutzen wir Ihre Daten?</h4>
          <p>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website 
            zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens 
            verwendet werden.
          </p>

          <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger 
            und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben 
            außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
          </p>
        </motion.div>
      </div>
    </Layout>
  );
}