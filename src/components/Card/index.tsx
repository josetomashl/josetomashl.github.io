import React from "react";
import styles from "./styles.module.css";

export default function Card(props: React.PropsWithChildren) {
  return <div className={styles.container}>{props.children}</div>;
}
