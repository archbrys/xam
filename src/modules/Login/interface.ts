export interface IFormData {
  branchId: string | number
  userName: string
  password: string
}

export enum FormProperties {
  BranchId = 'branchId',
  UserName = 'userName',
  Password = 'password',
}
