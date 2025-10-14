import { useState } from 'react';

import Title from '@/components/common/Title';
import ProjectCard from '@/components/portfolio/ProjectCard';
import { PROJECTS, type ProjectCategoryType } from '@/data/projects';
import { useTitle } from '@/hooks/useTitle';
import styles from './styles.module.scss';

export default function PortfolioPage() {
  useTitle('Projects');

  const [category, setCategory] = useState<ProjectCategoryType>();
  const filteredProjects = PROJECTS.filter((project) => (category ? project.category === category : true));

  return (
    <>
      <Title content='Projects' />
      <div className={styles.categories}>
        <span className={!category ? styles.selected : undefined} onClick={() => setCategory(undefined)}>
          All
        </span>
        <span className={category === 'web' ? styles.selected : undefined} onClick={() => setCategory('web')}>
          Websites
        </span>
        <span className={category === 'app' ? styles.selected : undefined} onClick={() => setCategory('app')}>
          Applications
        </span>
      </div>
      <div className={styles.projectsContainer}>
        {filteredProjects.length ? (
          filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)
        ) : (
          <span>No results found.</span>
        )}
      </div>
    </>
  );
}
