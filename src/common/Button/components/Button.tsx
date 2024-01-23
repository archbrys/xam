/* eslint-disable react/button-has-type */
import React, { memo } from 'react'

type InputProps = {
  type: 'submit' | 'reset' | 'button' | undefined
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  children?: React.ReactNode
}

function Input({ type, onClick, children }: InputProps) {
  return (
    <button
      type={type}
      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Input.defaultProps = {
  children: '',
  onClick: () => {},
}

export default memo(Input)
