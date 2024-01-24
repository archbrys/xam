import * as Yup from 'yup'

// eslint-disable-next-line import/prefer-default-export
export const INITIAL_FORM_DATA = {
  branchId: '',
  userName: '',
  password: '',
}

// Can add other validation rules here
export const loginSchema = Yup.object({
  branchId: Yup.number()
    .typeError('Branch Id must be a number')
    .min(5, 'Must be at least 5 characters long')
    .required('Branch Id is required'),
  userName: Yup.string().required('Usernanme is required'),
  password: Yup.string().required('Password is required'),
})
