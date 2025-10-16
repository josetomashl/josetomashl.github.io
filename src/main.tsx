import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/assets/styles/main.scss';
import '@/assets/styles/reset.scss';
import { LanguageProvider } from '@/context/languageContext';
import AppRoutes from '@/routes';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <LanguageProvider>
      <AppRoutes />
    </LanguageProvider>
  </StrictMode>
);
