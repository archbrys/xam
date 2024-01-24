import React from 'react'
import { useField } from 'formik'
import Input from './Input'

function FormInput(props: any) {
  const [field, meta] = useField(props as any)

  return (
    <>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <Input
        error={meta.touched && !!meta.error ? meta.error : null}
        {...field}
        {...props}
      />
    </>
  )
}

export default FormInput
