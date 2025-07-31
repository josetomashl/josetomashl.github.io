import Title from '@/components/Title';
import { useTitle } from '@/hooks/useTitle';

export default function EducationPage() {
  useTitle('Education');

  return (
    <>
      <Title content='Training & Courses' />
    </>
  );
}
