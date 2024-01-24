import * as Yup from 'yup'

// eslint-disable-next-line import/prefer-default-export
export const name = 'USER'

export const INITIAL_USER_DATA = {
  branchId: '',
  userName: '',
  password: '',
  firstName: '',
  middleName: '',
  lastName: '',
  position: '',
}

export enum UserProperties {
  BranchId = 'branchId',
  UserName = 'userName',
  Password = 'password',
  FirstName = 'firstName',
  MiddleName = 'middleName',
  LastName = 'lastName',
  Position = 'position',
}

export enum OtherProperties {
  Number = 'number',
  Name = 'name',
  Action = 'action',
}

export const USERS_TABLE_HEADER = [
  { id: OtherProperties.Number, name: '#' },
  { id: UserProperties.BranchId, name: 'Branch Id', isSortable: true },
  { id: UserProperties.UserName, name: 'Username' },
  { id: OtherProperties.Name, name: 'Name' },
  { id: UserProperties.Position, name: 'Position' },
  { id: OtherProperties.Action, name: 'Action' },
]

// Can add other validation rules here
export const userSchema = Yup.object({
  branchId: Yup.number()
    .typeError('Branch Id must be a number')
    .min(5, 'Must be at least 5 characters long')
    .required('Branch Id is required'),
  userName: Yup.string().required('Username is required'),
  firstName: Yup.string().required('First Name is required'),
  middleName: Yup.string().required('Middle Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  position: Yup.string().required('Position is required'),
  password: Yup.string()
    .min(5, 'Must be at least 5 characters long')
    .required('Please enter your password')
    .matches(/[a-z]+/, 'One lowercase character')
    .matches(/[A-Z]+/, 'One uppercase character')
    .matches(/[@$!%*#?&]+/, 'One special character')
    .matches(/\d+/, 'One number'),
})
