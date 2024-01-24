import React, { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { INITIAL_FORM_DATA } from '../constant'
import Input from '../../../common/Input'
import Button from '../../../common/Button'
import { selectUsers } from '../../../features/user/userSlice'
import { useAppSelector } from '../../../store/hooks'
import { IUser } from '../../User/interface'
import { useAuth } from '../../../utils/hooks/useAuth'
import { UserProperties } from '../../User/constant'
import { useForm } from '../../../utils/hooks/useForm'

function LoginForm() {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()
  const { formData, handleOnChange } = useForm(INITIAL_FORM_DATA)
  const from = location.state?.from?.pathname || '/'

  //   const [formData, setFormData] = useState(INITIAL_FORM_DATA)
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
        auth.login(user, () => {
          //  Send them back to the page they tried to visit when they were redirected to the login page.
          navigate(from, { replace: true })
        })
      }
    })
  }

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleOnSubmit}>
      <Input
        name={UserProperties.BranchId}
        label="Branch Id"
        onChange={handleOnChange}
        value={formData.branchId}
      />
      <Input
        name={UserProperties.UserName}
        label="Username"
        onChange={handleOnChange}
        value={formData.userName}
      />
      <Input
        name={UserProperties.Password}
        label="Password"
        onChange={handleOnChange}
        value={formData.password}
      />
      <Button type="submit">Sign in</Button>
    </form>
  )
}

export default LoginForm
