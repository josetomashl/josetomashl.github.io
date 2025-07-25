import { NavLink, useLocation } from 'react-router';
import styles from './styles.module.scss';

export default function Navigation() {
  const location = useLocation();

  const checkRoute = (expectedPathname: string, exact = false): string | undefined => {
    if (!exact && location.pathname.includes(expectedPathname)) {
      return styles.current;
    } else if (exact && location.pathname === expectedPathname) {
      return styles.current;
    }
    return undefined;
  };

  return (
    <nav className={styles.container}>
      <NavLink to='/' className={checkRoute('/', true)}>
        About
      </NavLink>
      <NavLink to='/education' className={checkRoute('/education')}>
        Education
      </NavLink>
      <NavLink to='/experience' className={checkRoute('/experience')}>
        Experience
      </NavLink>
      <NavLink to='/portfolio' className={checkRoute('/portfolio')}>
        Portfolio
      </NavLink>
      <NavLink to='/contact' className={checkRoute('/contact')}>
        Contact
      </NavLink>
    </nav>
  );
}
