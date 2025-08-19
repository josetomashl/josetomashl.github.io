import Dropdown, { type DropdownOption } from '@/components/Dropdown';
import Icon from '@/components/Icon';
import Title from '@/components/Title';
import type { LocaleType } from '@/context/languageContext';
import { useTitle } from '@/hooks/useTitle';
import useTranslations from '@/hooks/useTranslations';
import { useState } from 'react';
import styles from './styles.module.scss';

const availableLanguages = [
  { label: 'language_en', value: 'en', icon: '/icons/united_kingdom.svg' },
  { label: 'language_es', value: 'es', icon: '/icons/spain.svg' }
];

export default function SettingsPage() {
  useTitle('Preferences');

  const { setLanguage, language } = useTranslations();
  const [langOption, setLangOption] = useState<DropdownOption>(
    () => availableLanguages.find((lang) => lang.value === language) || availableLanguages[0]
  );
  const handleLanguageChange = (value: DropdownOption) => {
    setLangOption(value);
    setLanguage(value.value as LocaleType);
  };

  return (
    <>
      <Title content='Preferences' />

      <div className={styles.container}>
        <h4>
          <Icon name='globe' size={20} />
          Language
        </h4>
        <Dropdown
          options={availableLanguages}
          value={langOption}
          onChange={handleLanguageChange}
          label='Choose your preferred language'
        />
      </div>
    </>
  );
}
