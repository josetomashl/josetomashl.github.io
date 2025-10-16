import Icon from '@/components/common/Icon';
import { EXPERIENCES } from '@/data/experience';
import { Link } from 'react-router';
import styles from './styles.module.scss';

export default function TimeLine() {
  return (
    <ul className={styles.timeline}>
      {EXPERIENCES.map((exp) => (
        <li key={exp.startDate} className={styles.event} data-date={`${exp.startDate} - ${exp.endDate ?? 'Present'}`}>
          <h3 className={styles.title}>{exp.title}</h3>
          <span className={styles.location}>
            <Icon name='pin' size={18} />
            {exp.location}
          </span>
          {exp.employer.link ? (
            <Link to={exp.employer.link} target='_blank' className={styles.employer}>
              {exp.employer.name}
            </Link>
          ) : (
            <span className={styles.employerUnlinked}>{exp.employer.name}</span>
          )}
          <p>{exp.description}</p>
          <small>Skills: {exp.skills.join(', ')}</small>
        </li>
      ))}
    </ul>
  );
}
