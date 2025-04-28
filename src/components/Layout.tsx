import React from 'react';
import { Navigation } from './navigation/Navigation';
import { Footer } from './footer/Footer';
import { ScrollToTop } from './ScrollToTop';
import { BackgroundEffects } from './BackgroundEffects';
import { cn } from '@/utils/cn';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <BackgroundEffects />
      <Navigation />
      <main className="relative">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}