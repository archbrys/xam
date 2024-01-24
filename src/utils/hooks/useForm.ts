import { useCallback, useState } from 'react'
import { UserProperties } from '../../modules/User/constant'

// eslint-disable-next-line import/prefer-default-export
export function useForm<T>(initialValue: T) {
  const [formData, setFormData] = useState(initialValue)

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target

      setFormData((prevFormData) => {
        const newValue =
          name === UserProperties.BranchId && parseInt(value, 10)
            ? +value
            : value
        return {
          ...prevFormData,
          [name]: newValue,
        }
      })
    },
    []
  )

  const reset = () => {
    setFormData(() => initialValue)
  }

  return { formData, handleOnChange, reset }
}
