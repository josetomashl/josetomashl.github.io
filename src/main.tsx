import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { LanguageProvider } from '@/context/languageContext';
import AppRoutes from '@/routes';
import './main.scss';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <LanguageProvider>
      <AppRoutes />
    </LanguageProvider>
  </StrictMode>
);
