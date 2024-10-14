import Back from "@/components/Back";
import PROJECTS, { type ProjectType } from "@/data/projects";
import LoadingPage from "@/pages/loading";
import NotFoundPage from "@/pages/not-found";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  return (
    <div>
      <Back to="/portfolio" />
      <p>Project details: {projectId}</p>
      <p>{JSON.stringify(projectDetails, null, 2)}</p>
    </div>
  );
}
