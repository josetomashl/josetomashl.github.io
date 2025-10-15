import { Activity } from 'react';

import Button from '@/components/common/Button';
import { CertificationType } from '@/data/certificates';
import styles from './styles.module.scss';

type Props = {
  data: CertificationType;
};

export default function CertificationCard({ data }: Props) {
  const openImageViewer = () => {
    // TODO: implement image viewer in a separate component
  };

  return (
    <div className={styles.container}>
      <div>
        <span className={styles.badge}>{data.year}</span>
        <p className={styles.title}>{data.name}</p>
      </div>
      <div className={styles.footer}>
        <Activity mode={data.link ? 'visible' : 'hidden'}>
          <Button label='Verify' to={data.link} blank />
        </Activity>
        <Button label='View' onClick={openImageViewer} />
      </div>
    </div>
  );
}
