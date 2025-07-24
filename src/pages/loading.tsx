import { useTitle } from '@/hooks/useTitle';

export default function LoadingPage() {
  useTitle('Loading...');

  return <div>Loading...</div>;
}
