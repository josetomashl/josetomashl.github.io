import type { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

export default function Card(props: PropsWithChildren) {
  return <div className={styles.container}>{props.children}</div>;
}
