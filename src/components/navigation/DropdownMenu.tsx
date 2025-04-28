import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuItem {
  path: string;
  label: string;
}

interface DropdownMenuProps {
  label: string;
  items: MenuItem[];
  isOpen: boolean;
  onToggle: () => void;
}

export function DropdownMenu({ 
  label, 
  items, 
  isOpen, 
  onToggle 
}: DropdownMenuProps) {
  const { darkMode } = useTheme();

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 hover:opacity-75 transition-opacity"
      >
        {label}
        <ChevronDown className={cn(
          "w-4 h-4 transition-transform duration-200",
          isOpen && "rotate-180"
        )} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-48 rounded-xl overflow-hidden shadow-lg glass-card"
          >
            {items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-4 py-2 transition-colors hover:bg-white/20"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}