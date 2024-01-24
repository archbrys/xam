import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../modules/User/interface'
import { users as mock_users } from '../../mock/users_data'
import { name } from '../../modules/User/constant'
import type { RootState } from '../../store/store'

export interface UserState {
  users: IUser[]
}

const initialState: UserState = {
  users: mock_users,
}

export const userSlice = createSlice({
  name,
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      state.users.push(action.payload)
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    removeUser: (state, action: PayloadAction<IUser>) => {
      const userToRemove = action.payload
      return {
        ...state,
        users: state.users.filter(
          (user) =>
            !(
              user.branchId === userToRemove.branchId &&
              user.userName === userToRemove.userName
            )
        ),
      }
    },
  },
})

export const { addUser, removeUser } = userSlice.actions

export const selectUsers = (state: RootState) => state.user.users

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default userSlice.reducer
