/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from '@headlessui/react';

import {
  HiOutlineAnnotation,
  HiOutlineMenu,
  HiOutlinePhone,
  HiOutlineX,
} from 'react-icons/hi';
import Link from 'next/link';
import React, { Fragment } from 'react';
import * as gtag from '../../lib/gtag';
import { iconsPath } from '../SvgIcon/constant.icons';
import SvgIcon from '../SvgIcon/SvgIcon';
import ThemeSwitch from '../ThemeSwitch/theme-switch';

const navItems = [
  {
    name: 'Services',
    href: `/#services`,
  },
  {
    name: 'Technologies',
    href: `/#technologies`,
  },
  {
    name: 'How We Work',
    href: `/#workflow`,
  },
  {
    name: 'Values',
    href: `/#values`,
  },
  {
    name: 'Team',
    href: `/#team`,
  },
];
const callsToAction = [
  { name: 'Blog', href: '/blog', icon: HiOutlineAnnotation },
  { name: 'Contact Sales', href: '/#contact', icon: HiOutlinePhone },
];
const goToSection = (destination) => {
  return (event: React.MouseEvent) => {
    gtag.event({
      action: 'SECTION',
      category: 'Navigation',
      label: 'Section Changed',
      value: destination,
    });
  };
};

export default function Navbar(): JSX.Element {
  return (
    <div className="navigation top-0 left-0 w-full z-30 duration-300 sticky">
      <Popover className="relative bg-white dark:bg-gray-800 dark:text-gray-300 shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <Link href="#transcend">
                    <a>
                      <span
                        className="sr-only"
                        onClick={goToSection('Transcend')}
                      >
                        Transcend
                      </span>
                      <SvgIcon
                        path={iconsPath.transcend}
                        viewBox="0 0 400 400"
                        width={50}
                        height={50}
                        fill={'currentColor'}
                      />
                    </a>
                  </Link>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                    <span className="sr-only">Open menu</span>
                    <HiOutlineMenu className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden md:flex space-x-10">
                  {navItems.map((item) => (
                    <Link href={item.href} key={item.href}>
                      <a
                        onClick={goToSection(item.name)}
                        className="px-3 py-2 rounded-md text-md font-medium text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-500"
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </Popover.Group>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <Link href="#contact">
                    <a
                      onClick={goToSection('Contact')}
                      className="uppercase flex-shrink-0 px-4 py-2 mr-3 text-base font-semibold text-white bg-gray-600 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                    >
                      Contact us
                    </a>
                  </Link>
                  <ThemeSwitch />
                </div>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black dark:ring-gray-500 ring-opacity-5 bg-white dark:bg-gray-800 dark:text-gray-300 divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <SvgIcon
                          path={iconsPath.transcend}
                          viewBox="0 0 400 400"
                          width={50}
                          height={50}
                          fill={'currentColor'}
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                          <span className="sr-only">Close menu</span>
                          <HiOutlineX className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                          {navItems.map((item) => (
                            <a
                              key={item.href}
                              href={item.href}
                              className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                            >
                              <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-300">
                                {item.name}
                              </span>
                            </a>
                          ))}
                        </div>
                      </nav>
                    </div>
                  </div>
                  <div className="rounded-lg shadow-lg ring-1 ring-black dark:ring-gray-500 ring-opacity-5 overflow-hidden">
                    <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                        {callsToAction.map((item) => (
                          <div key={item.name} className="flow-root">
                            <a
                              href={item.href}
                              className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="ml-3">{item.name}</span>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
