import type { DropdownOption } from '@/components/common/Dropdown';

export type LocaleType = 'en' | 'es';

export const availableLanguages: DropdownOption<LocaleType>[] = [
  { label: 'language_en', value: 'en', icon: '/icons/united_kingdom.svg' },
  { label: 'language_es', value: 'es', icon: '/icons/spain.svg' }
];
