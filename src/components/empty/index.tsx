import { useEffect, useState } from "react";
import styles from "./styles.module.css";

type EmptyProps = {
  text?: string;
};

export default function Empty(props: EmptyProps) {
  const [content, setContent] = useState<string>("No results found.");
  useEffect(() => {
    if (props.text) {
      setContent(props.text);
    }
  }, [props]);

  return (
    <div className={styles.card}>
      <p className={styles.text}>{content}</p>
    </div>
  );
}
