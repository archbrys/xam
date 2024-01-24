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

// Should be inside of input fields for handling error style
export const ERROR_STYLE =
  'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-72 p-2.5'
export const DEFAULT_STYLE =
  'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-72 p-2.5'
