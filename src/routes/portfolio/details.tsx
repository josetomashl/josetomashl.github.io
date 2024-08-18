import { PROJECTS, ProjectType } from "@/data/projects";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import LoadingPage from "../loading";

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
      return <Navigate to="/portfolio" replace />;
    }
  }
  return <p>Project details: {projectId}</p>;
}
