import { useState } from 'react';

import { COLORS } from '@/constants/colors';
import { type IconName, ICONS } from '@/constants/icons';

type IconProps = {
  name: IconName;
  color?: string;
  strokeWidth?: number;
  filled?: boolean;
  size?: number;
  hoverColor?: string;
};

export default function Icon({
  size = 24,
  color = COLORS.light,
  name = 'settings',
  filled = false,
  strokeWidth = 2,
  hoverColor = color
}: IconProps) {
  const [currentColor, setCurrentColor] = useState(color);

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      onMouseEnter={() => setCurrentColor(hoverColor)}
      onMouseLeave={() => setCurrentColor(color)}
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      role='img'>
      <path d={ICONS[name]} fill={filled ? currentColor : 'none'} stroke={currentColor} />
    </svg>
  );
}
