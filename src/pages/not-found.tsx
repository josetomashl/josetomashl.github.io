import { useTitle } from '@/hooks/useTitle';
import { Link } from 'react-router';

export default function NotFoundPage() {
  useTitle('Page Not Found');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '16px',
        height: '100%',
      }}>
      <h1>Oops!</h1>
      <p>The requested resource was not found...</p>
      <Link to={'/'}>Go back Home!</Link>
    </div>
  );
}
