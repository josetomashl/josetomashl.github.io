import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.css";

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
      <Link to="/about" className={checkRoute("/about")}>
        About
      </Link>
      <Link to="/resume" className={checkRoute("/resume")}>
        Resume
      </Link>
      <Link to="/portfolio" className={checkRoute("/portfolio")}>
        Portfolio
      </Link>
      <Link to="/blog" className={checkRoute("/blog")}>
        Blog
      </Link>
      <Link to="/contact" className={checkRoute("/contact")}>
        Contact
      </Link>
    </nav>
  );
}
