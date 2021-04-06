import React, { FC } from 'react';

type ButtonTypes = {
  label: string;
  variant?: string;
  onClick(): void;
}

const BASE_BUTTON = 'rounded outline-none shadow py-2 px-4 font-normal tracking-wider text-lg'
const PRIMARY_BUTTON = `${BASE_BUTTON} bg-blue-500 hover:bg-blue-700 text-white font-bold`
const SECONDARY_BUTTON = `${BASE_BUTTON} bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-l`
const OUTLINED_BUTTON = `${BASE_BUTTON} bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent`
const PILL_BUTTON = `${BASE_BUTTON} bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full`
const LIGHT_BUTTON = `${BASE_BUTTON} bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400`

const style = (variant) => {
  switch (variant) {
    case 'primary':
      return PRIMARY_BUTTON
    case 'outlined':
      return OUTLINED_BUTTON
    case 'secondary':
      return SECONDARY_BUTTON
    case 'light':
      return LIGHT_BUTTON
    case 'pill':
      return PILL_BUTTON
      break;

    default:
      break;
  }
}

export const Button: FC<ButtonTypes> = ({ onClick, label = "Some label", variant }) => {
  return (
    <button
      onClick={onClick}
      className={variant ? style(variant) : BASE_BUTTON}
    >
      <span>{label}</span>
    </button>
  )
};