export interface IUser {
  branchId: number | string
  userName: string
  password: string
  firstName: string
  middleName: string
  lastName: string
  position: string
}

export interface IUserData extends IUser {
  branchId: number | string
}
