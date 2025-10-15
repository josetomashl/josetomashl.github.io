import { CertificationType } from '@/data/certificates';
import styles from './styles.module.scss';

type Props = {
  data: CertificationType;
};

export default function CertificationCard(props: Props) {
  return <div className={styles.container}>{props.data.name}</div>;
}
