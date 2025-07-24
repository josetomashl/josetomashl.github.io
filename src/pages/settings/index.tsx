import Title from '@/components/Title';
import { useTitle } from '@/hooks/useTitle';

export default function SettingsPage() {
  useTitle('Preferences');
  return (
    <div>
      <Title content='Preferences' />
    </div>
  );
}
