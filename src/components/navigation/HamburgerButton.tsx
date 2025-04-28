import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export function HamburgerButton({ isOpen, onClick, className }: HamburgerButtonProps) {
  const { darkMode } = useTheme();

  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "relative z-[101] w-10 h-10 flex items-center justify-center rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500",
        darkMode ? 'hover:bg-white/10' : 'hover:bg-black/10',
        isOpen && 'hamburger-active',
        className
      )}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      aria-expanded={isOpen}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <div className="relative w-6 h-4">
        <span className={cn(
          "hamburger-line",
          darkMode ? "bg-white" : "bg-black"
        )} />
        <span className={cn(
          "hamburger-line",
          darkMode ? "bg-white" : "bg-black"
        )} />
        <span className={cn(
          "hamburger-line",
          darkMode ? "bg-white" : "bg-black"
        )} />
      </div>
    </motion.button>
  );
}