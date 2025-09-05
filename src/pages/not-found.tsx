import { Link } from 'react-router';

import { useTitle } from '@/hooks/useTitle';

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
        height: '100%'
      }}>
      <h2>Oops!</h2>
      <p>The requested resource was not found...</p>
      <Link to='/'>Go back Home!</Link>
    </div>
  );
}
