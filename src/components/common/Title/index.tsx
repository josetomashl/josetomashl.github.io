import styles from './styles.module.scss';

type Props = {
  content: string;
};

export default function Title(props: Props) {
  return (
    <div className={styles.container}>
      <h2>{props.content}</h2>
      <div className={styles.line} />
    </div>
  );
}
