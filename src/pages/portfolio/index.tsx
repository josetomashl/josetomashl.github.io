import { useEffect, useState } from 'react';
import { Link } from 'react-router';

import Empty from '@/components/Empty';
import Title from '@/components/Title';
import PROJECTS, { type ProjectCategoryType, type ProjectType } from '@/data/projects';
import { useTitle } from '@/hooks/useTitle';
import styles from './styles.module.scss';

export default function PortfolioPage() {
  useTitle('Projects');
  const [category, setCategory] = useState<ProjectCategoryType>();
  const selectCategory = (category: ProjectCategoryType) => {
    setCategory(category);
  };

  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(PROJECTS);
  useEffect(() => {
    if (!category) {
      setFilteredProjects(PROJECTS);
    } else {
      setFilteredProjects(PROJECTS.slice().filter((project) => project.category === category));
    }
  }, [category]);

  return (
    <>
      <Title content='Projects' />
      <div className={styles.categories}>
        <span className={!category ? styles.selected : undefined} onClick={() => selectCategory(undefined)}>
          All
        </span>
        <span className={category === 'web' ? styles.selected : undefined} onClick={() => selectCategory('web')}>
          Websites
        </span>
        <span className={category === 'app' ? styles.selected : undefined} onClick={() => selectCategory('app')}>
          Applications
        </span>
      </div>
      <div className={styles.projectsContainer}>
        {filteredProjects.length ? (
          filteredProjects.map((project, index) => <PortfolioItem key={index} project={project} />)
        ) : (
          <Empty />
        )}
      </div>
    </>
  );
}

function PortfolioItem({ project }: { project: ProjectType }) {
  return (
    <Link to={`/portfolio/${project.id}`} key={project.id} className={styles.projectItem}>
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
