import React from 'react';
import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';

export function ImpressumPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-20">
        <motion.div 
          className="max-w-3xl mx-auto prose dark:prose-invert"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Impressum</h1>
          
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            KB Digital<br />
            Ömer Koyunbakan<br />
            Musterstraße 123<br />
            12345 Musterstadt
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: +49 163 4832787<br />
            E-Mail: hello@kbdigital.de
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE XXX XXX XXX
          </p>

          <h2>Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a>
            <br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
            Tätigkeit hinweisen.
          </p>
        </motion.div>
      </div>
    </Layout>
  );
}