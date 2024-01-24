import React, { createContext, ReactNode, useMemo } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { USER_STORAGE_KEY } from '../constant'
import { IUser } from '../../modules/User/interface'

interface IAuthContext {
  currentUser: any | null
  login: (user: IUser, callback: VoidFunction) => void
  logout: (callback: VoidFunction) => void
}

const AuthContext = createContext<IAuthContext>(null!)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useLocalStorage(USER_STORAGE_KEY, null)
  const login = (newUser: IUser, callback: VoidFunction) => {
    setCurrentUser(newUser)
    callback()
  }

  const logout = (callback: VoidFunction) => {
    setCurrentUser(null)
    callback()
  }

  const userState = useMemo(
    () => ({ currentUser, login, logout }),
    [currentUser]
  )

  return (
    <AuthContext.Provider value={userState}>{children}</AuthContext.Provider>
  )
}

export default AuthContext
