import { Switch } from '@headlessui/react';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import * as gtag from '../lib/gtag';

export default function ThemeSwitch(): JSX.Element {
  const { theme, setTheme } = useTheme();
  const dark = theme === 'dark' ? true : false;
  const [enabled, setEnabled] = useState(dark);
  useEffect(() => setEnabled(false), []);
  useEffect(() => {
    setTheme(enabled ? 'dark' : 'light');
  }, [enabled, setTheme]);
  const handleChange = (nextChecked: boolean) => {
    setEnabled(nextChecked);
    gtag.event({
      action: 'CHANGE_THEME',
      category: 'UI',
      label: 'Theme Changed',
      value: enabled ? 'light' : 'dark',
    });
  };
  return (
    <>
      <SunIcon className="h-5" />
      <Switch
        checked={enabled}
        onChange={handleChange}
        className={clsx(
          'mx-1 relative inline-flex items-center h-6 rounded-full w-11 dark:',
          enabled ? 'bg-gray-700' : 'bg-yellow-400'
        )}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={clsx(
            'inline-block w-4 h-4 transform bg-white rounded-full',
            enabled ? 'translate-x-6' : 'translate-x-1'
          )}
        />
      </Switch>
      <MoonIcon className="h-5" />
    </>
  );
}
