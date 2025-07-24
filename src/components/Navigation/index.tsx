import { Link, useLocation } from 'react-router';
import styles from './styles.module.scss';

export default function Navigation() {
  const location = useLocation();

  const checkRoute = (expectedPathname: string): string | undefined => {
    if (location.pathname.includes(expectedPathname)) {
      return styles.current;
    }
    return undefined;
  };

  return (
    <nav className={styles.container}>
      <Link to='/about' className={checkRoute('/about')}>
        About
      </Link>
      <Link to='/education' className={checkRoute('/education')}>
        Education
      </Link>
      <Link to='/experience' className={checkRoute('/experience')}>
        Experience
      </Link>
      <Link to='/portfolio' className={checkRoute('/portfolio')}>
        Portfolio
      </Link>
      <Link to='/contact' className={checkRoute('/contact')}>
        Contact
      </Link>
    </nav>
  );
}
