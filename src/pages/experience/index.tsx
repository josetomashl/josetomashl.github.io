import Title from '@/components/common/Title';
import TimeLine from '@/components/experience/TimeLine';
import { useTitle } from '@/hooks/useTitle';

export default function ExperiencePage() {
  useTitle('Experience');

  return (
    <>
      <Title content='Employment History' />
      <TimeLine />
    </>
  );
}
