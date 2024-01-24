import React, { memo } from 'react'

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

const ERROR_STYLE =
  'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-72 p-2.5'
const DEFAULT_STYLE =
  'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-72 p-2.5'

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
  console.log(error)
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
        {Array.isArray(error) && error.length > 1 ? (
          error.map((err) => (
            <p className="mt-2 text-sm text-red-600">
              <span>&#8226;</span>
              {err}
            </p>
          ))
        ) : (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
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
