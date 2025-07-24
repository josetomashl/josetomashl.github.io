import Title from '@/components/Title';
import { useTitle } from '@/hooks/useTitle';

export default function ExperiencePage() {
  useTitle('Experience');

  return (
    <div>
      <Title content='Employment History' />
    </div>
  );
}
