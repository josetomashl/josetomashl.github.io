import Dropdown, { type DropdownOption } from '@/components/Dropdown';
import Title from '@/components/Title';
import type { LocaleType } from '@/context/languageContext';
import { useTitle } from '@/hooks/useTitle';
import useTranslations from '@/hooks/useTranslations';
import { useState } from 'react';

const availableLanguages = [
  { label: 'language_en', value: 'en', icon: '/icons/united_kingdom.svg' },
  { label: 'language_es', value: 'es', icon: '/icons/spain.svg' },
];

export default function SettingsPage() {
  useTitle('Preferences');
  const { setLanguage, language } = useTranslations();

  const [item, setItem] = useState<DropdownOption>(
    () => availableLanguages.find((lang) => lang.value === language) || availableLanguages[0]
  );

  const handleLanguageChange = (value: DropdownOption) => {
    setItem(value);
    setLanguage(value.value as LocaleType);
  };

  return (
    <div>
      <Title content='Preferences' />

      <h3>General Settings</h3>
      <div>
        <h4>Language</h4>
        <Dropdown
          options={availableLanguages}
          value={item}
          onChange={handleLanguageChange}
          label='Choose your preferred language'
        />
      </div>
    </div>
  );
}
