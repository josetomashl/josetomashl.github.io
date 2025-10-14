import Title from '@/components/common/Title';
import { useTitle } from '@/hooks/useTitle';

export default function EducationPage() {
  useTitle('Education');

  return (
    <>
      <Title content='Training & Courses' />
    </>
  );
}
