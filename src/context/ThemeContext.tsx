import React from 'react';

interface ThemeContextType {
  darkMode: false;
  setDarkMode: (value: boolean) => void;
}

export const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const setDarkMode = () => {}; // No-op since we're sticking to light mode

  const value = React.useMemo(() => ({
    darkMode: false,
    setDarkMode,
  }), []);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}