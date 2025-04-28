// Navigation
export const SERVICES = [
  { path: '/services', label: 'Übersicht' },
  { path: '/services/webdesign', label: 'Webdesign' },
  { path: '/services/corporate-design', label: 'Corporate Design' },
  { path: '/services/webentwicklung', label: 'Webentwicklung' },
  { path: '/services/online-shop', label: 'Online Shop' },
  { path: '/services/mobile-development', label: 'Mobile Development' },
  { path: '/services/ki-automation', label: 'KI Automation' },
  { path: '/services/beratung', label: 'Beratung' },
  { path: '/services/print', label: 'Print' },
  { path: '/services/express-webdesign', label: 'Express Webdesign' }
] as const;

export const INDUSTRIES = [
  { path: '/branchenwelt', label: 'Übersicht' },
  { path: '/branchenwelt/gastronomie', label: 'Gastronomie' },
  { path: '/branchenwelt/handwerk-bau', label: 'Handwerk & Bau' },
  { path: '/branchenwelt/kosmetik', label: 'Kosmetik & Beauty' },
  { path: '/branchenwelt/consulting', label: 'Consulting' },
  { path: '/branchenwelt/coaches', label: 'Coaches & Trainer' },
  { path: '/branchenwelt/e-commerce', label: 'E-Commerce' },
  { path: '/branchenwelt/white-label', label: 'White Label Services' },
  { path: '/branchenwelt/agenturen', label: 'Agenturen' }
] as const;

export const MARKETING = [
  { path: '/marketing', label: 'Übersicht' },
  { path: '/marketing/google-ads', label: 'Google Ads' },
  { path: '/marketing/social-media', label: 'Social Media' },
  { path: '/marketing/seo', label: 'SEO' },
  { path: '/marketing/organic-social', label: 'Organic Social' },
  { path: '/marketing/local-seo', label: 'Local SEO' },
  { path: '/marketing/performance', label: 'Performance Marketing' },
  { path: '/marketing/strategy', label: 'Strategy Consulting' }
] as const;

// Common navigation items
export const MAIN_NAV = [
  { path: '/blog', label: 'Blog' },
  { path: '/referenzen', label: 'Referenzen' }
] as const;

// Footer navigation
export const FOOTER_NAV = [
  { path: '/impressum', label: 'Impressum' },
  { path: '/datenschutz', label: 'Datenschutz' },
  { path: '/kontakt', label: 'Kontakt' }
] as const;