import { Link } from 'react-router';

import { ProjectType } from '@/data/projects';
import styles from './styles.module.scss';

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <Link to={`/portfolio/${project.id}`} className={styles.projectItem}>
      {project.image && (
        <div className={styles.projectImage}>
          <img src={project.image.path} alt={project.image.alt} loading='lazy' />
        </div>
      )}
      <div className={styles.projectDetails}>
        <span className={styles.projectBadge}>{project.category}</span>
        <p className={styles.projectTitle}>{project.title}</p>
        <p className={styles.projectDescription}>{project.description}</p>
      </div>
    </Link>
  );
}
