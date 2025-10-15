import styles from './styles.module.scss';

type Props = {
  language: string;
  year?: number;
  level: string;
};

export default function LanguageCard(props: Props) {
  return (
    <div className={styles.container}>
      <span>
        {props.language}
        {props.year && ` - ${props.year}`}
      </span>
      <h2>{props.level}</h2>
    </div>
  );
}
