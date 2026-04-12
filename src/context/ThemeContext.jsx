import { createContext, useCallback, useContext, useEffect } from 'react';

export const THEME_STORAGE_KEY = 'portfolio-theme';

const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
  setTheme: () => {},
});

export function ThemeProvider({ children }) {
  const setTheme = useCallback(() => {
    /* Dark-only: API kept for compatibility */
  }, []);

  const toggleTheme = useCallback(() => {
    /* Dark-only: no-op */
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = 'dark';
    try {
      localStorage.setItem(THEME_STORAGE_KEY, 'dark');
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: 'dark', toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
