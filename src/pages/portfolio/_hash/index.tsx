import { Navigate, useParams } from 'react-router';

import Back from '@/components/common/Back';
import { PROJECTS, type ProjectType } from '@/data/projects';
import { useTitle } from '@/hooks/useTitle';

export default function PortfolioDetailsPage() {
  useTitle('Project Details');
  const { projectId } = useParams();

  const projectDetails: ProjectType | undefined = PROJECTS.find((project) => project.id === projectId);

  if (!projectId || !projectDetails) {
    return <Navigate to='/not-found' replace />;
  }

  return (
    <>
      <Back to='/portfolio' />
      <p>Project details: {projectId}</p>
      <p>{JSON.stringify(projectDetails, null, 2)}</p>
    </>
  );
}
