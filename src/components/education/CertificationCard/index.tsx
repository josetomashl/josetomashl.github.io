import { Activity, useState } from 'react';

import Button from '@/components/common/Button';
import { ImageViewer } from '@/components/common/ImageViewer';
import { Modal } from '@/components/common/Modal';
import type { CertificationType } from '@/data/certificates';
import styles from './styles.module.scss';

type Props = {
  data: CertificationType;
};

export default function CertificationCard({ data }: Props) {
  const [modalOpen, setModalOpen] = useState(false);

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
        <Button label='View' onClick={() => setModalOpen(true)} />
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <ImageViewer title={data.name} url={data.imagePath} />
      </Modal>
    </div>
  );
}
