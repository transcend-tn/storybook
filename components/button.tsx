import React, { FC } from "react";

type ButtonTypes = {
  label: string;
  variant?: string;
  outlined?: boolean;
  rounded?: boolean;
  onClick(): void;
};

const BASE_BUTTON =
  "outline-none shadow py-2 px-4 font-normal tracking-wider text-lg";
const PRIMARY_BUTTON = `${BASE_BUTTON} bg-blue-500 hover:bg-blue-700 text-white`;
const SECONDARY_BUTTON = `${BASE_BUTTON} bg-gray-300 hover:bg-gray-400 text-gray-800`;
const SUCCESS_BUTTON = `${BASE_BUTTON} bg-green-500 hover:bg-green-600 text-white`;
const DANGER_BUTTON = `${BASE_BUTTON} bg-red-500 hover:bg-red-600 text-white`;
const WARNING_BUTTON = `${BASE_BUTTON} bg-yellow-400 hover:bg-yellow-500 text-black`;
const LIGHT_BUTTON = `${BASE_BUTTON} bg-white hover:bg-gray-100 text-gray-800`;
const DARK_BUTTON = `${BASE_BUTTON} bg-gray-700 hover:bg-gray-800 text-white`;

const OUTLINED_PRIMARY_BUTTON = `${BASE_BUTTON} bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border border-blue-500 hover:border-transparent`;
const OUTLINED_SECONDARY_BUTTON = `${BASE_BUTTON} bg-transparent hover:bg-gray-500 text-gray-700 hover:text-white border border-gray-500 hover:border-transparent`;
const OUTLINED_SUCCESS_BUTTON = `${BASE_BUTTON} bg-transparent hover:bg-green-500 text-green-700 hover:text-white border border-green-500 hover:border-transparent`;
const OUTLINED_DANGER_BUTTON = `${BASE_BUTTON} bg-transparent hover:bg-red-500 text-red-700 hover:text-white border border-red-500 hover:border-transparent`;
const OUTLINED_WARNING_BUTTON = `${BASE_BUTTON} bg-transparent hover:bg-yellow-500 text-yellow-700 hover:text-black border border-yellow-500 hover:border-transparent`;
const OUTLINED_LIGHT_BUTTON = `${BASE_BUTTON} bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-400`;
const OUTLINED_DARK_BUTTON = `${BASE_BUTTON} bg-transparent hover:bg-gray-700 text-gray-700 hover:text-white border border-gray-500 hover:border-transparent`;

const style = (variant, outlined, rounded) => {
  switch (variant) {
    case "primary":
      if (outlined)
        if (rounded) return `${OUTLINED_PRIMARY_BUTTON} rounded-full`;
        else return OUTLINED_PRIMARY_BUTTON;
      else if (rounded) return `${PRIMARY_BUTTON} rounded-full`;
      else return PRIMARY_BUTTON;
    case "secondary":
      if (outlined)
        if (rounded) return `${OUTLINED_SECONDARY_BUTTON} rounded-full`;
        else return OUTLINED_SECONDARY_BUTTON;
      else if (rounded) return `${SECONDARY_BUTTON} rounded-full`;
      else return SECONDARY_BUTTON;
    case "light":
      if (outlined)
        if (rounded) return `${OUTLINED_LIGHT_BUTTON} rounded-full`;
        else return OUTLINED_LIGHT_BUTTON;
      else if (rounded) return `${LIGHT_BUTTON} rounded-full`;
      else return LIGHT_BUTTON;
    case "dark":
      if (outlined)
        if (rounded) return `${OUTLINED_DARK_BUTTON} rounded-full`;
        else return OUTLINED_DARK_BUTTON;
      else if (rounded) return `${DARK_BUTTON} rounded-full`;
      else return DARK_BUTTON;
    case "success":
      if (outlined)
        if (rounded) return `${OUTLINED_SUCCESS_BUTTON} rounded-full`;
        else return OUTLINED_SUCCESS_BUTTON;
      else if (rounded) return `${SUCCESS_BUTTON} rounded-full`;
      else return SUCCESS_BUTTON;
    case "warning":
      if (outlined)
        if (rounded) return `${OUTLINED_WARNING_BUTTON} rounded-full`;
        else return OUTLINED_WARNING_BUTTON;
      else if (rounded) return `${WARNING_BUTTON} rounded-full`;
      else return WARNING_BUTTON;
    case "danger":
      if (outlined)
        if (OUTLINED_DANGER_BUTTON)
          return `${OUTLINED_WARNING_BUTTON} rounded-full`;
        else return OUTLINED_DANGER_BUTTON;
      else if (rounded) return `${DANGER_BUTTON} rounded-full`;
      else return DANGER_BUTTON;
      break;

    default:
      break;
  }
};

export const Button: FC<ButtonTypes> = ({
  onClick,
  label = "Some label",
  variant,
  outlined = false,
  rounded = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={variant ? style(variant, outlined, rounded) : BASE_BUTTON}
    >
      <span>{label}</span>
    </button>
  );
};
