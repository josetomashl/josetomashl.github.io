import { Activity, useState } from 'react';

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

  const [sort, setSort] = useState('date');

  return (
    <Activity mode='visible'>
      <Title content='Training & Courses' />
      <UniversityCard />
      <Subtitle content='Other languages' />
      {ME.languages
        .filter((lang) => lang.qualification !== 'Native')
        .map((lang) => (
          <LanguageCard key={lang.name + lang.qualification} data={lang} />
        ))}
      <div className={styles.certificationsHeader}>
        <Subtitle content='Certifications' />
        <div>
          <label htmlFor='sorting_selector' style={{ marginRight: '0.5rem' }}>
            Sort by:
          </label>
          <select id='sorting_selector' value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value='date'>Year</option>
            <option value='relevance'>Relevance</option>
          </select>
        </div>
      </div>
      <div className={styles.certificationsContainer}>
        {CERTIFICATIONS.slice()
          .sort((a, b) => {
            if (sort === 'date') {
              return b.year - a.year;
            } else {
              const relevanceOrder = { high: 3, medium: 2, low: 1 };
              return relevanceOrder[b.relevance] - relevanceOrder[a.relevance];
            }
          })
          .map((cert) => (
            <CertificationCard key={cert.link + '_' + cert.name.replaceAll(' ', '-')} data={cert} />
          ))}
      </div>
    </Activity>
  );
}
