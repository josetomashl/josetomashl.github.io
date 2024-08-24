import { PROJECTS, ProjectType } from "@/data/projects";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingPage from "../loading";
import NotFoundPage from "../not-found";

export default function PortfolioDetailsPage() {
  const { projectId } = useParams();
  const [projectDetails, setProjectDetails] = useState<ProjectType>();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (projectId && typeof projectId === "string") {
      setProjectDetails(PROJECTS.find((project) => project.id === projectId));
      setLoaded(true);
    }
  }, [projectId]);

  if (!projectDetails) {
    if (!loaded) {
      return <LoadingPage />;
    } else {
      return <NotFoundPage />;
    }
  }
  return <p>Project details: {projectId}</p>;
}
