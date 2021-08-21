import { FC } from 'react';

export interface ServiceCardProps {
  name: string;
  description: string;
  iconUrl: string;
}
const ServiceCard: FC<ServiceCardProps> = ({ name, iconUrl, description }) => {
  return (
    <div key={name} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
      <div className="m-4">
        {iconUrl && <div className="icon text-5xl">
          <img className="mb-4 h-20 w-20 p-1 dark:bg-gray-50" src={iconUrl} />
        </div>}
        <div>
          {name && <h3 className="text-gray-800 dark:text-gray-300 font-semibold text-lg block mb-3 uppercase">
            {name}
          </h3>}
          {description && <p className="text-gray-600 dark:text-gray-400">{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
