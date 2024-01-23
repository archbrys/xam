import React from 'react'
import AuthContext from '../context/AuthContext'
// eslint-disable-next-line import/prefer-default-export
export function useAuth() {
  return React.useContext(AuthContext)
}
