import { FC } from 'react';
export interface SvgIconProps {
  width: number;
  height: number;
  fill: string;
  path: string;
  viewBox: string;
}

const SvgIcon: FC<SvgIconProps> = ({
  width = 100,
  height = 100,
  fill = 'currentColor',
  path,
  viewBox= "0 0 1792 1792"
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path} />
    </svg>
  );
};

export default SvgIcon;
