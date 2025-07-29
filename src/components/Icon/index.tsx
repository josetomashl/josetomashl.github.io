import { type IconName, ICONS } from '@/constants/icons';

type IconProps = {
  name: IconName;
  color?: string;
  strokeWidth?: number;
  filled?: boolean;
  size?: number;
};

export default function Icon(props: IconProps) {
  const name = ICONS[props.name] || ICONS['settings'];
  const color = props.color || 'var(--light)';
  const size = props.size || 24;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      role='img'>
      <path d={name} fill={props.filled ? color : 'none'} stroke={color} />
    </svg>
  );
}
