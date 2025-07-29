import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './context/languageContext';
import './main.scss';
import AppRoutes from './routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <LanguageProvider>
      <AppRoutes />
    </LanguageProvider>
  </StrictMode>
);
