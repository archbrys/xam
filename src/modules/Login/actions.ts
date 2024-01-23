import { selectUsers } from '../../features/user/userSlice'
import { useAppSelector } from '../../store/hooks'
import { IUser } from '../User/interface'
import { IFormData } from './interface'

// eslint-disable-next-line import/prefer-default-export
export const authenticateUser = (
  payload: Partial<IFormData>,
  callback: (user: IUser | undefined) => void
) => {
  const users = useAppSelector(selectUsers)

  const user = users.find((userData) =>
    Object.values(userData).every((value1) =>
      Object.values(payload).includes(value1)
    )
  )
  callback(user)
}
