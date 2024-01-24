import { IUserData } from './interface'

// eslint-disable-next-line import/prefer-default-export
export const name = 'USER'

export const INITIAL_USER_DATA: IUserData = {
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
