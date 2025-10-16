import styles from './styles.module.scss';

interface Props {
  title?: string;
  url: string;
}

export const ImageViewer = ({ title = '', url }: Props) => {
  return (
    <div className={styles.container}>
      <h4>{title}</h4>
      <img src={url} alt={title} className={styles.img} loading='lazy' />
    </div>
  );
};
