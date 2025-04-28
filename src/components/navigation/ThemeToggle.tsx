'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';

export const ThemeToggle = React.memo(function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={cn(
        "p-2 rounded-full transition-colors",
        darkMode 
          ? 'bg-white text-gray-900' 
          : 'bg-gray-900 text-white'
      )}
      aria-label="Toggle dark mode"
    >
      {darkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
});