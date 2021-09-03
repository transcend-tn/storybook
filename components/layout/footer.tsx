import { iconsPath } from '../SvgIcon/constant.icons';
import SvgIcon from '../SvgIcon/SvgIcon';
/* This example requires Tailwind CSS v2.0+ */
const navigation = {
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/transcend.tn',
      path: iconsPath.facebook_c,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/transcend.tn/',
      path: iconsPath.instagram_c,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/TranscendTN',
      path: iconsPath.twitter_c,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/transcend-tn',
      path: iconsPath.github_c,
    },
  ],
};
export default function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 dark:text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
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
          Copyright &copy; 2020 - 2021 Transcend. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
