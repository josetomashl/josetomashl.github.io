import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import Back from '@/components/common/Back';
import { PROJECTS, type ProjectType } from '@/data/projects';
import { useTitle } from '@/hooks/useTitle';

export default function PortfolioDetailsPage() {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const { setTitle } = useTitle('Loading project details...');

  const [project, setProject] = useState<ProjectType | null>(null);
  const handleGetProject = (id: string) => {
    const foundProject = PROJECTS.find((p) => p.id === id);
    setProject(foundProject || null);
    setTitle(foundProject ? foundProject.title : 'Project Not Found');
  };

  useEffect(() => {
    if (projectId) {
      handleGetProject(projectId);
    } else {
      navigate('/not-found', { replace: true });
    }
  }, [projectId]);

  return (
    <>
      <Back to='/portfolio' />
      <p>{JSON.stringify(project, null, 2)}</p>
    </>
  );
}
