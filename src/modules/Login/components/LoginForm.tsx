import React, { useState } from 'react'
import { Formik } from 'formik'
import { useLocation, useNavigate } from 'react-router-dom'
import { INITIAL_FORM_DATA, loginSchema } from '../constant'
import Button from '../../../common/Button'
import { selectUsers } from '../../../features/user/userSlice'
import { useAppSelector } from '../../../store/hooks'
import { IUser } from '../../User/interface'
import { useAuth } from '../../../utils/hooks/useAuth'
import { UserProperties } from '../../User/constant'
import FormInput from '../../../common/Input/components/FormInput'
import { IFormData } from '../interface'
import Alert from '../../../common/Alert'

function LoginForm() {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()
  const [credentialError, setCredentials] = useState(false)
  const from = location.state?.from?.pathname || '/'

  //   const [formData, setFormData] = useState(INITIAL_FORM_DATA)
  const users = useAppSelector(selectUsers)

  // Just to check if there is a user from our users list
  const authenticateUser = (
    credentials: IFormData,
    callback: (user: IUser | undefined) => void
  ) => {
    const user = users.find((userData) =>
      Object.values(credentials).every((value1) =>
        Object.values(userData).includes(value1)
      )
    )
    callback(user)
  }

  const handleOnSubmit = async (values: IFormData) => {
    setCredentials(true)
    authenticateUser(values, (user) => {
      if (!user) {
        setCredentials(true)
      } else {
        auth.login(user, () => {
          //  Send them back to the page they tried to visit when they were redirected to the login page.
          navigate(from, { replace: true })
        })
      }
    })
  }

  return (
    <Formik
      initialValues={INITIAL_FORM_DATA}
      validationSchema={loginSchema}
      onSubmit={handleOnSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          {credentialError && <Alert>Incorrect username or password!</Alert>}
          <FormInput
            name={UserProperties.BranchId}
            label="Branch Id"
            onChange={handleChange}
            value={values.branchId}
            error={errors.branchId && touched.branchId ? errors.branchId : null}
          />
          <FormInput
            name={UserProperties.UserName}
            label="Username"
            onChange={handleChange}
            value={values.userName}
            error={errors.userName && touched.userName ? errors.userName : null}
          />
          <FormInput
            type="password"
            name={UserProperties.Password}
            label="Password"
            onChange={handleChange}
            value={values.password}
            error={errors.password && touched.password ? errors.password : null}
          />
          <Button type="submit" disabled={isSubmitting}>
            Sign in
          </Button>
        </form>
      )}
    </Formik>
  )
}

export default LoginForm
