import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../Logo';
import { DropdownMenu } from './DropdownMenu';
import { HamburgerButton } from './HamburgerButton';
import { cn } from '@/utils/cn';
import { SERVICES, INDUSTRIES, MARKETING, MAIN_NAV } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';

export function Navigation() {
  const location = useLocation();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [showServices, setShowServices] = React.useState(false);
  const [showIndustries, setShowIndustries] = React.useState(false);
  const [showMarketing, setShowMarketing] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    setMobileMenuOpen(false);
    setShowServices(false);
    setShowIndustries(false);
    setShowMarketing(false);
  }, [location.pathname]);

  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <motion.nav 
      className={cn(
        "fixed w-full z-[100] transition-all duration-500",
        scrolled || mobileMenuOpen ? 
          "glass-card border-b border-white/20"
          : "bg-transparent"
      )}
      initial={false}
      animate={mobileMenuOpen ? { height: "100vh" } : { height: "auto" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="relative z-[101] hover:opacity-75 transition-opacity"
          >
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <DropdownMenu
              label="Services"
              items={SERVICES}
              isOpen={showServices}
              onToggle={() => {
                setShowServices(!showServices);
                setShowIndustries(false);
                setShowMarketing(false);
              }}
            />

            <DropdownMenu
              label="Branchen"
              items={INDUSTRIES}
              isOpen={showIndustries}
              onToggle={() => {
                setShowIndustries(!showIndustries);
                setShowServices(false);
                setShowMarketing(false);
              }}
            />

            <DropdownMenu
              label="Marketing"
              items={MARKETING}
              isOpen={showMarketing}
              onToggle={() => {
                setShowMarketing(!showMarketing);
                setShowServices(false);
                setShowIndustries(false);
              }}
            />

            {MAIN_NAV.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "hover:opacity-75 transition-opacity relative group",
                  location.pathname === item.path && "opacity-50"
                )}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all group-hover:w-full" />
              </Link>
            ))}

            {location.pathname !== '/kontakt' && (
              <Link
                to="/kontakt"
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 px-6 py-2 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Kontakt
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <HamburgerButton 
              isOpen={mobileMenuOpen}
              onClick={toggleMobileMenu}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] pt-20 pb-8 overflow-y-auto glass-card"
          >
            <div className="container mx-auto px-4">
              <div className="space-y-6">
                <div>
                  <button
                    onClick={() => setShowServices(!showServices)}
                    className="w-full flex items-center justify-between py-2 text-xl font-semibold"
                  >
                    Services
                    <motion.span
                      animate={{ rotate: showServices ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      ▼
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {showServices && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="py-2 pl-4 space-y-2">
                          {SERVICES.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block py-2 opacity-70 hover:opacity-100"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <button
                    onClick={() => setShowIndustries(!showIndustries)}
                    className="w-full flex items-center justify-between py-2 text-xl font-semibold"
                  >
                    Branchen
                    <motion.span
                      animate={{ rotate: showIndustries ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      ▼
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {showIndustries && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="py-2 pl-4 space-y-2">
                          {INDUSTRIES.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block py-2 opacity-70 hover:opacity-100"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <button
                    onClick={() => setShowMarketing(!showMarketing)}
                    className="w-full flex items-center justify-between py-2 text-xl font-semibold"
                  >
                    Marketing
                    <motion.span
                      animate={{ rotate: showMarketing ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      ▼
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {showMarketing && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="py-2 pl-4 space-y-2">
                          {MARKETING.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block py-2 opacity-70 hover:opacity-100"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {MAIN_NAV.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block py-2 text-xl font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                {location.pathname !== '/kontakt' && (
                  <Link
                    to="/kontakt"
                    className="block w-full text-center bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 px-6 py-3 rounded-lg font-semibold text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Kontakt
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}