import useTranslation from '@/hooks/useTranslations';
import { useEffect, useRef, useState } from 'react';
import Icon from '../Icon';
import styles from './styles.module.scss';

// FIXME: add optional icons to render left to the label
export interface DropdownOption {
  label: string;
  value: string;
}

type Props = {
  label?: string;
  options: DropdownOption[];
  value?: DropdownOption;
  onChange: (item: DropdownOption) => void;
  disabled?: boolean;
};

export default function Dropdown(props: Props) {
  const { trans } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const handleItemClick = (item: DropdownOption) => {
    if (!props.disabled) {
      props.onChange(item);
      setIsOpen(false);
    }
  };

  return (
    <div ref={ref} className={`${styles.dropdownContainer} `}>
      <button
        onClick={() => !props.disabled && setIsOpen((prev) => !prev)}
        className={`${styles.dropdownButton} ${props.disabled ? styles.dropdownDisabled : ''}`}
        disabled={props.disabled}>
        {props.value ? trans(props.value.label) : props.label || 'Select an option'}
        <Icon name={isOpen ? 'chevronUp' : 'chevronDown'} size={16} />
      </button>
      {isOpen && !props.disabled && (
        <ul className={styles.dropdownList}>
          {props.options.map((item) => (
            <li
              key={item.value}
              className={`${styles.dropdownOption} ${item.value === props.value?.value ? styles.selected : ''}`}
              onClick={() => handleItemClick(item)}>
              {trans(item.label)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
