import React from 'react';
import { PageLayout } from '@/components/ui/page-layout';
import { PageHeader } from '@/components/ui/page-header';
import { Phone, Mail, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';

export function KontaktPage() {
  const { darkMode } = useTheme();

  return (
    <PageLayout>
      <PageHeader
        title="Kontakt"
        description="Lassen Sie uns gemeinsam Ihr nächstes Projekt besprechen."
      />
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Direkte Kontaktaufnahme</h2>
            <div className="space-y-4">
              <a 
                href="mailto:hello@kbdigital.de"
                className={cn(
                  "flex items-center gap-3 p-4 rounded-lg transition-colors",
                  darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'
                )}
              >
                <Mail className={darkMode ? 'text-white' : 'text-black'} />
                <span>hello@kbdigital.de</span>
              </a>
              
              <a 
                href="https://wa.me/491634832787"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-3 p-4 rounded-lg transition-colors",
                  darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'
                )}
              >
                <Phone className={darkMode ? 'text-white' : 'text-black'} />
                <span>+49 163 4832787</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Termine & Beratung</h2>
            <div className="space-y-4">
              <a 
                href="https://cal.com/oemerdigital/15min"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-3 p-4 rounded-lg transition-colors",
                  darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'
                )}
              >
                <Calendar className={darkMode ? 'text-white' : 'text-black'} />
                <span>15-Minütiges Erstgespräch buchen</span>
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Kontaktformular</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                className={cn(
                  "w-full px-4 py-2 rounded-lg border focus:outline-none transition-colors",
                  darkMode 
                    ? 'bg-white/5 border-white/10 focus:border-white' 
                    : 'bg-black/5 border-black/10 focus:border-black'
                )}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">E-Mail</label>
              <input
                type="email"
                id="email"
                className={cn(
                  "w-full px-4 py-2 rounded-lg border focus:outline-none transition-colors",
                  darkMode 
                    ? 'bg-white/5 border-white/10 focus:border-white' 
                    : 'bg-black/5 border-black/10 focus:border-black'
                )}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Nachricht</label>
              <textarea
                id="message"
                rows={4}
                className={cn(
                  "w-full px-4 py-2 rounded-lg border focus:outline-none transition-colors",
                  darkMode 
                    ? 'bg-white/5 border-white/10 focus:border-white' 
                    : 'bg-black/5 border-black/10 focus:border-black'
                )}
              ></textarea>
            </div>
            
            <Button type="submit" className="w-full">
              Nachricht senden
            </Button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
}