import SvgIcon from '../../SvgIcon/SvgIcon';
import { footer } from './footer.constants';

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 dark:text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="mt-8 flex justify-center space-x-6">
          {footer.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500 h-6 w-6"
            >
              <SvgIcon
                path={item.path}
                fill={'#6C7380'}
                height={1500}
                width={1500}
              />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
