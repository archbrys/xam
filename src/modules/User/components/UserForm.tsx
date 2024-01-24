import React from 'react'
import { Formik } from 'formik'

import { INITIAL_USER_DATA, UserProperties, userSchema } from '../constant'
import Button from '../../../common/Button'
import { addUser } from '../../../features/user/userSlice'
import { useAppDispatch } from '../../../store/hooks'
import Card from '../../../common/Card'
import FormInput from '../../../common/Input/components/FormInput'
import { IUserData } from '../interface'

function AddUser() {
  const dispatch = useAppDispatch()

  const handleOnSubmit = (
    values: IUserData,
    { resetForm }: { resetForm: any }
  ) => {
    resetForm()
    dispatch(addUser(values))
  }

  return (
    <section className="bg-gray-5">
      <Card>
        <Formik
          initialValues={INITIAL_USER_DATA}
          validate={(values) =>
            userSchema
              .validate(values, { abortEarly: false })
              .then(() => {})
              .catch((err) =>
                err.inner.reduce((obj: any, e: any) => {
                  // eslint-disable-next-line no-param-reassign
                  if (!(e.path in obj)) obj[e.path] = []
                  // eslint-disable-next-line no-param-reassign
                  obj[e.path] = obj[e.path].concat(e.errors)
                  return obj
                }, {})
              )
          }
          onSubmit={handleOnSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
            resetForm,
          }) => (
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <FormInput
                name={UserProperties.BranchId}
                placeholder="Branch Id"
                onChange={handleChange}
                value={values.branchId}
                error={
                  errors.branchId && touched.branchId ? errors.branchId : null
                }
              />
              <FormInput
                name={UserProperties.UserName}
                placeholder="Username"
                onChange={handleChange}
                value={values.userName}
                error={
                  errors.userName && touched.userName ? errors.userName : null
                }
              />
              <FormInput
                name={UserProperties.FirstName}
                placeholder="First Name"
                onChange={handleChange}
                value={values.firstName}
                error={
                  errors.firstName && touched.firstName
                    ? errors.firstName
                    : null
                }
              />
              <FormInput
                name={UserProperties.MiddleName}
                placeholder="Middle Name"
                onChange={handleChange}
                value={values.middleName}
                error={
                  errors.middleName && touched.middleName
                    ? errors.middleName
                    : null
                }
              />
              <FormInput
                name={UserProperties.LastName}
                placeholder="Last Name"
                onChange={handleChange}
                value={values.lastName}
                error={
                  errors.lastName && touched.lastName ? errors.lastName : null
                }
              />
              <FormInput
                name={UserProperties.Position}
                placeholder="Position"
                onChange={handleChange}
                value={values.position}
                error={
                  errors.position && touched.position ? errors.position : null
                }
              />
              <FormInput
                type="password"
                name={UserProperties.Password}
                placeholder="Password"
                onChange={handleChange}
                value={values.password}
                error={
                  errors.password && touched.password ? errors.password : null
                }
              />
              <div className="flex flex-row-reverse">
                <Button type="submit" size="md" disabled={isSubmitting}>
                  Add
                </Button>
                <Button
                  type="reset"
                  size="md"
                  buttonStyle="light"
                  disabled={isSubmitting}
                  onClick={() => resetForm()}
                >
                  Reset
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </Card>
    </section>
  )
}

export default AddUser
