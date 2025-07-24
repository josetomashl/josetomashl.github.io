import { ICONS } from '@/constants/icons';

type IconProps = {
  name: keyof typeof ICONS;
  color?: string;
  strokeWidth?: number;
  filled?: boolean;
};

export default function Icon(props: IconProps) {
  const name = ICONS[props.name] || ICONS['settings'];
  const color = props.color || '#ebebeb';

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      role='img'>
      <path d={name} fill={props.filled ? color : 'none'} stroke={color} />
    </svg>
  );
}
