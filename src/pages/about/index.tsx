import Title from '@/components/Title';
import styles from './styles.module.scss';

export default function AboutPage() {
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
