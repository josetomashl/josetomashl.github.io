import useShare from "@/hooks/useShare";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import Separator from "../Separator";
import styles from "./index.module.css";

export default function ProfileCard() {
  const { isShared, share } = useShare();

  return (
    <aside className={styles.container}>
      <div className={styles.profileContainer}>
        <div className={styles.avatar}>
          <img src="/icons/react.svg" alt="profile picture" loading="lazy" className={styles.avatarImage} />
        </div>
        <h1 className={styles.name}>
          José Tomás
          <br />
          Hernández López
        </h1>
        <span className={styles.badge}>
          <p>Software Engineer</p>
        </span>
      </div>
      <Separator />
      <div className={styles.infoContainer}>
        <div className={styles.infoItem}>
          <Link
            to={`mailto:josetomas.hlopez@gmail.com?subject=Contact request from "${window.location.href}"`}
            target="_blank"
          >
            <Icon name="email" />
          </Link>
          <div>
            <h5 className={styles.infoHeader}>EMAIL</h5>
            <p>josetomas.hlopez@gmail.com</p>
          </div>
        </div>
        <div className={styles.infoItem}>
          <Link to={`tel:+34601286000`} target="_blank">
            <Icon name="phone" />
          </Link>
          <div>
            <h5 className={styles.infoHeader}>PHONE</h5>
            <p>(+34) 601 28 60 00</p>
          </div>
        </div>
      </div>
      <Separator />
      <div className={styles.socialMediaContainer}>
        <a href="https://www.linkedin.com/in/josetomas-hernandezlopez/" target="_blank">
          <img src="/icons/linkedin.svg" alt="LinkedIn profile link" loading="lazy" />
        </a>
        <a href="https://github.com/josetomashl" target="_blank">
          <img src="/icons/github.svg" alt="GitHub profile link" loading="lazy" />
        </a>
        <a href="#" onClick={share}>
          <Icon name={isShared ? "check" : "link"} />
        </a>
      </div>
    </aside>
  );
}
