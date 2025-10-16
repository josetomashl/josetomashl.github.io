import Title from '@/components/common/Title';
import { useTitle } from '@/hooks/useTitle';

export default function ExperiencePage() {
  useTitle('Experience');

  return (
    <>
      <Title content='Employment History' />
    </>
  );
}
