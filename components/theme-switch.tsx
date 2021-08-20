import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import * as gtag from "../lib/gtag";
import classNames from "classnames";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const dark = theme === "dark" ? true : false;
  const [enabled, setEnabled] = useState(dark);
  useEffect(() => setEnabled(false), []);
  useEffect(() => {
    setTheme(enabled ? "dark" : "light");
  }, [enabled, setTheme]);
  const handleChange = (nextChecked: boolean) => {
    setEnabled(nextChecked);
    gtag.event({
      action: "CHANGE_THEME",
      category: "UI",
      label: "Theme Changed",
      value: enabled ? "light" : "dark",
    });
  };
  return (
    <>
      <SunIcon className="h-5" />
      <Switch
        checked={enabled}
        onChange={handleChange}
        className={classNames(
          "mx-1 relative inline-flex items-center h-6 rounded-full w-11 dark:",
          {
            "bg-gray-700": enabled,
            "bg-yellow-400": !enabled,
          }
        )}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={classNames(
            "inline-block w-4 h-4 transform bg-white rounded-full",
            {
              "translate-x-6": enabled,
              "translate-x-1": !enabled,
            }
          )}
        />
      </Switch>
      <MoonIcon className="h-5" />
    </>
  );
}
