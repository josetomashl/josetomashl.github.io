import { LanguageContext } from '@/context/languageContext';
import { useContext } from 'react';

export default function useTranslations() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useTranslations must be used within LanguageProvider');
  }

  return context;
}
