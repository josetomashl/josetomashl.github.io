import type { LocaleType } from '@/constants/languages';

export type Translations = Record<string, string>;

/**
 * Asynchronously loads translation data for the specified language.
 *
 * Attempts to import a JSON file containing translations for the given `language`.
 * If the import fails (e.g., the file does not exist), it falls back to loading
 * the English translations and logs a warning to the console.
 *
 * @param language - The locale identifier (e.g., 'en', 'es', 'fr') for which to load translations.
 * @returns A promise that resolves to the loaded `Translations` object.
 */
export async function loadTranslations(language: LocaleType): Promise<Translations> {
  try {
    const translations = await import(`../assets/translations/${language}.json`);
    return translations.default;
  } catch {
    console.warn(`Could not load translations for language: ${language}. Default language set to English.`);
    const defaultTranslations = await import(`../assets/translations/en.json`);
    return defaultTranslations.default;
  }
}

/**
 * Replaces placeholders in a string with provided arguments.
 * Placeholders should be in the format `{{key}}`.
 */
export function replacePlaceholders(template: string, args: Translations): string {
  return template.replace(/{{(.*?)}}/g, (_, key) => args[key] || `{${key}}`);
}
