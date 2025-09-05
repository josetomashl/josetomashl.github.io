import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router';

import Back from '@/components/Back';
import PROJECTS, { type ProjectType } from '@/data/projects';
import { useTitle } from '@/hooks/useTitle';

export default function PortfolioDetailsPage() {
  const { projectId } = useParams();
  const [projectDetails, setProjectDetails] = useState<ProjectType>();

  useEffect(() => {
    if (projectId && typeof projectId === 'string') {
      setProjectDetails(PROJECTS.find((project) => project.id === projectId));
    }
  }, [projectId]);

  useTitle(projectDetails?.title || 'Project Details');

  if (!projectDetails) {
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
