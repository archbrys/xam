/* eslint-disable react/button-has-type */
import React, { memo } from 'react'

enum Size {
  md = 'w-15',
  full = 'w-full',
}

enum ButtonStyle {
  light = 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2',
  default = 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 focus:outline-none',
}

type SizeType = keyof typeof Size
type ButtonStyleType = keyof typeof ButtonStyle

type ButtonProps = {
  type: 'submit' | 'reset' | 'button' | undefined
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  children?: React.ReactNode
  size?: SizeType
  buttonStyle?: ButtonStyleType
}

function Button({
  type,
  onClick,
  children,
  size = 'full',
  buttonStyle = 'default',
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${Size[size]} ${ButtonStyle[buttonStyle]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  children: '',
  onClick: () => {},
  size: 'full',
  buttonStyle: 'default',
}

export default memo(Button)
