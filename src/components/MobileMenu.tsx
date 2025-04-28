import React from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { usePathname } from 'next/navigation';

interface MobileMenuProps {
  industries: Array<{ path: string, label: string }>;
  services: Array<{ path: string, label: string }>;
}

export function MobileMenu({ industries, services }: MobileMenuProps) {
  const { darkMode } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const [showIndustries, setShowIndustries] = React.useState(false);
  const [showServices, setShowServices] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/referenzen', label: 'Referenzen' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className={`p-2 rounded-lg ${
          darkMode 
            ? 'hover:bg-white/10' 
            : 'hover:bg-black/10'
        } transition-colors`}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div 
          className={`fixed inset-0 z-[100] ${
            darkMode ? 'bg-gray-900' : 'bg-white'
          } overflow-y-auto`}
          style={{ minHeight: '100vh' }}
        >
          <div className="container mx-auto px-4 py-4 flex justify-end">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg ${
                darkMode 
                  ? 'hover:bg-white/10' 
                  : 'hover:bg-black/10'
              } transition-colors`}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="container mx-auto px-4 py-8">
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => setShowServices(!showServices)}
                  className="flex items-center justify-between w-full text-2xl font-semibold py-2"
                >
                  Services
                  <ChevronDown className={`w-6 h-6 transform transition-transform ${showServices ? 'rotate-180' : ''}`} />
                </button>
                {showServices && (
                  <ul className="pl-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <li key={service.path}>
                        <Link
                          href={service.path}
                          onClick={toggleMenu}
                          className={`block text-xl py-2 ${
                            pathname === service.path ? 'opacity-50' : ''
                          }`}
                        >
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <button
                  onClick={() => setShowIndustries(!showIndustries)}
                  className="flex items-center justify-between w-full text-2xl font-semibold py-2"
                >
                  Branchen
                  <ChevronDown className={`w-6 h-6 transform transition-transform ${showIndustries ? 'rotate-180' : ''}`} />
                </button>
                {showIndustries && (
                  <ul className="pl-4 mt-2 space-y-2">
                    {industries.map((industry) => (
                      <li key={industry.path}>
                        <Link
                          href={industry.path}
                          onClick={toggleMenu}
                          className={`block text-xl py-2 ${
                            pathname === industry.path ? 'opacity-50' : ''
                          }`}
                        >
                          {industry.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={toggleMenu}
                    className={`block text-2xl font-semibold py-2 ${
                      pathname === item.href ? 'opacity-50' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}