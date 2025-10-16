import { useState } from 'react';

import Dropdown, { type DropdownOption } from '@/components/common/Dropdown';
import Icon from '@/components/common/Icon';
import Title from '@/components/common/Title';
import { availableLanguages, type LocaleType } from '@/constants/languages';
import { useTitle } from '@/hooks/useTitle';
import useTranslations from '@/hooks/useTranslations';
import styles from './styles.module.scss';

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
