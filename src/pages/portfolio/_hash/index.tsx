import { useNavigate, useParams } from 'react-router';

import Back from '@/components/common/Back';
import { PROJECTS, type ProjectType } from '@/data/projects';
import { useTitle } from '@/hooks/useTitle';
import { useEffect, useState } from 'react';

export default function PortfolioDetailsPage() {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const { setTitle } = useTitle('Loading project details...');

  const [project, setProject] = useState<ProjectType | null>(null);

  useEffect(() => {
    if (projectId) {
      const foundProject = PROJECTS.find((p) => p.id === projectId);
      setProject(foundProject || null);
      setTitle(foundProject ? foundProject.title : 'Project Not Found');
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
