import styles from './styles.module.scss';

type EmptyProps = {
  text?: string;
};

export default function Empty({ text }: EmptyProps = { text: 'No results found.' }) {
  return (
    <div className={styles.card}>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
