import Title from '@/components/Title';
import { useTitle } from '@/hooks/useTitle';

export default function ContactPage() {
  useTitle('Contact');

  return (
    <div>
      <Title content='Get in touch' />
      <p>Contact form & links</p>
    </div>
  );
}
