import React from 'react';
import { Layout } from '@/components/Layout';
import { cn } from '@/lib/utils';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <Layout>
      <div className={cn("container mx-auto px-4 pt-32 pb-20", className)}>
        {children}
      </div>
    </Layout>
  );
}