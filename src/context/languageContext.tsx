import { createContext, useEffect, useState } from "react";

import english from "@/assets/langs/english";
import spanish from "@/assets/langs/spanish";
import StorageKeys from "@/constants/StorageKeys";
import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE, DEFAULT_MESSAGE } from "@/constants/languages";

export type AvailableLanguages = "en" | "es";

export interface LanguageContextType {
  currentLanguage: AvailableLanguages;
  translate: (key: string) => string;
  getCurrentLanguageTranslationKey: () => string;
  setLanguage: (lang: AvailableLanguages) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: DEFAULT_LANGUAGE,
  translate: () => DEFAULT_MESSAGE,
  getCurrentLanguageTranslationKey: () => AVAILABLE_LANGUAGES[DEFAULT_LANGUAGE],
  setLanguage: () => null,
});

const LanguageProvider = (props: React.PropsWithChildren) => {
  const [currentLanguage, setCurrentLanguage] = useState<AvailableLanguages>(DEFAULT_LANGUAGE);

  useEffect(() => {
    getLanguageAsync();
  }, []);

  const getLanguageAsync = async () => {
    const lang = window.localStorage.getItem(StorageKeys.LANGUAGE);
    if (!lang || !Object.keys(AVAILABLE_LANGUAGES).includes(lang)) {
      getDeviceLanguage();
    } else {
      setLanguage(lang as AvailableLanguages);
    }
  };

  const setLanguage = (lang: AvailableLanguages) => {
    if (currentLanguage !== lang) {
      setCurrentLanguage(lang);
      window.localStorage.setItem(StorageKeys.LANGUAGE, lang);
    }
  };

  function getDeviceLanguage() {
    try {
      const deviceLanguage = window.navigator.language;
      if (deviceLanguage && deviceLanguage.length) {
        if (deviceLanguage.includes("es")) {
          setLanguage("es");
        } else {
          setLanguage("en");
        }
      } else {
        setLanguage(DEFAULT_LANGUAGE);
      }
    } catch {
      setLanguage(DEFAULT_LANGUAGE);
    }
  }

  const translate = (key: string): string => {
    let content: string;
    switch (currentLanguage) {
      case "es":
        content = spanish[key];
        break;
      case "en":
      default:
        content = english[key];
        break;
    }
    if (!content) {
      return DEFAULT_MESSAGE;
    }
    return content;
  };

  const getCurrentLanguageTranslationKey = () => {
    return AVAILABLE_LANGUAGES[currentLanguage];
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        translate,
        getCurrentLanguageTranslationKey,
        setLanguage,
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
