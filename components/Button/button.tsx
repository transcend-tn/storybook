import React, { FC } from "react";
import clsx from "clsx";
import { action } from "@storybook/addon-actions";

export enum buttonType {
  button='button',
  submit='submit',
  reset='reset'
}

export enum colorType {
  blue="blue",
  gray="gray",
  green="green",
  red="red",
  yellow="yellow",
  pink="pink",
  indigo="indigo",
  light="light",
  dark="dark",
}

interface ButtonProps {
  label: string;
  color?: colorType;
  typeHTML?: buttonType;
  outlined?: boolean;
  rounded?: boolean;
};
console.log(buttonType.button)
const BASE_BUTTON = "outline-none shadow py-2 px-6 font-normal tracking-wider text-lg";

const setTextColor = (textColor, textOpacity?, hoverTextColor?) => {
  return clsx(
    textOpacity && `text-${textColor}-${textOpacity}`,
    !textOpacity && `text-${textColor}`,
    hoverTextColor && `hover:text-${hoverTextColor}`
  );
};
const setBackground = (
  bgColor,
  bgOpacity,
  hoverBgColor,
  hoverBgColorOpacity
) => {
  return `${BASE_BUTTON} bg-${bgColor}-${bgOpacity} hover:bg-${hoverBgColor}-${hoverBgColorOpacity}`;
};
const setBorder = (brColor = "transparent", brOpacity = "0") => {
  return `border border-${brColor}-${brOpacity} hover:border-transparent`;
};

const paint = (color, outlined, rounded) => {
  switch (color) {
    case "light":
      return clsx(
        !outlined &&
          clsx(
            setBackground("gray", "100", "gray", "200"),
            setTextColor("gray", "800", "black")
          ),
        outlined &&
          clsx(
            setBackground("transparent", "100", "gray", "100"),
            setTextColor("black", "200", "black"),
            setBorder("gray", "300")
          ),
        rounded && "rounded-full"
      );
    case "dark":
      return clsx(
        !outlined &&
          clsx(
            setBackground("gray", "700", "gray", "800"),
            setTextColor("white")
          ),
        outlined &&
          clsx(
            setBackground("transparent", "100", "gray", "700"),
            setTextColor("gray", "700", "white"),
            setBorder("gray", "500")
          ),
        rounded && "rounded-full"
      );

    default:
      return clsx(
        !outlined &&
          clsx(
            setBackground(color, "500", color, "700"),
            setTextColor("white")
          ),
        outlined &&
          clsx(
            setBackground("transparent", "100", color, "500"),
            setTextColor(color, "700", "white"),
            setBorder(color, "500")
          ),
        rounded && "rounded-full"
      );
  }
};

export const Button: FC<ButtonProps> = ({
  label = "Button",
  color = colorType.blue,
  typeHTML = buttonType.button,
  outlined = false,
  rounded = false,
}) => {
  return (
    <button className={paint(color, outlined, rounded)} onClick={action("clicked")} type={typeHTML}>
      <span>{label}</span>
    </button>
  );
};
