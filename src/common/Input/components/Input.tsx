import React, { memo } from 'react'
import { DEFAULT_STYLE, ERROR_STYLE } from '../../../modules/Login/constant'

type InputProps = {
  [key: string]: any
  label?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: any
  type?: string
  name: string
  required?: boolean
  error?: any
}

function Input({
  label,
  onChange,
  value,
  type,
  name,
  required,
  error,
  ...rest
}: InputProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {label && <span>{label}</span>}
        <input
          type={type}
          name={name}
          id={name}
          className={error ? ERROR_STYLE : DEFAULT_STYLE}
          required={required}
          onChange={onChange}
          value={value}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...rest}
        />
        <p className="mt-2 text-sm text-red-600">{error}</p>
      </label>
    </div>
  )
}

Input.defaultProps = {
  label: '',
  type: 'text',
  required: false,
  error: '',
}

export default memo(Input)
