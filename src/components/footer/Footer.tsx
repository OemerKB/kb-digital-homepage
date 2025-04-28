import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';
import { SERVICES, INDUSTRIES, MARKETING, FOOTER_NAV } from '@/lib/constants';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  const { darkMode } = useTheme();
  const year = React.useMemo(() => new Date().getFullYear(), []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/koyunbakan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/koyunbakan', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/koyunbakan', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/koyunbakan', label: 'Instagram' }
  ];

  return (
    <footer className={cn(
      "py-12 md:py-20 border-t",
      darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'
    )}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-6 text-base opacity-70 max-w-md leading-relaxed">
              Professionelle Webentwicklung, UI/UX Design und Online Marketing Lösungen. 
              Wir erschaffen magische digitale Erlebnisse, die begeistern und Ihr Unternehmen in die Zukunft führen.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-3 rounded-lg transition-colors touch-target",
                    darkMode 
                      ? 'hover:bg-white/10' 
                      : 'hover:bg-black/5'
                  )}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-3">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.path}>
                  <Link 
                    to={service.path}
                    className="text-base opacity-70 hover:opacity-100 transition-opacity touch-target inline-block"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Branchen</h3>
            <ul className="space-y-3">
              {INDUSTRIES.slice(0, 6).map((industry) => (
                <li key={industry.path}>
                  <Link 
                    to={industry.path}
                    className="text-base opacity-70 hover:opacity-100 transition-opacity touch-target inline-block"
                  >
                    {industry.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Marketing</h3>
            <ul className="space-y-3">
              {MARKETING.slice(0, 6).map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className="text-base opacity-70 hover:opacity-100 transition-opacity touch-target inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={cn(
          "pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4",
          darkMode ? 'border-gray-800' : 'border-gray-100'
        )}>
          <p className="text-sm opacity-70">
            © {year} kb digital. Alle Rechte vorbehalten.
          </p>
          <nav className="flex flex-wrap gap-6">
            {FOOTER_NAV.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className="text-sm opacity-70 hover:opacity-100 transition-opacity touch-target"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}