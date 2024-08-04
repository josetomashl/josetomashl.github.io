import { useParams } from "react-router-dom";

export default function PortfolioDetailsPage() {
  const { projectId } = useParams();
  return <p>Project details: {projectId}</p>;
}
