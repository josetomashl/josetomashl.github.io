import Empty from "@/components/empty";
import Title from "@/components/Title";
import { ProjectCategoryType, PROJECTS, ProjectType } from "@/data/projects";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

export default function PortfolioPage() {
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
    <div>
      <Title content="Portfolio" />
      <div className={styles.categories}>
        <span className={!category ? styles.selected : undefined} onClick={() => selectCategory(undefined)}>
          All
        </span>
        <span className={category === "web" ? styles.selected : undefined} onClick={() => selectCategory("web")}>
          Websites
        </span>
        <span className={category === "app" ? styles.selected : undefined} onClick={() => selectCategory("app")}>
          Applications
        </span>
      </div>
      <div className={styles.projectsContainer}>
        {filteredProjects.length ? (
          filteredProjects.map((project, index) => (
            <Link to={`/portfolio/${project.id}`} key={index} className={styles.projectItem}>
              {/* <img src="" alt="" /> */}
              <span className={styles.projectBadge}>{project.category}</span>
              <p className={styles.projectTitle}>{project.title}</p>
              <p className={styles.projectDescription}>{project.description}</p>
            </Link>
          ))
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
}
