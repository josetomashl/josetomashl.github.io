import { useState } from 'react';
import { Link, type To } from 'react-router';

import styles from './styles.module.scss';

type Props = {
  label: string;
  onClick?: () => Promise<void> | void;
  to?: To;
  blank?: boolean;
};

export default function Button(props: Props) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (!props.onClick) return;
    setLoading(true);
    await props.onClick();
    setLoading(false);
  };

  if (props.to) {
    return (
      <Link to={props.to} className={styles.button} target={props.blank ? '_blank' : undefined}>
        {props.label}
      </Link>
    );
  }

  return (
    <button type='button' onClick={handleClick} disabled={loading} className={styles.button}>
      {props.label}
    </button>
  );
}
