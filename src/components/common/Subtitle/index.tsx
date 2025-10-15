import styles from './styles.module.scss';

type Props = {
  content: string;
};

export default function Subtitle(props: Props) {
  return <h3 className={styles.subtitle}>{props.content}</h3>;
}
