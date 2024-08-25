import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import styles from "./styles.module.css";

type BackProps = {
  to?: string;
};
export default function Back(props: BackProps) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to={props.to || "/"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ textDecoration: "none" }}
    >
      <div className={!hover ? styles.container : styles.containerHover}>
        <Icon name="arrowLeft" />
        <p className={!hover ? styles.text : styles.textHover}>Go back</p>
      </div>
    </Link>
  );
}
