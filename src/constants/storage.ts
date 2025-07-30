export type StorageKey = 'USER' | 'LANGUAGE' | 'THEME';

export const StorageKeys: Record<StorageKey, string> = {
  USER: 'user_data',
  LANGUAGE: 'user_language',
  THEME: 'user_theme',
};
