import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './context/languageContext';
import { ThemeProvider } from './context/themeContext';
import './main.scss';
import AppRoutes from './routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </LanguageProvider>
  </StrictMode>
);
