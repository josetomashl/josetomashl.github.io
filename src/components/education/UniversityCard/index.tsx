import { Link } from 'react-router';

import Icon from '@/components/common/Icon';
import styles from './styles.module.scss';

export default function UniversityCard() {
  return (
    <Link to='https://www.linkedin.com/company/15092652' target='_blank' className={styles.container}>
      <div className={styles.detailsContainer}>
        <div className={styles.title}>
          <h2>Bachelor's Degree in Telemtatics Engineering</h2>
          <h4>Universidad Politécnica de Cartagena</h4>
        </div>
        <div className={styles.info}>
          <div className={styles.infoContainer}>
            <Icon name='calendar' size={20} />
            2018 - 2023
          </div>
          <div className={styles.infoContainer}>
            <Icon name='pin' size={20} />
            Cartagena, Murcia, Spain
          </div>
        </div>
      </div>
      <img src='/images/university.webp' alt='UPCT Logo' loading='lazy' />
    </Link>
  );
}
