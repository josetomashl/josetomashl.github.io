import { useContext } from 'react';

import { LanguageContext } from '@/context/languageContext';

export default function useTranslations() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useTranslations must be used within LanguageProvider');
  }

  return context;
}
