import Dropdown, { type DropdownOption } from '@/components/Dropdown';
import Title from '@/components/Title';
import { useTitle } from '@/hooks/useTitle';
import useTranslation, { LocaleType } from '@/hooks/useTranslations';
import { useState } from 'react';

const items = [
  { label: 'language_en', value: 'en' },
  { label: 'language_es', value: 'es' },
];

export default function SettingsPage() {
  useTitle('Preferences');
  const { setLanguage } = useTranslation();

  const [item, setItem] = useState<DropdownOption>();

  const handleLanguageChange = (value: DropdownOption) => {
    setItem(value);
    setLanguage(value.value as LocaleType);
  };

  return (
    <div>
      <Title content='Preferences' />

      <h3>General Settings</h3>
      <div>
        <Dropdown options={items} value={item} onChange={handleLanguageChange} label='Choose your preferred language' />
      </div>
    </div>
  );
}
