import Icon from "@/components/Icon";
import Separator from "@/components/Separator";
import useDownload from "@/hooks/useDownload";
import useShare from "@/hooks/useShare";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

import ME from "@/data/me";

export default function ProfileCard() {
  const { isShared, share } = useShare();
  const { isDownloaded, download } = useDownload("/files/resume-ES.pdf");
  const [settingsHover, setSettgingsHover] = useState(false);

  return (
    <aside className={styles.container}>
      <div className={styles.profileContainer}>
        <div className={styles.avatar}>
          <img src={ME.avatar} alt="profile picture" loading="lazy" className={styles.avatarImage} />
        </div>
        <h1 className={styles.name}>
          {ME.name}
          <br />
          {ME.surname}
        </h1>
        <span className={styles.badge}>
          <p>{ME.title}</p>
        </span>
      </div>
      <Separator />
      <div className={styles.infoContainer}>
        <Link
          to={`mailto:${ME.email}?subject=Contact request from "${window.location.href}"`}
          target="_blank"
          className={styles.infoItem}
        >
          <Icon name="email" />
          <div>
            <h5 className={styles.infoHeader}>EMAIL</h5>
            <p>{ME.email}</p>
          </div>
        </Link>
        <Link to={`tel:${ME.location.telCode}${ME.tel}`} target="_blank" className={styles.infoItem}>
          <Icon name="phone" />
          <div>
            <h5 className={styles.infoHeader}>PHONE</h5>
            <p>{ME.phone}</p>
          </div>
        </Link>
      </div>
      <Separator />
      <div className={styles.socialMediaContainer}>
        <a href="#" onClick={download}>
          <Icon name={isDownloaded ? "check" : "download"} />
        </a>
        <a href="#" onClick={share}>
          <Icon name={isShared ? "check" : "link"} />
        </a>
        <Link
          to="/settings"
          className={settingsHover ? styles.rotate : undefined}
          onMouseEnter={() => setSettgingsHover(true)}
          onMouseLeave={() => setSettgingsHover(false)}
        >
          <Icon name="settings" />
        </Link>
      </div>
    </aside>
  );
}
