import { useState } from "react";
import { Link } from "react-router-dom";
import Separator from "../Separator";
import styles from "./index.module.css";

export default function ProfileCard() {
  const [sharedLink, setSharedLink] = useState(false);
  const shareLink = () => {
    setSharedLink(true);
    navigator.clipboard.writeText(window.location.href);
    setTimeout(() => {
      setSharedLink(false);
    }, 1500);
  };

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
            <img src="/icons/email.svg" alt="email address" />
          </Link>
          <div>
            <h5 className={styles.infoHeader}>EMAIL</h5>
            <p>josetomash.lopez@gmail.com</p>
          </div>
        </div>
        <div className={styles.infoItem}>
          <Link to={`tel:+34601286000`} target="_blank">
            <img src="/icons/phone.svg" alt="mobile phone" />
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
        <a href="#" onClick={shareLink}>
          <img src={sharedLink ? "/icons/check.svg" : "/icons/link.svg"} alt="Link to this website" loading="lazy" />
        </a>
      </div>
    </aside>
  );
}
