import React, { memo } from 'react'

type InputProps = {
  [key: string]: any
  label?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: any
  type?: string
  name: string
  required?: boolean
}

function Input({
  label,
  onChange,
  value,
  type,
  name,
  required,
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
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-72 p-2.5 "
          required={required}
          onChange={onChange}
          value={value}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...rest}
        />
      </label>
    </div>
  )
}

Input.defaultProps = {
  label: '',
  type: 'text',
  required: false,
}

export default memo(Input)
