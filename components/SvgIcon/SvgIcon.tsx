import { FC } from 'react';
import clsx from 'clsx';

export interface SvgIconProps {
  width: number;
  height: number;
  fill: string;
  className: string;
  viewBox: string;
  path: string;
}

const SvgIcon: FC<SvgIconProps> = ({
  width=30,
  height=30,
  fill="currentColor",
  className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200",
  viewBox="0 0 1792 1792",
  path,
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      className={className}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path} />
    </svg>
  );
};

export default SvgIcon;
