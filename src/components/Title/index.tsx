import styles from "./styles.module.css";

type TitleProps = {
  content: string;
};

export default function Title(props: TitleProps) {
  return (
    <div className={styles.container}>
      <h2>{props.content}</h2>
      <div className={styles.line} />
    </div>
  );
}
