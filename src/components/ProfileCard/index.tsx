import Separator from "../Separator";
import styles from "./index.module.css";

export default function ProfileCard() {
  return (
    <aside className={styles.container}>
      <div className={styles.profileContainer}>
        <div className={styles.avatar}>
          <img src="/react.svg" alt="profile picture" loading="lazy" className={styles.avatarImage} />
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
      <nav></nav>
      <Separator />
      <div className={styles.socialMediaContainer}>
        <a href="https://www.linkedin.com/in/josetomas-hernandezlopez/" target="_blank">
          <img src="/linkedin.svg" alt="LinkedIn profile link" loading="lazy" />
        </a>
        <a href="https://github.com/josetomashl" target="_blank">
          <img src="/github.svg" alt="GitHub profile link" loading="lazy" />
        </a>
      </div>
    </aside>
  );
}
