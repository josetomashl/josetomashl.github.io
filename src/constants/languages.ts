import type { AvailableLanguages } from "@/context/languageContext";

export type LangType = { [key: string]: string };

export const AVAILABLE_LANGUAGES: {
  [key in AvailableLanguages]: string;
} = {
  en: "LANG_EN",
  es: "LANG_ES",
};

export const DEFAULT_LANGUAGE: AvailableLanguages = "en";

export const DEFAULT_MESSAGE = "Content not available on your current language.";
