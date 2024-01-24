import React, { useCallback, useState } from 'react'
import Input from '../../../common/Input'
import { INITIAL_USER_DATA, UserProperties } from '../constant'
import Button from '../../../common/Button'
import { addUser } from '../../../features/user/userSlice'
import { useAppDispatch } from '../../../store/hooks'

function AddUser() {
  const [formData, setFormData] = useState(INITIAL_USER_DATA)
  const dispatch = useAppDispatch()

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault()
    dispatch(addUser(formData))
  }

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
    setFormData(() => INITIAL_USER_DATA)
  }

  return (
    <section className="bg-gray-5">
      <div className="flex flex-col  justify-center py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 md:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6" onSubmit={handleOnSubmit}>
              <Input
                name={UserProperties.BranchId}
                placeholder="Branch Id"
                onChange={handleOnChange}
                value={formData.branchId}
              />
              <Input
                name={UserProperties.UserName}
                placeholder="Username"
                onChange={handleOnChange}
                value={formData.userName}
              />
              <Input
                name={UserProperties.FirstName}
                placeholder="First Name"
                onChange={handleOnChange}
                value={formData.firstName}
              />
              <Input
                name={UserProperties.MiddleName}
                placeholder="Middle Name"
                onChange={handleOnChange}
                value={formData.middleName}
              />
              <Input
                name={UserProperties.LastName}
                placeholder="Last Name"
                onChange={handleOnChange}
                value={formData.lastName}
              />
              <Input
                name={UserProperties.Position}
                placeholder="Position"
                onChange={handleOnChange}
                value={formData.position}
              />
              <Input
                name={UserProperties.Password}
                placeholder="Password"
                onChange={handleOnChange}
                value={formData.password}
              />
              <div className="flex flex-row-reverse">
                <Button type="submit" size="md">
                  Add
                </Button>
                <Button
                  type="button"
                  size="md"
                  buttonStyle="light"
                  onClick={reset}
                >
                  Reset
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AddUser
