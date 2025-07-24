import Title from '@/components/Title';
import { useTitle } from '@/hooks/useTitle';
import styles from './styles.module.scss';

export default function AboutPage() {
  useTitle('About Me');

  return (
    <div>
      <div className={styles.container}>
        <Title content='About Me' />
        <p>Lorem</p>
        <p>Lorem</p>
      </div>
    </div>
  );
}
