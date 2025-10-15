import { useId } from 'react';

import styles from './styles.module.scss';

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
};

export default function Switch({ checked, onChange, disabled = false, label = '' }: Props) {
  const id = useId();

  const handleToggle = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <div className={styles.container}>
      <input type='checkbox' id={id} checked={checked} onChange={handleToggle} disabled={disabled} />
      <span
        className={`${styles.track} ${checked ? styles.checked : ''} ${disabled ? styles.disabled : ''}`}
        style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
        onClick={handleToggle}>
        <span className={styles.thumb} />
      </span>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  );
}
