import { FC } from 'react';
import Fade from 'react-reveal/Fade';
import SvgIcon from '../SvgIcon/SvgIcon';
import { iconsPath } from '../SvgIcon/constant.icons';

export interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  delay?: number;
  icon: {
    url: string;
  };
  social: {
    facebook: string;
    twitter: string;
    github: string;
    linkedin: string;
  };
}
const TeamCard: FC<TeamMemberProps> = ({
  name,
  icon,
  role,
  description,
  delay = 1,
  social = {
    facebook: '',
    twitter: '',
    github: '',
    linkedin: '',
  },
}) => {
  const socialTable = Object.keys(social).map((key) => [key, social[key]]);
  return (
    <div key={name} className="p-4 max-w-xs">
      <Fade right delay={delay * 300 + 300} distance="20px">
        <div className="text-center mb-4 opacity-90">
          <a href="#" className="block relative">
            <img
              alt={name}
              src={icon.url}
              className="mx-auto object-cover rounded-full h-40 w-40 "
            />
          </a>
        </div>
        <div className="text-center">
          <p className="text-2xl text-gray-800 dark:text-white">{name}</p>
          <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
            {role}
          </p>
          <p className="text-md text-gray-500 dark:text-gray-400 py-4 font-light">
            {description}
          </p>
        </div>
        <div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-between">
          {socialTable.map((s) => (
            <a key={s[1]} href={s[1]}>
              <SvgIcon path={iconsPath[s[0]]} width={30} height={30} />
            </a>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default TeamCard;
