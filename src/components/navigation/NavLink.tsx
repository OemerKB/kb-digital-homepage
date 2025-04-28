import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/utils/cn';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const NavLink = React.memo(function NavLink({ to, children, className }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={cn(
        "hover:opacity-75 transition-opacity",
        isActive && "opacity-50",
        className
      )}
    >
      {children}
    </Link>
  );
});