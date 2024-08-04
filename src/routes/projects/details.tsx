import { useParams } from "react-router-dom";

export default function ProjectDetailsPage() {
  const { projectId } = useParams();
  return <p>Project details: {projectId}</p>;
}
