import { Activity } from 'react';

import Subtitle from '@/components/common/Subtitle';
import Title from '@/components/common/Title';
import CertificationCard from '@/components/education/CertificationCard';
import LanguageCard from '@/components/education/LanguageCard';
import UniversityCard from '@/components/education/UniversityCard';
import { CERTIFICATIONS } from '@/data/certificates';
import { ME } from '@/data/me';
import { useTitle } from '@/hooks/useTitle';
import styles from './styles.module.scss';

export default function EducationPage() {
  useTitle('Education');

  return (
    <Activity mode='visible'>
      <Title content='Training & Courses' />
      <UniversityCard />
      <Subtitle content='Other languages' />
      {ME.languages
        .filter((lang) => lang.qualification !== 'Native')
        .map((lang) => (
          <LanguageCard
            key={lang.name + lang.qualification}
            language={lang.name}
            year={lang.year}
            level={lang.qualification}
          />
        ))}
      <Subtitle content='Certifications' />
      <div className={styles.certificationsContainer}>
        {CERTIFICATIONS.map((cert) => (
          <CertificationCard key={cert.link} data={cert} />
        ))}
      </div>
    </Activity>
  );
}
