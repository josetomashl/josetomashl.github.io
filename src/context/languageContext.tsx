import { createContext, type PropsWithChildren, useCallback, useEffect, useState } from 'react';

import type { LocaleType } from '@/constants/languages';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { loadTranslations, replacePlaceholders, type Translations } from '@/utils/language';

interface ContextProps {
  language: LocaleType | null;
  setLanguage: (lang: LocaleType) => void;
  trans: (key: string, args?: Translations) => string;
}

const LanguageContext = createContext<ContextProps | null>(null);

const LanguageProvider = (props: PropsWithChildren) => {
  // Determine the default language from the browser or user system
  const defaultLanguage = (navigator.language.split('-')[0] as LocaleType) || 'en';

  const [language, setLanguage] = useLocalStorage<LocaleType>('LANGUAGE', defaultLanguage);
  const [translations, setTranslations] = useState<Translations>({});

  // Load translations whenever the language changes
  useEffect(() => {
    document.documentElement.lang = language || defaultLanguage;
    loadTranslations(language as LocaleType).then((data) => setTranslations(data));
  }, [language, defaultLanguage]);

  // Function to translate a given key
  const trans = useCallback(
    (key: string, args: Translations = {}): string => {
      const template = translations[key] || key;
      if (Object.keys(args).length === 0) {
        return template;
      }
      return replacePlaceholders(template, args);
    },
    [translations]
  );

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        trans
      }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
