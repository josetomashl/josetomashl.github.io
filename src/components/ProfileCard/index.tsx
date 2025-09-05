import { useState } from 'react';
import { Link } from 'react-router';

import Icon from '@/components/Icon';
import Separator from '@/components/Separator';
import useShare from '@/hooks/useShare';
import useTranslations from '@/hooks/useTranslations';
import styles from './styles.module.scss';

// DATA
import ME from '@/data/me';

export default function ProfileCard() {
  const { isShared, share } = useShare();
  const [settingsHover, setSettgingsHover] = useState(false);
  const { language } = useTranslations();

  return (
    <aside className={styles.container}>
      <div className={styles.profileContainer}>
        <div className={styles.avatar}>
          <img src={ME.avatar} alt='profile picture' loading='lazy' className={styles.avatarImage} />
        </div>
        <h1 className={styles.name}>
          {ME.name}
          <br />
          {ME.surname}
        </h1>
        <span className={styles.badge}>{ME.title}</span>
      </div>
      <Separator />
      <div className={styles.infoContainer}>
        <Link
          to={`mailto:${ME.email}?subject=Contact request from "${window.location.href}"`}
          target='_blank'
          rel='noopener noreferrer'
          className={styles.infoItem}>
          <Icon name='email' />
          <div>
            <h5 className={styles.infoHeader}>EMAIL</h5>
            <p>{ME.email}</p>
          </div>
        </Link>
        <Link to={ME.social[1].link} target='_blank' rel='noopener noreferrer' className={styles.infoItem}>
          <Icon name='linkedin' />
          <div>
            <h5 className={styles.infoHeader}>LINKEDIN</h5>
            <p>josetomas-hernandezlopez</p>
          </div>
        </Link>
        <Link to={ME.social[0].link} target='_blank' rel='noopener noreferrer' className={styles.infoItem}>
          <Icon name='github' />
          <div>
            <h5 className={styles.infoHeader}>GITHUB</h5>
            <p>josetomashl</p>
          </div>
        </Link>
      </div>
      <Separator />
      <div className={styles.socialMediaContainer}>
        <Link
          to={`/files/resume-E${language === 'en' ? 'N' : 'S'}.pdf`}
          target='_blank'
          rel='noopener noreferrer'
          download>
          <Icon name='download' />
        </Link>
        <span onClick={share}>
          <Icon name={isShared ? 'check' : 'link'} />
        </span>
        <Link
          to='/settings'
          className={settingsHover ? styles.rotate : undefined}
          onMouseEnter={() => setSettgingsHover(true)}
          onMouseLeave={() => setSettgingsHover(false)}>
          <Icon name='settings' />
        </Link>
      </div>
    </aside>
  );
}
