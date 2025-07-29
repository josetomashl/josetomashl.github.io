import { useLocalStorage } from '@/hooks/useLocalStorage';
import { createContext, type PropsWithChildren, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ContextProps {
  theme: Theme | null;
  setTheme: (value: Theme) => void;
}

const ThemeContext = createContext<ContextProps>({
  theme: null,
  setTheme: () => {},
});

const ThemeProvider = (props: PropsWithChildren) => {
  const [theme, setTheme] = useLocalStorage<Theme>('THEME', 'dark');

  useEffect(() => {
    if (theme) {
      document.body.setAttribute('data-theme', theme);
    }
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{props.children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
