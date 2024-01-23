import React, { useCallback, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { INITIAL_FORM_DATA } from '../constant'
import Input from '../../../common/Input'
import Button from '../../../common/Button'
import { selectUsers } from '../../../features/user/userSlice'
import { useAppSelector } from '../../../store/hooks'
import { IUser } from '../../User/interface'
import { FormProperties } from '../interface'

function LandingPage() {
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  const [formData, setFormData] = useState(INITIAL_FORM_DATA)
  const users = useAppSelector(selectUsers)

  // Just to check if there is a user from our users list
  const authenticateUser = useCallback(
    (callback: (user: IUser | undefined) => void) => {
      const user = users.find((userData) =>
        Object.values(formData).every((value1) =>
          Object.values(userData).includes(value1)
        )
      )
      callback(user)
    },
    [formData]
  )

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    authenticateUser((user) => {
      if (!user) {
        console.log('no user found')
      } else {
        //  Send them back to the page they tried to visit when they were redirected to the login page.
        navigate(from, { replace: true })
      }
    })
  }

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target

      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: name === FormProperties.BranchId ? +value : value,
      }))
    },
    []
  )

  return (
    <div className="flex justify-center items-center h-screen">
      <section className="bg-gray-5">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 md:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Login
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleOnSubmit}
              >
                <Input
                  name={FormProperties.BranchId}
                  label="Branch Id"
                  onChange={handleOnChange}
                  value={formData.branchId}
                />
                <Input
                  name={FormProperties.UserName}
                  label="Username"
                  onChange={handleOnChange}
                  value={formData.userName}
                />
                <Input
                  name={FormProperties.Password}
                  label="Password"
                  onChange={handleOnChange}
                  value={formData.password}
                />
                <Button type="submit">Sign in</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
