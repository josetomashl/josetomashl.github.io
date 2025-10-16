import type { LanguageType } from '@/data/me';
import styles from './styles.module.scss';

type Props = {
  data: LanguageType;
};

export default function LanguageCard({ data }: Props) {
  return (
    <div className={styles.container}>
      <span>
        {data.name}
        {data.issuer && ` - Certified by ${data.issuer}`}
        {data.year && (data.issuer ? ` in ${data.year}` : ` (${data.year})`)}
      </span>
      <h2>{data.qualification}</h2>
    </div>
  );
}
